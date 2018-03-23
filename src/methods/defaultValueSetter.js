'use strict';

module.exports = (element, value) => {
    if (typeof element !== 'undefined' && element !== null) {
        element.value = value;
    }
};