'use strict';

const defaultExistsPredicate = require('./defaultExistsPredicate');

module.exports = (predicate = defaultExistsPredicate) => {
	predicate = methods.asPredicate(predicate);
	return (element, index) => !predicate(element, index);
};

const methods = require('./methods');