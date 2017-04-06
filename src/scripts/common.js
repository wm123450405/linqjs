module.exports = {
	defaultLang: 'zh-cn',
	lastest: '2.1.16',
	capitalize(value) {
		if (!value) return '';
		value = value.toString();
		return value.charAt(0).toUpperCase() + value.slice(1);
	},
	upper(value) {
		if (!value) return '';
		return value.toString().toUpperCase();
	},
	lower(value) {
		if (!value) return '';
		return value.toString().toLowerCase();
	},
};