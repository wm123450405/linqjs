"use strict";

module.exports = function (value, comparer) {
  return function (element, index) {
    return comparer(element, value);
  };
};