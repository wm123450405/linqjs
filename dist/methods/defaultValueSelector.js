'use strict';

module.exports = function (element, index) {
  return typeof element.key === 'undefined' ? element : element.value;
};