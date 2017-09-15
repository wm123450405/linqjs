'use strict';

module.exports = (element, index) => typeof element.children === 'undefined' ? element : element.children;