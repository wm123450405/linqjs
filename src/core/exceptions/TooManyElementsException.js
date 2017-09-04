'use strict';

const Exception = require('./Exception');

class TooManyElementsException extends Exception {
	constructor() {
		super('Too many elements');
	}
}

module.exports = TooManyElementsException;