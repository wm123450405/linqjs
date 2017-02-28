"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element, other) {
  return element > other ? 1 : element == other ? 0 : -1;
};