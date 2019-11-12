<template>
    <div id="app">
        <!--<transition name="fade"
                    mode="out-in">-->
            <NavigatorPage v-if="show"
                           key="0"/>
        <!--</transition>
        <transition name="fade"
                    mode="out-in">-->
            <AuthPage v-if="!show"
                      key=""/>
        <!--</transition>-->
    </div>
</template>

<script>
import NavigatorPage from './components/navigator/components/NavigatorPage';
import AuthPage from './views/auth';

export default {
    name: 'app',
    components: {
        NavigatorPage,
        AuthPage
    },
    computed: {
        show: function() {
            return this.$store.getters['AuthPage/getToken'];
        },
    },
    mounted() {
        this.checkAuth();
    },
    methods: {
        //проверяет состояние токена в sessionStorage при первоначальной загрузке, токен действует в течении сессии
        checkAuth() {
            if(sessionStorage.getItem('auth') === 'true') {
                this.$store.dispatch('AuthPage/CHANGE_TOKEN', true);
            }
        }
    }
}
</script>

<style>
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), local('Roboto'),
        url('./assets/fonts/Roboto-Regular.ttf') format('woff'),
        url('./assets/fonts/Roboto-Bold.ttf') format('woff');
        font-weight: 100;
        font-style: normal;
    }
    #app {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100vh;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .2s;
    }
    .fade-enter,
    .fade-leave-to
    {
        opacity: 0;
    }
</style>
