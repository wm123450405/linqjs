'use strict';

class NeedExecuteBeforeException extends Error {
	constructor(methodName) {
		super('Need execute method [' + methodName + '()] before');
	}
}

module.exports = NeedExecuteBeforeException;
