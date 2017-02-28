'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element, index) {
  return typeof element.key === 'undefined' ? element : element.value;
};