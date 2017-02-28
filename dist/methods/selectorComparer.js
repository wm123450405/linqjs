"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (selector, comparer) {
  return function (element, other) {
    return comparer(selector(element), selector(other));
  };
};