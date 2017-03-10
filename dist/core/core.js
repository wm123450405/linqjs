'use strict';

var core = {
	getType: function getType(value) {
		if (typeof value === 'undefined') {
			return 'Undefined';
		} else {
			var type = value[Symbol.toStringTag] || Object.prototype.toString.call(value).replace(/^\[\w+\s(.+)]$/ig, '$1');
			if (type === 'Object') {
				return Function.prototype.toString.call(value.constructor).replace(/^(function|class)\s+([^({\s]*)\s*[({].+$/ig, '$2');
			} else {
				return type;
			}
		}
	},
	conflict: function conflict(prototype, property) {
		if (prototype.hasOwnProperty(property)) {
			console.warn(property + ' already in ' + this.getType(prototype) + ', set original function to o$' + property);
			Object.defineProperty(prototype, "o$" + property, {
				enumerable: false,
				writable: true,
				configurable: true,
				value: prototype[property]
			});
		}
	},
	defineProperty: function defineProperty(prototype, property, value) {
		var isGet = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

		this.conflict(prototype, property);
		if (isGet && value instanceof Function) {
			Object.defineProperty(prototype, property, {
				enumerable: false,
				configurable: false,
				get: value
			});
		} else {
			Object.defineProperty(prototype, property, {
				enumerable: false,
				writable: true,
				configurable: false,
				value: value
			});
		}
	},
	defineProperties: function defineProperties(prototype, properties) {
		var _this = this;

		var _loop = function _loop(property) {
			if (properties.hasOwnProperty(property)) {
				_this.defineProperty(prototype, property, function () {
					return properties[property];
				}, true);
			}
		};

		for (var property in properties) {
			_loop(property);
		}
	},

	"array$join": Array.prototype.join,
	"array$indexOf": Array.prototype.indexOf,
	"array$lastIndexOf": Array.prototype.lastIndexOf,
	"array$findIndex": Array.prototype.findIndex,
	"string$indexOf": String.prototype.indexOf,
	"string$lastIndexOf": String.prototype.lastIndexOf
};

module.exports = core;