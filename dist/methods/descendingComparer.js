"use strict";

module.exports = function (orderBy) {
  return function (element, other) {
    return -orderBy(element, other);
  };
};