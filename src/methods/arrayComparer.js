'use strict';

const defaultEqualityComparer = require('./defaultEqualityComparer');

module.exports = (array, last = false, comparer = defaultEqualityComparer) => {
	comparer = methods.asEqualityComparer(comparer);
	let enumerable = array.asEnumerable(), count = -1;
	let getCount = () => count === -1 ? (count = enumerable.count()) : count;
	return (element, other) => {
		let elementIndex = enumerable.indexOf(element, 0, comparer);
		elementIndex = elementIndex == -1 && last ? getCount() : elementIndex;
		let otherIndex = enumerable.indexOf(other, 0, comparer);
		otherIndex = otherIndex == -1 && last ? getCount() : otherIndex;
		return elementIndex - otherIndex;
	};
};

const methods = require('./methods');