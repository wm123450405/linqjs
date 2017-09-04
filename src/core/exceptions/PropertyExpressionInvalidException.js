'use strict';

const Exception = require('./Exception');

class PropertyExpressionInvalidException extends Exception {
	constructor(property) {
		super('The property expression is invalid. property is :' + property);
	}
}

module.exports = PropertyExpressionInvalidException;