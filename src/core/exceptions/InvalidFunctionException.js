'use strict';

const Exception = require('./Exception');

class InvalidFunctionException extends Exception {
	constructor(fun) {
		super('Invalid function value of can not convert to a function value, the original value is : ' + fun);
	}
}

module.exports = InvalidFunctionException;