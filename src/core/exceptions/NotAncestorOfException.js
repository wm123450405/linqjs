'use strict';

const core = require('../core');

const Exception = require('./Exception');

class NotAncestorOfException extends Exception {
	constructor(ancestor, descendant) {
		super(`'${ core.isUndefined(ancestor.key) ? ancestor.value : ancestor.key }' is not ancestor node of '${ core.isUndefined(descendant.key) ? descendant.value : descendant.key }'`);
	}
}

module.exports = NotAncestorOfException;