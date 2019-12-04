import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

// ленивая загрузка маршрутов
const PredictionPage  = () => Promise.resolve(import('../views/prediction/components/PredictionPage.vue'));
const HomePage = () => Promise.resolve(import('../views/homePage/components/HomePage.vue'));
const PlanningPage  = () => Promise.resolve(import('../views/planning/components/PlanningPage.vue'));
const PlanningActualTasks  = () => Promise.resolve(import('../views/planning/components/actualTasks/PlanningActualTasks.vue'));
const TableFinishedTasks  = () => Promise.resolve(import('../views/planning/components/finishedTasks/TableFinishedTasks.vue'));
const ReportsPage  = () => Promise.resolve(import('../views/reports/components/ReportsPage.vue'));
const ServicePage  = () => Promise.resolve(import('../views/service/components/ServicePage.vue'));
const FormCreditCard  = () => Promise.resolve(import('../views/formCreditCard/components/FormCreditCard.vue'));

Vue.use(Router);
Vue.use(VueAxios, axios);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/prediction',
            name: 'Прогнозирование',
            component: PredictionPage,
            meta: { requiresAuth: true }
        },
        {
            path: '/',
            /*redirect:  '/planning/planningActualTasks', // при загрузке переходим в Планирование - Активные задачи*/
            name: 'Новогодняя',
            component: HomePage
        },
        {
            path: '/planning',
            name: 'Планирование',
            component: PlanningPage,
            children: [
                {   path: '/planning/planningActualTasks',
                    name: 'Активные задачи',
                    component: PlanningActualTasks },
                {   path: '/planning/tableFinishedTasks',
                    name: 'Завершенные задачи',
                    component: TableFinishedTasks },]
        },
        {
            path: '/reports',
            name: 'Отчёты',
            component: ReportsPage
        },
        {
            path: '/service',
            name: 'Сервис',
            component: ServicePage
        },
        {
            path: '/card',
            name: 'Оплата картой',
            component: FormCreditCard
        }
    ]
})
export default router;
