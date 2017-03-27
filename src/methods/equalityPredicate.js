'use strict';

const defaultEqualityComparer = require('./defaultEqualityComparer');

module.exports = (value, comparer = defaultEqualityComparer) => {
	comparer = methods.asEqualityComparer(comparer);
	return (element, index) => comparer(element, value);
};

const methods = require('./methods');