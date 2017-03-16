'use strict';

module.exports = (orderBy) => (element, other) => -orderBy(element, other);