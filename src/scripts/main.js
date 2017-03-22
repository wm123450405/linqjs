import '../styles/main.sass';
import 'bootstrap'

import routes from './routes';
import mixin from './mixin';
import link from '../components/lang-link.vue';

const load = page => resolve => require([`../pages/${page}.vue`], resolve);

Vue.use(VueRouter);
Vue.mixin(mixin);
Vue.component('lang-link', link);

const router = new VueRouter({
	routes: [
		{
			path: '/',
			component: load('lang'),
		},
		{
			path: '/:lang',
			component: load('index'),
			children: [
				{
					path: '/',
					components: {
						nav: load('nav'),
						directory: load('directory'),
						content: load('content')
					},
					children: Enumerable.asEnumerable(routes)
						.select(entry => ({ path: '/' + entry.key, component: load(entry.value) }))
						.concat({ path: '/', component: load('introduction') }).toArray()
				}
			]
		}
	]
});

const app = new Vue({
	router
}).$mount('#app');