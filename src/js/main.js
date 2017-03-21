import '../css/main.less';

import 'bootstrap'

import VueRouter from 'vue-router';
import router from './router';

const app = new Vue({
	router: new VueRouter(router)
}).$mount('#app');