<template>
    <div>
        <div class="wrap">
            <div class="row">
                <input type="text"
                       readonly="readonly"
                       autocomplete="off"
                       :placeholder="name"
                       ref="inputNavigatorSelectPages"
                       @blur="blurSelect"
                       @click="clickSelect">
                <i class="el-icon-arrow-down arrow"></i>
            </div>
            <div class="dropdown-content"
                 :class="[{'dropdown-content-open': openList}]">
                <button @click="openPrediction">Прогнозирование</button>
                <button @click="openPlanning">Планирование</button>
                <button @click="openReports">Отчёты</button>
                <button @click="openZoomPage">Картинки</button>
                <button @click="openHomePage">Новогодняя</button>
                <button @click="openPayCard">Оплата картой</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavigatorSelectPages",
        props: {
            title: String,
        },
        data() {
            return {
                openList: false, //с полем связан селект dropdown-content-open для открытия выпадающего списка
            }
        },
        computed: {
            name: function () {
                console.log(this.$route);
                if (this.$route.matched.length > 0) {
                    //возвращает имя родительского роута если есть вложенность
                    return this.$route.matched[0].name;
                } else {
                    return this.$route.name;
                }
            }
        },
        methods: {
            blurSelect() {
                //скрытие выпадающего списка
                this.openList = false;
            },
            async clickSelect() {
                //скрытие выпадающего списка если нет класса dropdown-content-open
                this.openList = await this.getElementOpenList();
            },
            openPrediction() {
                this.$router.push('/prediction');
            },
            openPlanning() {
                this.$router.push('/planning/planningActualTasks');
            },
            openReports() {
                this.$router.push('/reports');
            },
            openHomePage() {
                this.$router.push('/');
            },
            openPayCard() {
                this.$router.push('/card');
            },
            openZoomPage() {
                this.$router.push('/zoom');
            },
            //возвращает логический тип
            getElementOpenList() {
                return !this.$el.querySelector('.dropdown-content-open');
            },
        }
    }
</script>

<style scoped>
    .arrow {
        margin-top: 8px;
        color: #fff;
        transition: .3s;
        transform: rotate(0deg);
        transform-origin: 8px;
    }
    button {
        color: #fff;
        background-color: rgb(84, 92, 100);
        cursor: pointer;
        padding: 18px;
        width: 100%;
        text-align: center;
        border: none;
        outline: none;
        transition: 0.4s;
        font-size: 14px;
    }
    button:hover {
        background-color: rgb(67, 74, 80);
    }
    .dropdown-content {
        display: flex;
        flex-direction: column;
        position: absolute;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        z-index: 10;
        max-height:0;
        overflow:hidden;
        margin: 16px 0 0 162px;
        -webkit-transition:max-height .35s linear;
        -moz-transition:max-height .35s linear;
        transition:max-height .35s linear;
    }
    /*селект для скрытия выпадающего списка*/
    .dropdown-content-open {
        max-height: 400px;
    }
    input {
        background-color: transparent;
        cursor: pointer;
        -webkit-appearance: none;
        background-image: none;
        border-radius: 0;
        border: none;
        box-sizing: border-box;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .3s cubic-bezier(.645,.045,.355,1);
        width: 304px;
        position: relative;
    }
    input:hover {
        transition: .3s;
    }
    input:not(:hover) {
        transition: .3s;
    }
    .row {
        display: flex;
        flex-direction: row;
    }
    /*стили для placeholder*/
    ::-webkit-input-placeholder {
        text-align: right;
        color: #fff;
        font-size: 28px;
        font-weight: bold;
    }
    :-moz-placeholder { /* Firefox 18- */
        text-align: right;
        color: #fff;
        font-size: 28px;
        font-weight: bold;
    }
    ::-moz-placeholder {  /* Firefox 19+ */
        text-align: right;
        color: #fff;
        font-size: 28px;
        font-weight: bold;
    }
    :-ms-input-placeholder {
        text-align: right;
        color: #fff;
        font-size: 28px;
        font-weight: bold;
    }
    .wrap {
        width: 400px;
    }
</style>
