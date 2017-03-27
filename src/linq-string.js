'use strict';

/**
 * Created by wm123 on 2017/2/14.
 */
const Enumerable = require('./Enumerable');
const core = require('./core/core');

module.exports = {
	install() {
		Enumerable.extend(String.prototype, core.types.String, true);
	},
	uninstall() {
		Enumerable.unextend(String.prototype, core.types.String, true);
	}
};