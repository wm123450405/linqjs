module.exports = {
	defaultLang: 'zh-hans',
	lastest: '2.1.15',
	capitalize(value) {
		if (!value) return '';
		value = value.toString();
		return value.charAt(0).toUpperCase() + value.slice(1);
	}
}