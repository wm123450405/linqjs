'use strict';

module.exports = (array, last = false) => {
	let enumerable = array.asEnumerable(), count = -1;
	let getCount = () => count === -1 ? (count = enumerable.count()) : count;
	return (element, other) => {
		let elementIndex = enumerable.findIndex(predicate => predicate(element));
		elementIndex = elementIndex == -1 && last ? getCount() : elementIndex;
		let otherIndex = enumerable.findIndex(predicate => predicate(other));
		otherIndex = otherIndex == -1 && last ? getCount() : otherIndex;
		return elementIndex - otherIndex;
	};
};

const methods = require('./methods');