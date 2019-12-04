import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js';
import store from './store/index.js';
import axios from 'axios';
import VueAxios from 'vue-axios';
import './plugins/element';
import VueTheMask from 'vue-the-mask'


Vue.use(VueAxios, axios);
Vue.use(VueTheMask);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
