'use strict';

module.exports = (element, other) => element === other || (typeof element === 'number' && typeof other === 'number' && isNaN(element) && isNaN(other));