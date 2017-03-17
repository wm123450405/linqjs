'use strict';

class TooManyElementsException extends Error {
	constructor() {
		super('Too many elements');
	}
}

module.exports = TooManyElementsException;