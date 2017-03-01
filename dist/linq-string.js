'use strict';

/**
 * Created by wm123 on 2017/2/14.
 */
var Enumerable = require('./linq');

module.exports = function () {
  Enumerable.extends(String.prototype, 'string');
};