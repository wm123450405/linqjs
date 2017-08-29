'use strict';

const getFunctionNameReg = /^(function\*?|class)\s+([^({\s]*)\s*[({].*/ig;
const getObjectTypeNameReg = /^\[\w+\s(.+)]$/ig;

const getter = (properties, property) => {
	return () => properties[property];
};

const getFunctionName = fun => fun.name || (getFunctionNameReg.exec(fun) || [])[2] || '';

const core = {
	isDev() {
		return typeof process !== 'undefined' && process && process.env && process.env.NODE_ENV === 'development';
	},
	getType(value) {
		if (typeof value === 'undefined') {
			return this.types.Undefined;
		} else if (typeof value === 'string') {
			return this.types.String;
		} else if (typeof value === 'number') {
			return this.types.Number;
		} else if (typeof value === 'function') {
			return this.types.Function;
		} else {
			let type = value[Symbol.toStringTag];
			if (!type) {
				type = Object.prototype.toString.call(value);
				type = type.substring('[object '.length, type.length - 1);
			}
			if (type === 'Object') {
				return getFunctionName(value.constructor);
			} else {
				let typeName = typeof value;
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
			return 'Undefined';
		},
		get String() {
			return 'String';
		},
		get Array() {
			return 'Array';
		},
		get Object() {
			return 'Object';
		},
		get Function() {
			return 'Function';
		},
		get RegExp() {
			return 'RegExp';
		},
		get Boolean() {
			return 'Boolean';
		},
		get Number() {
			return 'Number';
		},
		get Symbol() {
			return 'Symbol';
		},
		get Arguments() {
			return 'Arguments';
		},
		get Iterator() {
			return 'Iterator';
		},
		get Enumerable() {
			return 'Enumerable';
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
	isObject(value) {
		return this.getType(value) === this.types.Object;
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
	lazy: false,
	array$every: Array.prototype.every,
	array$concat: Array.prototype.concat,
	array$splice: Array.prototype.splice,
	array$slice: Array.prototype.slice,
	array$fill: Array.prototype.fill,
	array$find: Array.prototype.find,
	array$includes: Array.prototype.includes,
	array$map: Array.prototype.map,
	array$filter: Array.prototype.filter,
	array$shift: Array.prototype.shift,
	array$unshift: Array.prototype.unshift,
	array$pop: Array.prototype.pop,
	array$push: Array.prototype.push,
	array$reduce: Array.prototype.reduce,
	array$reduceRight: Array.prototype.reduceRight,
	array$some: Array.prototype.some,
	array$sort: Array.prototype.sort,
	array$copyWithin: Array.prototype.copyWithin,
	array$join: Array.prototype.join,
	array$indexOf: Array.prototype.indexOf,
	array$lastIndexOf: Array.prototype.lastIndexOf,
    array$findIndex: Array.prototype.findIndex,
    array$forEach: Array.prototype.forEach,
	string$concat: String.prototype.concat,
	string$slice: String.prototype.slice,
	string$includes: String.prototype.includes,
	string$indexOf: String.prototype.indexOf,
	string$lastIndexOf: String.prototype.lastIndexOf
};

module.exports = core;