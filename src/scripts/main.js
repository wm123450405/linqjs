import '../styles/main.sass';

import routes from './routes';
import mixin from './mixin';
import link from '../components/lang-link.vue';
import content from '../components/content-template.vue';

const load = page => resolve => require([`../pages/${page}.vue`], resolve);

Vue.use(VueRouter);
Vue.mixin(mixin);
Vue.component('lang-link', link);
Vue.component('content-template', content);

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
						.select(entry => ({ path: entry.key, component: load(entry.value) }))
						.concat({ path: '/', component: load('introduction') }).toArray()
				}
			]
		}
	],
	base:'/linq-js'
});

const app = new Vue({
	router
}).$mount('#app');