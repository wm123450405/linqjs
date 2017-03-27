'use strict';

const defaultSelector = require('./defaultSelector');

module.exports = (regexp, keySelector = defaultSelector) => {
	keySelector = methods.asSelector(keySelector);
	return (element, index) => regexp.test(keySelector(element, index));
};

const methods = require('./methods');