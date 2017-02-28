"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (orderBy) {
  return function (element, other) {
    return -orderBy(element, other);
  };
};