"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value, comparer) {
  return function (element, index) {
    return comparer(element, value);
  };
};