import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import PredictionPage from '../views/prediction/components/PredictionPage.vue'
import HomePage from '../views/homePage/components/HomePage.vue'
import PlanningPage from '../views/planning/components/PlanningPage.vue'
import PlanningActualTasks from '../views/planning/components/actualTasks/PlanningActualTasks.vue'
import ReportsPage from '../views/reports/components/ReportsPage.vue'
import ServicePage from '../views/service/components/ServicePage.vue'

Vue.use(Router)
Vue.use(VueAxios, axios)

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
            redirect:  '/planning/planningActualTasks', /*при загрузке переходим в Планирование - Активные задачи*/
            name: 'Home',
            component: HomePage
        },
        {
            path: '/planning',
            name: 'Планирование',
            component: PlanningPage,
            children: [
                {   path: '/planning/planningActualTasks',
                    name: 'Активные задачи',
                    component: PlanningActualTasks }, ]
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
        }
    ]
})
export default router;
