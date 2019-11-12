<template>
    <div>
        <div class="header">
            <div class="header-menu header-menu-left">
                <svg role="img"
                     height="32"
                     viewBox="0 0 1024 1024"
                     style="margin:0 0 0 8px; cursor: pointer;" @click="showSnowflakes">
                    <path fill="#fff"
                          d="M930.267 471.656c-21.627-193.446-180.229-350.845-373.674-372.473v-93.719c245.111 21.627 445.766 221.081 467.393 466.192zM100.013 471.656h-93.719c21.627-245.111 219.879-444.564 463.789-466.192v93.719c-193.446 20.426-349.644 179.027-370.070 372.473zM471.284 421.192c0-63.681-25.232-121.354-67.285-164.609l62.479-66.084c58.875 58.875 99.727 140.578 100.928 229.491v412.123h-94.92v-410.922zM514.539 931.84h51.666v92.517h-51.666c-265.537 0-484.215-207.864-508.245-468.595h93.719c22.829 209.065 199.453 376.077 414.526 376.077z">
                    </path>
                </svg>
                <div class="header-menu-left-text">ОСНОВА 2.0</div>
            </div>

            <div class="header-menu-center">
                <NavigatorSelectPages :title="title"/>
            </div>

            <div class="header-menu header-menu-right">
                <div class="menu-right-exit">{{num}}</div>
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
    import CurrentTime from '../../CurrentTime.vue'
    import NavigatorSelectPages from './NavigatorSelectPages.vue'

    export default {
        name: "navigatorHeader",
        components: { CurrentTime, NavigatorSelectPages },
        props: {
            result: Number,
        },
        data() {
            return {
                exitName: 'Выход',
                snowflakes: false,
            }
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
            exit() {
                sessionStorage.removeItem('auth');
                this.$store.dispatch('AuthPage/CHANGE_TOKEN', false);
            },
            showSnowflakes() {
                this.snowflakes = !this.snowflakes;
                this.$emit('snowflakes', this.snowflakes);
            },
            resetPassword() {}
        }
    }
</script>

<style scoped>
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
        width: 20%;
    }
    .header-menu-left-text {
        color: #fff;
        font-size: 24px;
        font-weight: 600;
        margin-left: 16px;
    }
    .header-menu-center {
        width: 60%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .header-menu-right {
        width: 20%;
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
</style>
