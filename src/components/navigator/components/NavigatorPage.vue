<template>
    <div class="column wrap"
         :class="{ 'snow': pulse }">
        <NavigatorHeader v-on:snowflakes="snowflakes" :result="result"/>
        <div class=" content"
             @click="closeMenu">
            <transition name="fade"
                        mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import NavigatorHeader from './NavigatorHeader.vue'
    import { str } from '../../../utils/workers/workerCalculations'
    import { strRequest } from '../../../utils/workers/workerRequests'
    import { runWorker } from '../../../utils/workers/worker'

    export default {
        name: "NavigatorPage",
        components: { NavigatorHeader },
        data() {
            return {
                pulse: true,
                result: 0,
                resultRequest: null,
            }
        },
        watch: {
            result: function (e) {
                console.log('Результат вычислений ', e);
                this.result = e;
            },
            resultRequest: function (e) {
                console.log('resultRequest', e);
                // здесь результат runWorker
            }
        },
        created() {
            runWorker(str, this, 'result');
            runWorker(strRequest, this, 'resultRequest', ['https://jsonplaceholder.typicode.com/photos','https://jsonplaceholder.typicode.com/photos','https://jsonplaceholder.typicode.com/photos','https://jsonplaceholder.typicode.com/photos',]);
        },
        methods: {
            snowflakes() {
                this.pulse = !this.pulse;
            },
            closeMenu() {
                if (this.isCollapse) {
                    this.$store.dispatch('CHANGE_STATUS_MENU', false);
                }
            },
        }
    }
</script>

<style scoped>
    .column {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
    .content {
        height: 100%;
        background-color: #fff;
    }
    .wrap {
        background-color: rgb(84, 92, 100);
    }
    /*стили для transition не удалять*/
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .2s;
    }
    .fade-enter,
    .fade-leave-to
    {
        opacity: 0;
    }
    /* снежинки*/
    .snow {
        background-image: url('../../../assets/images/snowflake.png'), url('../../../assets/images/snowflake2.png'), url('../../../assets/images/snowflake3.png');
        height:100%;
        -webkit-animation: snow 200s linear infinite;
        -moz-animation: snow 200s linear infinite;
        -ms-animation: snow 200s linear infinite;
        animation: snow 20s linear infinite;
    }
    @keyframes snow {
        0% {background-position: 0 0, 0 0, 0 0;}
        100% {background-position: 500px 1000px, 400px 400px, 300px 300px;}
    }
    @keyframes snow {
        0% {background-position: 0 0, 0 0, 0 0;}
        100% {background-position: 500px 1000px, 400px 400px, 300px 300px;}
    }

    @-moz-keyframes snow {
        0% {background-position: 0 0, 0 0, 0 0;}
        100% {background-position: 500px 1000px, 400px 400px, 300px 300px;}
    }

    @-webkit-keyframes snow {
        0% {background-position: 0 0, 0 0, 0 0;}
        100% {background-position: 500px 1000px, 400px 400px, 300px 300px;}
    }

    @-ms-keyframes snow {
        0% {background-position: 0 0, 0 0, 0 0;}
        100% {background-position: 500px 1000px, 400px 400px, 300px 300px;}
    }
</style>

