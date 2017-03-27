'use strict';

/**
 * Created by wm123 on 2017/2/14.
 */
const Enumerable = require('./Enumerable');
const core = require('./core/core');

module.exports = {
	install() {
		Enumerable.extend(Object.prototype, core.types.Object, true);
	},
	uninstall() {
		Enumerable.unextend(Object.prototype, core.types.Object, true);
	}
};