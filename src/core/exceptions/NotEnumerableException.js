'use strict';

const core = require('./../core');

class NoEnumerableException extends Error {
	constructor(value) {
		super(`Value of type [${ core.getType(value) }] is not an enumerable value and can not convert to an enumerable value`);
	}
}

module.exports = NoEnumerableException;