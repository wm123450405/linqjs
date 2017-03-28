import '../styles/main.sass';

import './extends';
import routes from './routes';
import mixin from './mixin';
import components from './components';

const load = page => resolve => require([`../pages/${page}.vue`], resolve);

Vue.use(VueRouter);
Vue.mixin(mixin);

for (let component of components) {
	Vue.component(component, require(`../components/${ component }.vue`));
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
					children: Enumerable.select(routes, entry => ({ path: entry.key, component: load(entry.value) }))
						.concat({ path: '', component: load('introduction') }).toArray()
				}
			]
		}
	],
	base:'/linqjs'
});

const app = new Vue({
	router
}).$mount('#app');