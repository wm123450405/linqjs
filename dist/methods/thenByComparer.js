"use strict";

module.exports = function (orderByComparer, thenByComparer) {
    return function (element, other) {
        var compare = orderByComparer(element, other);
        return compare == 0 ? thenByComparer(element, other) : compare;
    };
};