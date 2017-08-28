'use strict';

const defaultSelector = require('./defaultSelector');

module.exports = (keySelector = defaultSelector) => {
	keySelector = methods.asSelector(keySelector);
	return (element, other) => {
        element = keySelector(element);
        other = keySelector(other);
        return element === other || element && other && element.toString().toLowerCase() === other.toString().toLowerCase();
	};
};

const methods = require('./methods');