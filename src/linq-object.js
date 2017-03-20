'use strict';

/**
 * Created by wm123 on 2017/2/14.
 */
const Enumerable = require('./Enumerable');
const core = require('./core/core');

module.exports = {
	install() {
		Enumerable.extends(Object.prototype, core.types.Object);
	},
	uninstall() {
		Enumerable.unextends(Object.prototype, core.types.Object);
	}
};