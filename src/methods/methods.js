'use strict';

const core = require('./../core/core');

const InvalidFunctionException = require('./../core/exceptions/InvalidFunctionException');

const methods = {
	asSelector(selector) {
		let type = core.getType(selector);
		if (type === core.types.String) {
			return propertySelector(selector);
		} else if (type === core.types.Function) {
			return selector;
		} else {
			throw new InvalidFunctionException(selector);
		}
	},
	asPredicate(predicate) {
		let type = core.getType(predicate);
		if (type === core.types.String) {
			return selectorPredicate(predicate);
		} else if (type === core.types.Function) {
			return predicate;
		} else if (type === core.types.Array || type === core.types.Object) {
			return propertiesPredicate(predicate);
		} else {
			throw new InvalidFunctionException(predicate);
		}
	},
	asEqualityComparer(comparer) {
		let type = core.getType(comparer);
		if (type === core.types.String) {
			return selectorComparer(comparer, defaultEqualityComparer);
		} else if (type === core.types.Function) {
			return comparer;
		} else {
			throw new InvalidFunctionException(comparer);
		}
	},
	asStrictEqualityComparer(comparer) {
		let type = core.getType(comparer);
		if (type === core.types.String) {
			return selectorComparer(comparer, defaultStrictEqualityComparer);
		} else if (type === core.types.Function) {
			return comparer;
		} else {
			throw new InvalidFunctionException(comparer);
		}
	},
	asSameComparer(comparer) {
		let type = core.getType(comparer);
		if (type === core.types.String) {
			return selectorComparer(comparer, defaultSameComparer);
		} else if (type === core.types.Function) {
			return comparer;
		} else {
			throw new InvalidFunctionException(comparer);
		}
	},
	asComparer(comparer) {
		let type = core.getType(comparer);
		if (type === core.types.String) {
			return selectorComparer(comparer, defaultComparer);
		} else if (type === core.types.Array || type === core.types.Enumerable) {
			return arrayComparer(comparer);
		} else if (type === core.types.Function) {
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
const propertiesPredicate = require('./propertiesPredicate');