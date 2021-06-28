'use strict';

const core = require('../core/core');

const PropertyExpressionInvalidException = require('../core/exceptions/PropertyExpressionInvalidException');

const regValid = /^(([_$\w][_$\w\d]*)|(\[((\d+)|'([^']+)'|"([^"]+)")]))(\.([_$\w][_$\w\d]*)|(\[((\d+)|'([^']+)'|"([^"]+)")]))*$/ig;
const regSplit = /(?:^|\.)([_$\w][_$\w\d]*)|\[(?:(\d+)|'([^']+)'|"([^"]+)")]/ig;

module.exports = (property, ignoreInvalid = false) => {
	if (core.isSymbol(property) || core.isNumber(property)) {
		return (element, index) => typeof element !== 'undefined' && element !== null ? element[property] : element;
	} else if (property === '') {
		return (element, index) => element;
	} else {
		regValid.lastIndex = 0;
		if (regValid.test(property)) {
			return element => {
				regSplit.lastIndex = 0;
				let result;
				while(typeof element !== 'undefined' && element !== null && (result = regSplit.exec(property))) {
					element = element[result[1] || result[2] || result[3] || result[4]];
				}
				return element;
			};
		} else if (!ignoreInvalid) {
			throw new PropertyExpressionInvalidException(property);
		}
	}
};