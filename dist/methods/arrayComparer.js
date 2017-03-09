"use strict";

module.exports = function (array) {
	var last = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	return function (element, other) {
		var enumerable = array.asEnumerable(),
		    count = 0;
		var elementIndex = enumerable.indexOf(element);
		elementIndex = elementIndex == -1 && last ? count = count || enumerable.count() : elementIndex;
		var otherIndex = enumerable.indexOf(other);
		otherIndex = otherIndex == -1 && last ? count = count || enumerable.count() : otherIndex;
		return elementIndex - otherIndex;
	};
};