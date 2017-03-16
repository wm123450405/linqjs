'use strict';

module.exports = (orderByComparer, thenByComparer) => (element, other) => {
    let compare = orderByComparer(element, other);
    return compare === 0 ? thenByComparer(element, other) : compare;
};