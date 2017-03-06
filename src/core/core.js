const core = {
	getType(value) { return value.constructor.toString().replace(/^function ([^(]*)\(.+$/ig, '$1'); },
	typeName(value) { return value[Symbol.toStringTag] || value.toString().replace(/^\[\w+\s(.+)]$/ig, '$1'); },
	conflict(prototype, property) {
		if (prototype.hasOwnProperty(property)) {
	        console.warn(property + ' already in ' + getType(prototype) + ', set original function to o$' + property);
	        Object.defineProperty(prototype, "o$" + property, {
	            enumerable: false,
	            writable: true,
	            configurable: true,
	            value : prototype[property]
	        });
	    }
	},
	defineProperty(prototype, property, value, isGet = false) {
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
	defineProperties(prototype, properties) {
	    for (let property in properties) {
	        if (properties.hasOwnProperty(property)) {
	            this.defineProperty(prototype, property, () => properties[property], true);
	        }
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