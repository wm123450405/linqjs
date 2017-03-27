'use strict';

/**
 * Created by wm123 on 2017/2/14.
 */
const Enumerable = require('./Enumerable');

const core = require('./core/core');

const getter = (original) => {
	return function() {
        return Enumerable.extend(original.apply(this, arguments), core.types.Array);
    };
};

const extendsTypes = [Array, Map, Set];
const extendsProperties = ['keys', 'values', 'entries'];

module.exports = {
	install() {
		Enumerable.extend(Array.prototype, core.types.Array, true);

		((types, props) => {
		    for (let type of types) {
		    	if (type) {
			        for (let prop of props) {
			            core.defineProperty(type.prototype, prop, getter(type.prototype[prop]));
			        }
		    	}
		    }
		})(extendsTypes, extendsProperties);
	},
	uninstall() {
		Enumerable.unextend(Array.prototype, core.types.Array, true);

		((types, props) => {
		    for (let type of types) {
		    	if (type) {
		            core.undefineProperties(type.prototype, props);
		    	}
		    }
		})(extendsTypes, extendsProperties);
	}
};