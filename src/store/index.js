import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import AuthPage from '../views/auth/store/authPage.js'
import PredictionPage from '../views/prediction/store/predictionPage.js'
import HomePage from '../views/homePage/store/HomePage.js'
import PlanningPage from '../views/planning/store/planningPage.js'
import ReportsPage from '../views/reports/store/reportsPage.js'
import FormCreditCard from '../views/formCreditCard/store/FormCreditCardPage.js'
import Navigator from '../components/navigator/store/navigator.js'

export default new Vuex.Store({
    // Включаем строгий режим только для разработки. Это гарантирует, что все мутации состояния будут явно отслеживаться через инструменты отладки.
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        AuthPage,
        Navigator,
        HomePage,
        PredictionPage,
        PlanningPage,
        ReportsPage,
        FormCreditCard
    }
})
