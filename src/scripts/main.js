import '../styles/main.sass';

import './history';

import './extends';
import './filters';
import routes from './routes';
import mixin from './mixin';
import components from './components';

const load = page => () => import(`../pages/${page}.vue`);

Vue.use(VueRouter);
Vue.mixin(mixin);

for (let component of components) {
	Vue.component(component, require(`../components/${ component }.vue`).default);
}

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
					children: Enumerable.selectMany(Object.entries(routes).map(([key, value]) => ({ key, value })), entry => [ '', ':version(\\d+\\.\\d+\\.\\d+):pre(\\.pre)?/' ], (entry, prefix) => ({ path: prefix + entry.key, component: load(entry.value) }))
						.concat([{ path: '', component: load('introduction') }, { path: ':version(\\d+\\.\\d+\\.\\d+):pre(\\.pre)?', component: load('introduction') }]).toArray()
				}
			]
		}
	],
	base:'/linqjs'
});

const app = new Vue({
	router
}).$mount('#app');