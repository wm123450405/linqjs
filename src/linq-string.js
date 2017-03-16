'use strict';

/**
 * Created by wm123 on 2017/2/14.
 */
const Enumerable = require('./Enumerable');

module.exports = () => {
	Enumerable.extends(String.prototype, 'string');
};