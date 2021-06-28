'use strict';

const Exception = require('./Exception');

const core = require('../core');

class NoEnumerableException extends Exception {
	constructor(value) {
		super(`Value of type [${ core.getType(value) }] is not an enumerable value and can not convert to an enumerable value`);
	}
}

module.exports = NoEnumerableException;