'use strict';

class NoSuchElementsException extends Error {
	constructor() {
		super('No such elements');
	}
}

module.exports = NoSuchElementsException;