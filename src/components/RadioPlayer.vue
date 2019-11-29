<template>
    <div class="radio-player">
        <audio id="player" controls>
            <source src="https://listen1.myradio24.com/6262" type="audio/ogg; codecs=vorbis">
            <source src="https://listen1.myradio24.com/6262" type="audio/mpeg">
        </audio>
        <el-tooltip class="item" effect="light" content="Спокойное радио" placement="bottom">
            <i class="el-icon-video-play icon-radio-properties"
               v-if="play"
               @click="playRadio"></i>
            <i class="el-icon-video-pause icon-radio-properties"
               v-else
               @click="pauseRadio"></i>
        </el-tooltip>
        <div class="slider-wrap">
            <el-slider
                    :show-tooltip="false"
                    @input="changeVolume"
                    class="slider-properties show-sound-control"
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
            }
        },
        mounted() {
            this.audio = document.getElementById('player');
        },
        methods: {
            changeVolume(val) {
                this.audio.volume = val / 100;
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
        cursor: pointer;
        margin: 0 16px;
        font-size: 24px;
        outline: none;
    }
    .radio-player {
        height: 22px;
        line-height: 22px;
        display: flex;
        flex-direction: row;
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
</style>
