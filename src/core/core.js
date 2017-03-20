'use strict';

const getFunctionNameReg = /^(function|class)\s+([^({\s]*)\s*[({].+$/ig;
const getObjectTypeNameReg = /^\[\w+\s(.+)]$/ig;

const getter = (properties, property) => {
	return () => properties[property];
};

const core = {
	getType(value) {
		if (typeof(value) === 'undefined') {
			return this.types.Undefined;
		} else {
			let type = value[Symbol.toStringTag] || Object.prototype.toString.call(value).replace(getObjectTypeNameReg, '$1');
			if (type === 'Object') {
				return Function.prototype.toString.call(value.constructor).replace(getFunctionNameReg, '$2');
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
		}
	},
	isProto(value) {
		let type = this.getType(value);
    	return type === this.types.Array || type === this.types.String;
	},
	isString(value) {
		return this.getType(value) === this.types.String;
	},
	isArray(value) {
		return this.getType(value) === this.types.Array;
	},
	conflict(prototype, property) {
		if (typeof property != 'symbol' && prototype.hasOwnProperty(property)) {
			let newProperty = 'o$' + property;
			if (prototype.hasOwnProperty(newProperty)) return;
			console.warn(property + ' already in ' + this.getType(prototype) + ', set original function to ' + newProperty);
			Object.defineProperty(prototype, newProperty, {
				enumerable: false,
				writable: true,
				configurable: true,
				value: prototype[property]
			});
		}
	},
	setProperty(prototype, property, value, isGet = false) {
		if (isGet && value instanceof Function) {
			Object.defineProperty(prototype, property, {
				enumerable: false,
				configurable: true,
				get: value
			});
		} else {
			Object.defineProperty(prototype, property, {
				enumerable: false,
				writable: true,
				configurable: true,
				value: value
			});
		}
	},
	defineProperty(prototype, property, value, isGet = false) {
		this.conflict(prototype, property);
		this.setProperty(prototype, property, value, isGet);
	},
	defineProperties(prototype, properties) {
		for (let property in properties) {
			if (properties.hasOwnProperty(property)) {
				this.defineProperty(prototype, property, getter(properties, property), true);
			}
		}
	},
	undefineProperty(prototype, property) {
		if (typeof property != 'symbol' && prototype.hasOwnProperty(property)) {
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
	undefineProperties(prototype, ...properties) {
		for (let property of properties) {
			this.undefineProperty(prototype, property);
		}
	},
	"array$every": Array.prototype.every,
	"array$concat": Array.prototype.concat,
	"array$splice": Array.prototype.splice,
	"array$slice": Array.prototype.slice,
	"array$fill": Array.prototype.fill,
	"array$find": Array.prototype.find,
	"array$includes": Array.prototype.includes,
	"array$map": Array.prototype.map,
	"array$filter": Array.prototype.filter,
	"array$shift": Array.prototype.shift,
	"array$unshift": Array.prototype.unshift,
	"array$pop": Array.prototype.pop,
	"array$push": Array.prototype.push,
	"array$reduce": Array.prototype.reduce,
	"array$reduceRight": Array.prototype.reduceRight,
	"array$some": Array.prototype.some,
	"array$sort": Array.prototype.sort,
	"array$copyWithin": Array.prototype.copyWithin,
	"array$join": Array.prototype.join,
	"array$indexOf": Array.prototype.indexOf,
	"array$lastIndexOf": Array.prototype.lastIndexOf,
	"array$findIndex": Array.prototype.findIndex,
	"string$concat": String.prototype.concat,
	"string$slice": String.prototype.slice,
	"string$includes": String.prototype.includes,
	"string$indexOf": String.prototype.indexOf,
	"string$lastIndexOf": String.prototype.lastIndexOf
};

module.exports = core;