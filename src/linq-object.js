'use strict';

/**
 * Created by wm123 on 2017/2/14.
 */
const Enumerable = require('./Enumerable');
const core = require('./core/core');

module.exports = function() {
	Enumerable.extends(Object.prototype, core.types.Object);
};