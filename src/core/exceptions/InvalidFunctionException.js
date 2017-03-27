'use strict';

class InvalidFunctionException extends Error {
	constructor(fun) {
		super('Invalid function value of can not convert to a function value, the original value is : ' + fun);
	}
}

module.exports = InvalidFunctionException;