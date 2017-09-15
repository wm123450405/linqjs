'use strict';

module.exports = (element, index) => typeof element.value === 'undefined' ? element : element.value;