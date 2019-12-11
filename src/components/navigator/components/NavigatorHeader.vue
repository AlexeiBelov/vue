<template>
    <div>
        <div class="header">
            <div class="header-menu header-menu-left">
                <el-tooltip class="item" effect="light" content="Мультимедиа" placement="bottom">
                    <svg role="img"
                         height="32"
                         viewBox="0 0 1024 1024"
                         style="margin:0 0 0 8px; cursor: pointer;"
                         @click="showSnowflakes"
                         :class="{ pulse: pulse }">
                        <path fill="#fff"
                              d="M930.267 471.656c-21.627-193.446-180.229-350.845-373.674-372.473v-93.719c245.111 21.627 445.766 221.081 467.393 466.192zM100.013 471.656h-93.719c21.627-245.111 219.879-444.564 463.789-466.192v93.719c-193.446 20.426-349.644 179.027-370.070 372.473zM471.284 421.192c0-63.681-25.232-121.354-67.285-164.609l62.479-66.084c58.875 58.875 99.727 140.578 100.928 229.491v412.123h-94.92v-410.922zM514.539 931.84h51.666v92.517h-51.666c-265.537 0-484.215-207.864-508.245-468.595h93.719c22.829 209.065 199.453 376.077 414.526 376.077z">
                        </path>
                    </svg>
                </el-tooltip>
                <div class="header-menu-left-text">ОСНОВА 2.0</div>
                <el-tooltip class="item" effect="light" content="Позалипать?" placement="bottom">
                    <img  v-show="snowflakes"
                          style="margin-left: 16px; cursor: pointer;"
                          src="../../../assets/images/snowflakeHeader.png"
                          @click="openFullScreen"/>
                </el-tooltip>
                <!--<i v-if="!snowflakes" class="el-icon-full-screen fullscreen-properties"
                   @click="openFullScreen"></i>-->
                <div v-if="fullScreen"
                     @click="closeFullscreen"
                     class="fullscreen snow"></div>
                <RadioPlayer v-if="snowflakes"/>
            </div>

            <div class="header-menu-center">
                <NavigatorSelectPages :title="title"/>
            </div>

            <div class="header-menu header-menu-right">
                <div class="menu-right-exit" @click="infoBigNumber">{{num}}</div>
                <CurrentTime/>
                <el-tooltip class="item"
                            effect="light"
                            content="Смена пароля"
                            placement="bottom-end">
                    <i class="el-icon-key menu-right-lk"
                       @click="resetPassword"></i>
                </el-tooltip>
                <el-tooltip class="item"
                            effect="light"
                            content="Личный кабинет"
                            placement="bottom-end">
                    <i class="el-icon-s-custom menu-right-lk"></i>
                </el-tooltip>
                <div class="menu-right-exit"
                     @click="exit">{{exitName}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import CurrentTime from '../../othersComponents/CurrentTime.vue'
    import RadioPlayer from '../../othersComponents/RadioPlayer.vue'
    import NavigatorSelectPages from './NavigatorSelectPages.vue'

    export default {
        name: "navigatorHeader",
        components: { CurrentTime, RadioPlayer, NavigatorSelectPages },
        props: {
            result: Number,
        },
        data() {
            return {
                exitName: 'Выход',
                pulse: false,
                snowflakes: false,
                fullScreen: false,
            }
        },
        created() {
            this.$notify({
                title: 'Мультимедиа',
                message: 'Для отображения/скрытия функций мультимедиа нажмите на иконку в левом верхнем углу.',
                duration: 0
            });
        },
        computed: {
            title: function() {
                return this.$route.name;
            },
            num: function () {
                return this.result;
            }
        },
        methods: {
            closeFullscreen() {
                this.fullScreen = !this.fullScreen;
            },
            exit() {
                sessionStorage.removeItem('auth');
                this.$store.dispatch('AuthPage/CHANGE_TOKEN', false);
            },
            infoBigNumber() {
                this.$notify.info({
                    title: 'Демонстрация возможностей Web Workers API',
                    duration: 6000,
                    message: 'Данное число получено с помощью интерфейса Worker из Web Workers API в фоновом потоке путем инкрементации в цикле на 10 миллиардов итераций без блокировки пользовательского интерфейса.'
                });
            },
            openFullScreen() {
                this.fullScreen = !this.fullScreen;
            },
            showSnowflakes() {
                this.$emit('snowflakes', this.snowflakes);
                this.snowflakes = !this.snowflakes;
                this.pulse = !this.pulse;
            },
            resetPassword() {}
        }
    }
</script>

<style scoped>
    .fullscreen {
        width: 100vw;
        height: 100vh;
        z-index: 10000;
        position: fixed;
        background-color: #545c64;
        top: 0;
        cursor: pointer;
    }
    .fullscreen-properties {
        cursor: pointer;
        color: #fff;
        margin-left: 16px;
    }
    .header {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        align-items: center;
        justify-content: space-between;
        height: 48px;
        background-color: transparent;
    }
    .header-menu {
        align-items: center;
        display: flex;
        flex-direction: row;
    }
    .header-menu-left {
        width: 30%;
    }
    .header-menu-left-text {
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        margin-left: 16px;
    }
    .header-menu-center {
        width: 40%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .header-menu-right {
        width: 30%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    .menu-right-lk {
        margin: 0 16px 0 0;
        color: #fff;
        cursor: pointer;
    }
    .menu-right-exit {
        margin: 0 16px 0 0;
        color: #fff;
        cursor: pointer;
        font-size: 14px;
    }
    /* анимация */
    .pulse {
        display: block;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 0 #fff;
        animation: pulse 2s infinite;
    }
    @-webkit-keyframes pulse {
        0% {
            -webkit-box-shadow: 0 0 0 0 #fff;
        }
        70% {
            -webkit-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
        }
        100% {
            -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
        }
    }
    @keyframes pulse {
        0% {
            -moz-box-shadow: 0 0 0 0 #fff;
            box-shadow: 0 0 0 0 #fff;
        }
        70% {
            -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
            box-shadow: 0 0 0 10px rgba(204,169,44, 0);
        }
        100% {
            -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
            box-shadow: 0 0 0 0 rgba(204,169,44, 0);
        }
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
