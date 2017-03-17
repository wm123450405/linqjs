'use strict';

class OutOfRangeException extends Error {
	constructor(index) {
		super('Out of range, index:' + index);
	}
}

module.exports = OutOfRangeException;