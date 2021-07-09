'use strict';

const getFunctionNameReg = /^(function\*?|class)\s+([^({\s]*)\s*[({].*/ig;
const getObjectTypeNameReg = /^\[\w+\s(.+)]$/ig;

const getter = (properties, property) => {
	return () => properties[property];
};

const getFunctionName = fun => fun.name || (getFunctionNameReg.exec(fun) || [])[2] || '';

const UNDEFINED = 'Undefined';
const STRING = 'String';
const ARRAY = 'Array';
const OBJECT = 'Object';
const MAP = 'Map';
const SET = 'Set';
const FUNCTION = 'Function';
const REGEXP = 'RegExp';
const BOOLEAN = 'Boolean';
const NUMBER = 'Number';
const SYMBOL = 'Symbol';
const ARGUMENTS = 'Arguments';
const ITERATOR = 'Iterator';
const ENUMERABLE = 'Enumerable';
const TREE = 'Tree';

const a$ = Array.prototype;
const s$ = String.prototype;

const core = {
	isDev() {
		return typeof process !== 'undefined' && process && process.env && process.env.NODE_ENV === 'development';
	},
	getType(value) {
		let typeName = typeof value;
		if (typeName === 'undefined') {
			return UNDEFINED;
		} else if (typeName === 'string' || value instanceof String) {
			return STRING;
		} else if (typeName === 'number' || value instanceof Number) {
			return NUMBER;
		} else if (typeName === 'function' || value instanceof Function) {
			return FUNCTION;
		} else {
			let type = value[Symbol.toStringTag];
			if (!type) {
				type = Object.prototype.toString.call(value);
				type = type.substring('[object '.length, type.length - 1);
			}
			if (type === 'Object' || type === 'Error') {
				return getFunctionName(value.constructor);
			} else {
				if (typeName !== 'object') {
					return typeName.substring(0, 1).toUpperCase() + typeName.substring(1);
				} else {
					return type;
				}
			}
		}
	},
	types: {
		get Undefined() {
			return UNDEFINED;
		},
		get String() {
			return STRING;
		},
		get Array() {
			return ARRAY;
		},
		get Object() {
			return OBJECT;
		},
		get Map() {
			return MAP;
		},
		get Set() {
			return SET;
		},
		get Function() {
			return FUNCTION;
		},
		get RegExp() {
			return REGEXP;
		},
		get Boolean() {
			return BOOLEAN;
		},
		get Number() {
			return NUMBER;
		},
		get Symbol() {
			return SYMBOL;
		},
		get Arguments() {
			return ARGUMENTS;
		},
		get Iterator() {
			return ITERATOR;
		},
		get Enumerable() {
			return ENUMERABLE;
		},
		get Tree() {
			return TREE;
		}
	},
	isUndefined(value) {
		return core.getType(value) === UNDEFINED;
	},
	isString(value) {
		return core.getType(value) === STRING;
	},
	isArray(value) {
		return core.getType(value) === ARRAY;
	},
	isNumber(value) {
		return core.getType(value) === NUMBER;
	},
	isObject(value) {
		return core.getType(value) === OBJECT;
	},
    isSet(value) {
        return core.getType(value) === SET;
    },
    isMap(value) {
        return core.getType(value) === MAP;
    },
	isSymbol(value) {
		return core.getType(value) === SYMBOL;
	},
	isFunction(value) {
		return core.getType(value) === FUNCTION;
	},
    isArguments(value) {
        return core.getType(value) === ARGUMENTS;
	},
	isIterator(value) {
		return core.getType(value).endsWith(ITERATOR);
	},
	isEnumerable(value) {
		return core.getType(value).endsWith(ENUMERABLE);
	},
	isProto(value) {
		let type = core.getType(value);
    	return type === ARRAY || type === STRING;
	},
	isList(value) {
        let type = core.getType(value);
        return type === ARRAY || type === ENUMERABLE || type === SET;
	},
	isInteger(value) {
		return (/^[-+]?\d+$/.test(value) || Number.isInteger(value));
	},
	asPascal(name) {
		return typeof name === 'string' ? name.substring(0, 1).toUpperCase() + name.substring(1) : name;
	},
	conflict(prototype, property) {
		if (typeof property !== 'symbol' && prototype.hasOwnProperty(property)) {
			let newProperty = 'o$' + property;
			if (prototype.hasOwnProperty(newProperty)) return;
			if (core.isDev()) console.warn(property + ' already in ' + core.getType(prototype) + ', set original function to ' + newProperty);
			Object.defineProperty(prototype, newProperty, {
				enumerable: false,
				writable: true,
				configurable: true,
				value: prototype[property]
			});
		}
	},
	setProperty(prototype, property, value, isGet = false, isEnumerable = false) {
		if (isGet && value instanceof Function) {
			Object.defineProperty(prototype, property, {
				enumerable: isEnumerable,
				configurable: true,
				get: value
			});
		} else {
			Object.defineProperty(prototype, property, {
				enumerable: isEnumerable,
				writable: true,
				configurable: true,
				value: value
			});
		}
	},
	defineProperty(prototype, property, value, isGet = false, isEnumerable = false) {
		core.conflict(prototype, property);
		if (property === Symbol.iterator) {
			let name = (getFunctionName(value) || getFunctionName(prototype[Symbol.iterator])).replace(/\s*Iterator$/ig, ' Iterator');
			if (name) {
				core.defineProperty(value, Symbol.toStringTag, name);
			}
		}
		core.setProperty(prototype, property, value, isGet, isEnumerable);
	},
	defineProperties(prototype, properties, pascalOrPrefix = false) {
		for (let property in properties) {
			if (properties.hasOwnProperty(property)) {
				core.defineProperty(prototype, pascalOrPrefix === true ? core.asPascal(property) : pascalOrPrefix ? pascalOrPrefix + property : property, getter(properties, property), true, false);
			}
		}
	},
	undefineProperty(prototype, property) {
		if (typeof property !== 'symbol' && prototype.hasOwnProperty(property)) {
			let oldProperty = 'o$' + property;
			if (prototype.hasOwnProperty(oldProperty)) {
				Object.defineProperty(prototype, property, {
					enumerable: false,
					writable: true,
					configurable: true,
					value: prototype[oldProperty]
				});
				delete prototype[oldProperty];
			} else {
				delete prototype[property];
			}
		}
	},
	undefineProperties(prototype, properties, pascalOrPrefix = false) {
		for (let property of properties) {
			core.undefineProperty(prototype, pascalOrPrefix === true ? core.asPascal(property) : pascalOrPrefix ? pascalOrPrefix + property : property);
		}
	},
	asIterable(value) {
		if (value[Symbol.iterator]) {
			return value;
		} else {
			return core.asEnumerable(value);
		}
	},
	asEnumerable(object, childrenSelector, valueSelector) {
		let c;
		if (core.isUndefined(childrenSelector)) {
			if (core.isEnumerable(object)) {
				return object;
			} else if (core.isIterator(object)) {
				c = require('../enumerables/IteratorEnumerable');
			} else {
				let type = object[core.typeAs] || core.getType(object);
				if (type === STRING) {
					c = require('../enumerables/StringEnumerable');
				} else if (type === ARRAY || type === SET || type === ARGUMENTS) {
					c = require('../enumerables/ArrayEnumerable');
				} else if (type === MAP) {
					c = require('../enumerables/MapEnumerable');
				} else if (type === ITERATOR) {
					c = require('../enumerables/IteratorEnumerable');
				} else if (object[Symbol.iterator]) {
					c = require('../enumerables/IterableEnumerable');
				} else {
					c = require('../enumerables/ObjectEnumerable');
				}
			}
		} else {
			c = require('../enumerables/TreeEnumerable');
		}
		return new c(object, childrenSelector, valueSelector);
	},
	toArray(source) {
		if (core.isArray(source)) {
			return source;
		} else {
			source = core.asIterable(source);
			return Array.from(source);
		}
	},
	range(start, count) {
		let result = [];
		for (let i = 0; i < count; start++, i++) {
			result.push(start);
		}
		return result;
	},
	repeat(element, count) {
		let result = [];
		for (let i = 0; i < count; i++) {
			result.push(element);
		}
		return result;
	},
	swap(array, index, other) {
		let temp = array[index];
		array[index] = array[other];
		array[other] = temp;
	},
	heap(array, direction, comparer) {
		let length = array.length;
		if (length > 1) {
			if (direction < 0) {
				// for (let i = length - (length >> 1); i < length; i++) {
				// 	core.heaping(array, length, i, direction, comparer);
				// }
				for (let i = length - 2; i >= 0; i--) {
					// console.log('heap', i, length);
					core.upping(array, i, direction, comparer);
				}
			} else {
				for (let i = 1; i < length; i++) {
					core.upping(array, i, direction, comparer);
				}
				// let end = length >> 1;
				// for (let i = 0; i < end; i++) {
				// 	core.heaping(array, length, i, direction, comparer);
				// }
			}
		}
	},
	upping(array, index, direction, comparer) {
		let length = array.length;
		if (length >= 1) {
			if (direction < 0) {
				// console.log('upping', index, array);
				for (let i = index, t = length - ((length - i) >> 1); i < length - 1; i = t, t = length - ((length - t) >> 1)) {
					// console.log(i, t);
					if (comparer(array[t], array[i]) < 0) {
						// console.log('swap', array);
						core.swap(array, t, i);
					} else {
						break;
					}
				}
			} else {
				for (let i = index, t = (i - 1) >> 1; i > 0; i = t, t = (t - 1) >> 1) {
					if (comparer(array[t], array[i]) < 0) {
						core.swap(array, t, i);
					} else {
						break;
					}
				}
			}
		}
	},
	heaping(array, length, index, direction, comparer) {
		let l = 2 * index + (direction < 0 ? -length : 1);
		let r = l + direction;
		if (direction < 0 ? (r >= 0) : (r < length)) {
			if (comparer(array[l], array[r]) < 0) {
				if (comparer(array[index], array[r]) < 0) {
					core.swap(array, index, r);
					core.heaping(array, length, r, direction, comparer);
				}
			} else {
				if (comparer(array[index], array[l]) < 0) {
					core.swap(array, index, l);
					core.heaping(array, length, l, direction, comparer);
				}
			}
		} else if (direction < 0 ? (l >= 0) : (l < length)) {
			if (comparer(array[index], array[l]) < 0) {
				core.swap(array, index, l);
			}
		}
	},
	typeAs: Symbol('typeAs'),
	delegate: Symbol.for('delegate'),
	lazy: false,
	a$every: a$.every,
	a$concat: a$.concat,
	a$splice: a$.splice,
	a$slice: a$.slice,
	a$fill: a$.fill,
	a$find: a$.find,
	a$includes: a$.includes,
	a$map: a$.map,
	a$filter: a$.filter,
	a$shift: a$.shift,
	a$unshift: a$.unshift,
	a$pop: a$.pop,
	a$push: a$.push,
	a$reduce: a$.reduce,
	a$reduceRight: a$.reduceRight,
	a$some: a$.some,
	a$sort: a$.sort,
	a$copyWithin: a$.copyWithin,
	a$join: a$.join,
	a$indexOf: a$.indexOf,
	a$lastIndexOf: a$.lastIndexOf,
    a$findIndex: a$.findIndex,
    a$forEach: a$.forEach,
	s$concat: s$.concat,
	s$slice: s$.slice,
	s$includes: s$.includes,
	s$indexOf: s$.indexOf,
	s$lastIndexOf: s$.lastIndexOf,
	s$split: s$.split
};

module.exports = core;