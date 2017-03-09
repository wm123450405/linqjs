'use strict';

var IEquatable = require('./../core/IEquatable');
module.exports = function (element, other) {
  return element instanceof IEquatable ? element.equals(other) : other instanceof IEquatable ? other.equals(element) : element == other;
};