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

const core = {
	isDev() {
		return typeof process !== 'undefined' && process && process.env && process.env.NODE_ENV === 'development';
	},
	getType(value) {
		let typeName = typeof value;
		if (typeName === 'undefined') {
			return this.types.Undefined;
		} else if (typeName === 'string' || value instanceof String) {
			return this.types.String;
		} else if (typeName === 'number' || value instanceof Number) {
			return this.types.Number;
		} else if (typeName === 'function' || value instanceof Function) {
			return this.types.Function;
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
		return this.getType(value) === this.types.Undefined;
	},
	isString(value) {
		return this.getType(value) === this.types.String;
	},
	isArray(value) {
		return this.getType(value) === this.types.Array;
	},
	isNumber(value) {
		return this.getType(value) === this.types.Number;
	},
	isObject(value) {
		return this.getType(value) === this.types.Object;
	},
    isSet(value) {
        return this.getType(value) === this.types.Set;
    },
    isMap(value) {
        return this.getType(value) === this.types.Map;
    },
	isSymbol(value) {
		return this.getType(value) === this.types.Symbol;
	},
	isFunction(value) {
		return this.getType(value) === this.types.Function;
	},
    isArguments(value) {
        return this.getType(value) === this.types.Arguments;
	},
	isIterator(value) {
		return this.getType(value).endsWith(this.types.Iterator);
	},
	isEnumerable(value) {
		return this.getType(value).endsWith(this.types.Enumerable);
	},
	isProto(value) {
		let type = this.getType(value);
    	return type === this.types.Array || type === this.types.String;
	},
	isList(value) {
        let type = this.getType(value);
        return type === this.types.Array || type === this.types.Enumerable || type === this.types.Set;
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
			if (this.isDev()) console.warn(property + ' already in ' + this.getType(prototype) + ', set original function to ' + newProperty);
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
		this.conflict(prototype, property);
		if (property === Symbol.iterator) {
			let name = (getFunctionName(value) || getFunctionName(prototype[Symbol.iterator])).replace(/\s*Iterator$/ig, ' Iterator');
			if (name) {
				this.defineProperty(value, Symbol.toStringTag, name);
			}
		}
		this.setProperty(prototype, property, value, isGet, isEnumerable);
	},
	defineProperties(prototype, properties, pascalOrPrefix = false) {
		for (let property in properties) {
			if (properties.hasOwnProperty(property)) {
				this.defineProperty(prototype, pascalOrPrefix === true ? this.asPascal(property) : pascalOrPrefix ? pascalOrPrefix + property : property, getter(properties, property), true, false);
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
			this.undefineProperty(prototype, pascalOrPrefix === true ? core.asPascal(property) : pascalOrPrefix ? pascalOrPrefix + property : property);
		}
	},
	asIterable(value) {
		if (value[Symbol.iterator]) {
			return value;
		} else {
			return this.asEnumerable(value);
		}
	},
	asEnumerable(object, childrenSelector, valueSelector) {
		let c;
		if (this.isUndefined(childrenSelector)) {
			if (this.isEnumerable(object)) {
				return object;
			} else if (this.isIterator(object)) {
				c = require('../enumerables/IteratorEnumerable');
			} else {
				let type = object[this.typeAs] || this.getType(object);
				if (type === core.types.String) {
					c = require('../enumerables/StringEnumerable');
				} else if (type === core.types.Array || type === core.types.Set || type === core.types.Arguments) {
					c = require('../enumerables/ArrayEnumerable');
				} else if (type === core.types.Map) {
					c = require('../enumerables/MapEnumerable');
				} else if (type === core.types.Iterator) {
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
		if (this.isArray(source)) {
			return source;
		} else {
			source = this.asIterable(source);
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
	typeAs: Symbol('typeAs'),
	delegate: Symbol.for('delegate'),
	lazy: false,
	a$every: Array.prototype.every,
	a$concat: Array.prototype.concat,
	a$splice: Array.prototype.splice,
	a$slice: Array.prototype.slice,
	a$fill: Array.prototype.fill,
	a$find: Array.prototype.find,
	a$includes: Array.prototype.includes,
	a$map: Array.prototype.map,
	a$filter: Array.prototype.filter,
	a$shift: Array.prototype.shift,
	a$unshift: Array.prototype.unshift,
	a$pop: Array.prototype.pop,
	a$push: Array.prototype.push,
	a$reduce: Array.prototype.reduce,
	a$reduceRight: Array.prototype.reduceRight,
	a$some: Array.prototype.some,
	a$sort: Array.prototype.sort,
	a$copyWithin: Array.prototype.copyWithin,
	a$join: Array.prototype.join,
	a$indexOf: Array.prototype.indexOf,
	a$lastIndexOf: Array.prototype.lastIndexOf,
    a$findIndex: Array.prototype.findIndex,
    a$forEach: Array.prototype.forEach,
	s$concat: String.prototype.concat,
	s$slice: String.prototype.slice,
	s$includes: String.prototype.includes,
	s$indexOf: String.prototype.indexOf,
	s$lastIndexOf: String.prototype.lastIndexOf,
	s$split: String.prototype.split
};

module.exports = core;