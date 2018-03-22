'use strict';

const defaultSelector = require('./defaultSelector');

module.exports = (regexp, keySelector = defaultSelector) => {
    keySelector = methods.asSelector(keySelector);
	return element => regexp.test(keySelector(element));
};

const methods = require('./methods');