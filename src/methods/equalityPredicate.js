'use strict';

module.exports = (value, comparer) => (element, index) => comparer(element, value);