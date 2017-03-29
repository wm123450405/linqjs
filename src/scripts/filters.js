/**
 * Created by wm123 on 2017/3/29.
 */
Vue.filter('firstUpper', (value) => {
	return value.substring(0, 1).toUpperCase() + value.substring(1);
});