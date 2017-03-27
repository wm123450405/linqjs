'use strict';

class PropertyExpressionInvalidException extends Error {
	constructor(property) {
		super('The property expression is invalid. property is :' + property);
	}
}

module.exports = PropertyExpressionInvalidException;