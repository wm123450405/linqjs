'use strict';

const core = require('./../core/core');

const PropertyExpressionInvalidException = require('./../core/exceptions/PropertyExpressionInvalidException');

const regValid = /^(([_$\w][_$\w\d]*)|(\[((\d+)|'([^']+)'|"([^"]+)")\]))(\.\2|\3)*$/ig;
const regSplit = /(?:^|\.)([_$\w][_$\w\d]*)|\[(?:(\d+)|'([^']+)'|"([^"]+)")\]/ig;

module.exports = property => {
	if (core.isSymbol(property)) {
		return (element, index) => element && element[property];
	} else if (property === '') {
		return (element, index) => element;
	} else {
		regValid.lastIndex = 0;
		if (regValid.test(property)) {
			return (element, index) => {
				regSplit.lastIndex = 0;
				let result;
				while(typeof element !== 'undefined' && (result = regSplit.exec(property))) {
					element = element[result[1] || result[2] || result[3] || result[4]];
				}
				return element;
			};
		} else {
			throw new PropertyExpressionInvalidException(property);
		}
	}
};