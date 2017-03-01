"use strict";

module.exports = function (element, other) {
  return element > other ? 1 : element == other ? 0 : -1;
};