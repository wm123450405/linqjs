"use strict";

module.exports = function (selector, comparer) {
  return function (element, other) {
    return comparer(selector(element), selector(other));
  };
};