'use strict';

const defaultExistsPredicate = require('./defaultExistsPredicate');

module.exports = (selector, predicate = defaultExistsPredicate) => {
	selector = methods.asSelector(selector);
	predicate = methods.asPredicate(predicate);
	return (element, index) => predicate(selector(element, index), index);
};

const methods = require('./methods');