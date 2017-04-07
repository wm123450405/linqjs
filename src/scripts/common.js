module.exports = {
	defaultLang: 'zh-cn',
	versions: ['2.1.15', '2.1.16'],
	get lastest() {
		return this.versions[this.versions.length - 1];
	},
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