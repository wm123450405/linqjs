const defaultEqualityComparer = require('./defaultEqualityComparer');

module.exports = (array, last = false, comparer = defaultEqualityComparer) => (element, other) => {
	let enumerable = array.asEnumerable(), count = 0;
	let elementIndex = enumerable.indexOf(element, 0, comparer);
	elementIndex = elementIndex == -1 && last ? (count = count || enumerable.count()) : elementIndex;
	let otherIndex = enumerable.indexOf(other, 0, comparer);
	otherIndex = otherIndex == -1 && last ? (count = count || enumerable.count()) : otherIndex;
	return elementIndex - otherIndex;
};