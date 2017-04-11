'use strict';

const defaultEqualityComparer = require('./defaultEqualityComparer');

module.exports = (greaterThen, comparer = defaultEqualityComparer) => {
	return (element, other) => {
		comparer = methods.asEqualityComparer(comparer);
		if (comparer(element, other)) {
			return 0;
		} else {
			return greaterThen(element, other) ? 1 : -1;
		}
	};
};

const methods = require('./methods');