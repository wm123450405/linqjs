'use strict';

module.exports = (selector, comparer) => {
	selector = methods.asSelector(selector);
	return (element, other) => comparer(selector(element), selector(other));
};

const methods = require('./methods');