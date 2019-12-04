<template>
    <div>
        <div class="marquee">
            <span :style="{ color: textColor, 'font-size': size, width: widthElement }">{{textValue}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RunString",
        props: {
            color: String,
            text: String,
            textSize: String,
            width: String,
        },
        computed: {
            size() {
                return this.textSize;
            },
            textValue() {
                return this.text
            },
            textColor() {
                return this.color;
            },
            widthElement() {
                return this.width;
            }
        }
    }
</script>

<style scoped>
    .marquee{
        margin: 0 8px;
        white-space: nowrap;
        overflow: hidden;
    }

    .marquee span {
        font-size: 14px;
        display: inline-block;
        padding-left: 100%;
        -webkit-animation: marquee 10s infinite linear;
        animation: marquee 10s infinite linear;
    }

    @-webkit-keyframes marquee {
        0% { -webkit-transform: translate(0, 0); }
        100% { -webkit-transform: translate(-100%, 0); }
    }
    @keyframes marquee{
        0% { transform: translate(0, 0); }
        100% { transform: translate(-100%, 0) }
    }
</style>
