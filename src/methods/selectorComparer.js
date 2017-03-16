'use strict';

module.exports = (selector, comparer) => (element, other) => comparer(selector(element), selector(other));