'use strict';

var IComparable = require('./../core/IComparable');
module.exports = function (element, other) {
  return element instanceof IComparable ? element.compare(other) : other instanceof IComparable ? -other.compare(element) : element > other ? 1 : element == other ? 0 : -1;
};