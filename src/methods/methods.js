'use strict';

const core = require('./../core/core');

const InvalidFunctionException = require('./../core/exceptions/InvalidFunctionException');

const methods = {
	asSelector(selector) {
		if (core.isString(selector)) {
			return propertySelector(selector);
		} else if (core.isFunction(selector)) {
			return selector;
		} else {
			throw new InvalidFunctionException(selector);
		}
	},
	asPredicate(predicate) {
		if (core.isString(predicate)) {
			return selectorPredicate(predicate);
		} else if (core.isFunction(predicate)) {
			return predicate;
		} else {
			throw new InvalidFunctionException(predicate);
		}
	},
	asEqualityComparer(comparer) {
		if (core.isString(comparer)) {
			return selectorComparer(comparer, defaultEqualityComparer);
		} else if (core.isFunction(comparer)) {
			return comparer;
		} else {
			throw new InvalidFunctionException(comparer);
		}
	},
	asStrictEqualityComparer(comparer) {
		if (core.isString(comparer)) {
			return selectorComparer(comparer, defaultStrictEqualityComparer);
		} else if (core.isFunction(comparer)) {
			return comparer;
		} else {
			throw new InvalidFunctionException(comparer);
		}
	},
	asSameComparer(comparer) {
		if (core.isString(comparer)) {
			return selectorComparer(comparer, defaultSameComparer);
		} else if (core.isFunction(comparer)) {
			return comparer;
		} else {
			throw new InvalidFunctionException(comparer);
		}
	},
	asComparer(comparer) {
		if (core.isString(comparer)) {
			return selectorComparer(comparer, defaultComparer);
		} else if (core.isArray(comparer) || core.isEnumerable(comparer)) {
			return arrayComparer(comparer);
		} else if (core.isFunction(comparer)) {
			return comparer;
		} else {
			throw new InvalidFunctionException(comparer);
		}
	}
};

module.exports = methods;

const propertySelector = require('./propertySelector');
const selectorPredicate = require('./selectorPredicate');
const selectorComparer = require('./selectorComparer');
const defaultEqualityComparer = require('./defaultEqualityComparer');
const defaultStrictEqualityComparer = require('./defaultStrictEqualityComparer');
const defaultSameComparer = require('./defaultSameComparer');
const defaultComparer = require('./defaultComparer');
const arrayComparer = require('./arrayComparer');