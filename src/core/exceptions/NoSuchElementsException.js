'use strict';

const Exception = require('./Exception');

class NoSuchElementsException extends Exception {
	constructor() {
		super('No such elements');
	}
}

module.exports = NoSuchElementsException;