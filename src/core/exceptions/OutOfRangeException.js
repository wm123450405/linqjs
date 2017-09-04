'use strict';

const Exception = require('./Exception');

class OutOfRangeException extends Exception {
	constructor(index) {
		super('Out of range, index:' + index);
	}
}

module.exports = OutOfRangeException;