<template>
    <div class="weather-background">
        <transition name="fade"
                    mode="out-in">
            <div v-loading="loading"
                 v-if="placeShow">
                <div class="column" style="height: 30vh; padding-top: 40px;">
                    <div class="row" style="justify-content: space-around;">
                        <div class="text-property" style="font-size: 50px;">Прогноз погоды</div>
                        <div class="column" style="padding-top: 16px;">
                            <div class="text-property">Москва</div>
                            <div style="color: #fff; font-size: 16px;">Отображены данные по состоянию на {{ runDate }}</div>
                        </div>

                    </div>
                </div>
                <div class="text-property">Температура {{ temperature }} С</div>
                <div class="text-property">Скорость ветра {{ wind }} м/с</div>
                <div class="cloud">
                    <div class="text-property">Сегодня {{ dataNow }}</div>
                    <img src="../../../assets/images/cloud-01.png" alt="" class="cloud1">
                    <!--<img src="../../../assets/images/cloud-02.png" alt="" class="cloud2">-->
                    <img src="../../../assets/images/cloud-03.png" alt="" class="cloud3">
                    <!--<img src="../../../assets/images/cloud-04.png" alt="" class="cloud4">-->
                </div>
            </div>
        </transition>
        <div v-if="!placeShow">
            <PageNotFound/>
        </div>
    </div>
</template>

<script>
    import homeApi from '../api/homeApi';
    import { handlers } from '../../../utils/handlers';
    import PageNotFound from "../../../components/pageNotFound/components/PageNotFound";
    import { DATE } from '../../../utils/date'

    export default {
        name: 'PredictionPage',
        components: { PageNotFound },
        data(){
            return {
                loading: false, // индикатор загрузки
                placeShow: true, // отображение контента
                temperature: '',
                wind: '',
                title: 'Прогнозирование',
            }
        },
        computed: {
            dataNow() {
                return DATE.countDateRU();
            },
            runDate() {
                return DATE.runDate();
            },
        },
        created() {
            this.getData(); // запрос данных при создании компонента
        },
        methods: {
            async getData() {
                try {
                    this.loading = true;
                    const response = await homeApi.get(); // здесь запрос данных с бэка
                    this.temperature = (response.data.main.temp - 273.5).toFixed(1);
                    this.wind = response.data.wind.speed;
                    this.placeShow = true;
                    this.loading = false;
                }
                catch (e) {
                    this.loading = true;
                    this.placeShow = false;
                    handlers.defaultErrorAPIHandler(e, 'Ошибка сервера');
                    this.loading = false;
                    console.log(e);
                }
            },

        }
    }
</script>

<style scoped>
    .column {
        display: flex;
        flex-direction: column;
    }
    .text-property {
        color: #fff;
        font-size: 23px;
    }
    .row {
        display: flex;
    }
    .weather-background {
        height: 100%;
        background: radial-gradient(circle farthest-corner at 100px 50px, #a4cdf5, #484c82);
    }
    /* облака */
    .cloud {
        overflow: hidden;
        position: relative;
        width:100%;
        padding-bottom: 56.25%;
        height: 0;
        background-size: cover;
    }
    .cloud img {
        width: 100%;
        left: 0;
        top: 0;
        position: absolute;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        pointer-events: none;
    }
    @-webkit-keyframes animCloud {
        from {
            -webkit-transform: translateX(100%)
        }
        to {
            -webkit-transform: translateX(-100%)
        }
    }
    @-moz-keyframes animCloud {
        from {
            -moz-transform: translateX(100%)
        }
        to {
            -moz-transform: translateX(-100%)
        }
    }
    @keyframes animCloud {
        from {
            -webkit-transform: translateX(100%);
            -moz-transform: translateX(100%);
            -ms-transform: translateX(100%);
            -o-transform: translateX(100%);
            transform: translateX(100%)
        }
        to {
            -webkit-transform: translateX(-100%);
            -moz-transform: translateX(-100%);
            -ms-transform: translateX(-100%);
            -o-transform: translateX(-100%);
            transform: translateX(-100%)
        }
    }
    .cloud1 {
        -webkit-animation: animCloud 20s infinite linear;
        -moz-animation: animCloud 20s infinite linear;
        animation: animCloud 20s infinite linear
    }
    .cloud2 {
        -webkit-animation: animCloud 40s infinite linear;
        -moz-animation: animCloud 40s infinite linear;
        animation: animCloud 40s infinite linear
    }
    .cloud3 {
        -webkit-animation: animCloud 60s infinite linear;
        -moz-animation: animCloud 60s infinite linear;
        animation: animCloud 60s infinite linear
    }
    .cloud4 {
        -webkit-animation: animCloud 80s infinite linear;
        -moz-animation: animCloud 80s infinite linear;
        animation: animCloud 80s infinite linear
    }
</style>
