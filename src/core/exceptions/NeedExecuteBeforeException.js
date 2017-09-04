'use strict';

const Exception = require('./Exception');

class NeedExecuteBeforeException extends Exception {
	constructor(methodName) {
		super('Need execute method [' + methodName + '()] before');
	}
}

module.exports = NeedExecuteBeforeException;
