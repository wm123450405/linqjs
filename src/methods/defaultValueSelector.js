'use strict';

module.exports = (element, index) => typeof element.key === 'undefined' ? element : element.value;