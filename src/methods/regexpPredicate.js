'use strict';

module.exports = (regexp, keySelector = defaultSelector) => {
    keySelector = methods.asSelector(keySelector);
	return element => regexp.test(keySelector(element));
};

const methods = require('./methods');
const defaultSelector = require('./defaultSelector');