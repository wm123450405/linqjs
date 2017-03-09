module.exports = (array, last = false) => (element, other) => {
	let enumerable = array.asEnumerable(), count = 0;
	let elementIndex = enumerable.findIndex(predicate => predicate(element));
	elementIndex = elementIndex == -1 && last ? (count = count || enumerable.count()) : elementIndex;
	let otherIndex = enumerable.findIndex(predicate => predicate(other));
	otherIndex = otherIndex == -1 && last ? (count = count || enumerable.count()) : otherIndex;
	return elementIndex - otherIndex;
};