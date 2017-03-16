'use strict';

const IEquatable = require('./../core/IEquatable');

module.exports = (element, other) => element instanceof IEquatable ? element.equals(other) : other instanceof IEquatable ? other.equals(element) : element == other;