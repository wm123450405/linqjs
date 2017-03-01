/**
 * Created by wm123 on 2017/2/14.
 */
const Enumerable = require('./linq');

module.exports = function() {
	Enumerable.extends(String.prototype, 'string');
};