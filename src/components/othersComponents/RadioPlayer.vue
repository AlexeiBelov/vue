<template>
    <div class="radio-player">
        <audio id="player" controls>
            <source :src="urlStream" type="audio/ogg; codecs=vorbis">
            <source :src="urlStream" type="audio/mpeg">
        </audio>

        <el-tooltip
                class="item"
                effect="light"
                content="Узнать исполнителя"
                placement="bottom">
            <i class="el-icon-s-tools tools" @click="getNameSinger"></i>
        </el-tooltip>

        <el-tooltip
                class="item"
                effect="light"
                content="Спокойное радио"
                placement="bottom">
            <i class="el-icon-video-play icon-radio-properties"
               v-if="play"
               @click="playRadio"></i>
            <i class="el-icon-video-pause icon-radio-properties rotate"
               v-else
               @click="pauseRadio"></i>
        </el-tooltip>

        <div class="slider-wrap">
            <el-slider
                    :show-tooltip="false"
                    @input="changeVolume"
                    class="slider-properties"
                    v-model="value"
                    height="104px">
            </el-slider>
        </div>

    </div>
</template>

<script>
    export default {
        name: "RadioPlayer",
        data() {
            return {
                audio: null,
                play: true,
                value: 40,
                urlStream: 'https://listen1.myradio24.com/6262',
                urlNameSinger: 'https://myradio24.com/users/6262/status.json'
            }
        },
        mounted() {
            this.audio = document.getElementById('player');
        },
        methods: {
            changeVolume(val) {
                this.audio.volume = val / 100;
            },
            getNameSinger() {
                this.axios.get(this.urlNameSinger)
                    .then((response) => {
                        this.$message({
                            message: `Сейчас исполняется ${response.data.song}`,
                            duration: 3000
                        })
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            playRadio() {
                this.audio.play();
                this.play = false;
            },
            pauseRadio() {
                this.audio.pause();
                this.play = true;
            }
        }
    }
</script>

<style scoped>
    audio {
        display: none;
    }
    .icon-radio-properties {
        color: #fff;
        margin: 0 16px;
        font-size: 24px;
        outline: none;
    }
    .radio-player {
        height: 22px;
        margin: 0 16px;
        line-height: 22px;
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
    }
    .radio-player:hover .slider-wrap {
        opacity: 1;
        height: 24px;
        transition: opacity 0.5s ease-out, height 1s step-start;
    }
    .radio-player:not(:hover) .slider-wrap {
        opacity: 0;
        height: 0;
        overflow: hidden;
        transition: opacity 0.5s ease-out, height 1s step-end;
    }
    .slider-wrap {
        display: flex;
        flex-direction: row;
        align-items: center;
        opacity: 0;
        height: 0;
        overflow: hidden;
        transition: opacity 0.5s ease-out, height 1s step-end;
        cursor: pointer;
    }
    .slider-properties {
        width: 160px;
        background: #ccc;
        height: 24px;
        border-radius: 5px;
        opacity: .8;
    }
    .tools {
        color: #fff;
        opacity: .8;
    }
    .radio-player:hover .tools {
        opacity: .6;
        height: 16px;
        transition: opacity 0.5s ease-out, height 1s step-start;
    }
    .radio-player:not(:hover) .tools {
        opacity: 0;
        height: 0;
        overflow: hidden;
        transition: opacity 0.5s ease-out, height 1s step-end;
    }
    /deep/ .el-slider__runway {
        width: 83%;
        height: 6px;
        margin: 9px 0;
        background-color: #E4E7ED;
        border-radius: 3px;
        position: relative;
        cursor: pointer;
        vertical-align: middle;
        left: 14px;
    }
    /deep/ .el-slider__bar {
        background-color: #545c64;
    }
    /deep/ .el-slider__button {
        border: 3px solid #545c64;
    }
    /* анимация */
    .rotate {
        -webkit-animation-name: cog;
        -webkit-animation-duration: 5s;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-timing-function: linear;
        -moz-animation-name: cog;
        -moz-animation-duration: 5s;
        -moz-animation-iteration-count: infinite;
        -moz-animation-timing-function: linear;
        -ms-animation-name: cog;
        -ms-animation-duration: 5s;
        -ms-animation-iteration-count: infinite;
        -ms-animation-timing-function: linear;

        animation-name: cog;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    @-ms-keyframes cog {
        from { -ms-transform: rotate(0deg); }
        to { -ms-transform: rotate(360deg); }
    }
    @-moz-keyframes cog {
        from { -moz-transform: rotate(0deg); }
        to { -moz-transform: rotate(360deg); }
    }
    @-webkit-keyframes cog {
        from { -webkit-transform: rotate(0deg); }
        to { -webkit-transform: rotate(360deg); }
    }
    @keyframes cog {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
    }
</style>
