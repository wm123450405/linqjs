'use strict';

/**
 * Created by wm123 on 2017/2/14.
 */
const Enumerable = require('./Enumerable');

const core = require('./core/core');

const getter = (original) => {
	return function() {
        return Enumerable.extends(original.apply(this, arguments), core.types.Array);
    };
};

module.exports = {
	install() {
		Enumerable.extends(Array.prototype, core.types.Array);

		((types, props) => {
		    for (let type of types) {
		    	if (type) {
			        for (let prop of props) {
			            let original = type.prototype[prop];
			            core.defineProperty(type.prototype, prop, getter(original));
			        }
		    	}
		    }
		})([Array, Map, Set, WeakMap, WeakSet], ['keys', 'values', 'entries']);
	},
	uninstall() {
		Enumerable.unextends(Array.prototype, core.types.Array);

		((types, props) => {
		    for (let type of types) {
		    	if (type) {
		            core.undefineProperties(type.prototype, props);
		    	}
		    }
		})([Array, Map, Set, WeakMap, WeakSet], ['keys', 'values', 'entries']);
	}
};