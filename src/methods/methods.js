'use strict';

const { getType, types } = require('../core/core');

const InvalidFunctionException = require('../core/exceptions/InvalidFunctionException');

const methods = {
	asSelector(selector) {
		let type = getType(selector);
		if (type === types.String || type === types.Number || type === types.Symbol) {
			return propertySelector(selector);
		} else if (type === types.Function) {
			return selector;
		} else {
			throw new InvalidFunctionException(selector);
		}
	},
    asSetter(setter) {
        let type = getType(setter);
        if (type === types.String || type === types.Number || type === types.Symbol) {
            return propertySetter(setter);
        } else if (type === types.Function) {
            return setter;
        } else {
            throw new InvalidFunctionException(setter);
        }
    },
	asPredicate(predicate) {
		let type = getType(predicate);
		if (type === types.String || type === types.Number || type === types.Symbol) {
			return selectorPredicate(predicate);
		} else if (type === types.Function) {
			return predicate;
		} else if (type === types.RegExp) {
			return regexpPredicate(predicate);
		} else if (type === types.Array || type === types.Object) {
			return propertiesPredicate(predicate);
		} else {
			throw new InvalidFunctionException(predicate);
		}
	},
	asEqualityComparer(comparer) {
		let type = getType(comparer);
		if (type === types.String || type === types.Number || type === types.Symbol) {
			return selectorComparer(comparer, defaultEqualityComparer);
		} else if (type === types.Function) {
			return comparer;
		} else {
			throw new InvalidFunctionException(comparer);
		}
	},
	asStrictEqualityComparer(comparer) {
		let type = getType(comparer);
		if (type === types.String || type === types.Number || type === types.Symbol) {
			return selectorComparer(comparer, defaultStrictEqualityComparer);
		} else if (type === types.Function) {
			return comparer;
		} else {
			throw new InvalidFunctionException(comparer);
		}
	},
	asSameComparer(comparer) {
		let type = getType(comparer);
		if (type === types.String || type === types.Number || type === types.Symbol) {
			return selectorComparer(comparer, defaultSameComparer);
		} else if (type === types.Function) {
			return comparer;
		} else {
			throw new InvalidFunctionException(comparer);
		}
	},
	asComparer(comparer) {
		let type = getType(comparer);
		if (type === types.String || type === types.Number || type === types.Symbol) {
			return selectorComparer(comparer, defaultComparer);
		} else if (type === types.Array || type === types.Enumerable) {
			return arrayComparer(comparer);
		} else if (type === types.Function) {
			return comparer;
		} else {
			throw new InvalidFunctionException(comparer);
		}
	}
};

module.exports = methods;

const propertySetter = require('./propertySetter');
const propertySelector = require('./propertySelector');
const selectorPredicate = require('./selectorPredicate');
const selectorComparer = require('./selectorComparer');
const defaultEqualityComparer = require('./defaultEqualityComparer');
const defaultStrictEqualityComparer = require('./defaultStrictEqualityComparer');
const defaultSameComparer = require('./defaultSameComparer');
const defaultComparer = require('./defaultComparer');
const arrayComparer = require('./arrayComparer');
const propertiesPredicate = require('./propertiesPredicate');
const regexpPredicate = require('./regexpPredicate');