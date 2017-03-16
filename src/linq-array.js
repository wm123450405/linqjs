'use strict';

/**
 * Created by wm123 on 2017/2/14.
 */
const Enumerable = require('./Enumerable');

const core = require('./core/core');

const getter = (original) => {
	return function() {
        return Enumerable.asEnumerable(original.apply(this, arguments));
    };
};

module.exports = function() {
	Enumerable.extends(Array.prototype, 'array');

	((types, props) => {
	    for (let type of types) {
	        for (let prop of props) {
	            let original = type.prototype[prop];
	            core.defineProperty(type.prototype, prop, getter(original));
	        }
	    }
	})([Array, Map, Set, WeakMap, WeakSet], ['keys', 'values', 'entries']);
};
