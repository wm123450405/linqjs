'use strict';

const core = require('../core/core');

const InvalidFunctionException = require('../core/exceptions/InvalidFunctionException');

const methods = {
	asSelector(selector) {
		let type = core.getType(selector);
		if (type === core.types.String || type === core.types.Number || type === core.types.Symbol) {
			return propertySelector(selector);
		} else if (type === core.types.Function) {
			return selector;
		} else {
			throw new InvalidFunctionException(selector);
		}
	},
    asSetter(setter) {
        let type = core.getType(setter);
        if (type === core.types.String || type === core.types.Number || type === core.types.Symbol) {
            return propertySetter(setter);
        } else if (type === core.types.Function) {
            return setter;
        } else {
            throw new InvalidFunctionException(setter);
        }
    },
	asPredicate(predicate) {
		let type = core.getType(predicate);
		if (type === core.types.String || type === core.types.Number || type === core.types.Symbol) {
			return selectorPredicate(predicate);
		} else if (type === core.types.Function) {
			return predicate;
		} else if (type === core.types.RegExp) {
			return regexpPredicate(predicate);
		} else if (type === core.types.Array || type === core.types.Object) {
			return propertiesPredicate(predicate);
		} else {
			throw new InvalidFunctionException(predicate);
		}
	},
	asEqualityComparer(comparer) {
		let type = core.getType(comparer);
		if (type === core.types.String || type === core.types.Number || type === core.types.Symbol) {
			return selectorComparer(comparer, defaultEqualityComparer);
		} else if (type === core.types.Function) {
			return comparer;
		} else {
			throw new InvalidFunctionException(comparer);
		}
	},
	asStrictEqualityComparer(comparer) {
		let type = core.getType(comparer);
		if (type === core.types.String || type === core.types.Number || type === core.types.Symbol) {
			return selectorComparer(comparer, defaultStrictEqualityComparer);
		} else if (type === core.types.Function) {
			return comparer;
		} else {
			throw new InvalidFunctionException(comparer);
		}
	},
	asSameComparer(comparer) {
		let type = core.getType(comparer);
		if (type === core.types.String || type === core.types.Number || type === core.types.Symbol) {
			return selectorComparer(comparer, defaultSameComparer);
		} else if (type === core.types.Function) {
			return comparer;
		} else {
			throw new InvalidFunctionException(comparer);
		}
	},
	asComparer(comparer) {
		let type = core.getType(comparer);
		if (type === core.types.String || type === core.types.Number || type === core.types.Symbol) {
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