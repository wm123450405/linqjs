'use strict';

/**
 * Created by wm123 on 2017/2/14.
 */
const Enumerable = require('./Enumerable');
const core = require('./core/core');

module.exports = {
	install() {
		Enumerable.extends(String.prototype, core.types.String);
	},
	uninstall() {
		Enumerable.unextends(String.prototype, core.types.String);
	}
};