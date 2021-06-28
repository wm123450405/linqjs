'use strict';

const core = require('../core/core');

const PropertyExpressionInvalidException = require('../core/exceptions/PropertyExpressionInvalidException');

const regValid = /^(([_$\w][_$\w\d]*)|(\[((\d+)|'([^']+)'|"([^"]+)")]))(\.([_$\w][_$\w\d]*)|(\[((\d+)|'([^']+)'|"([^"]+)")]))*$/ig;
const regSplit = /(?:^|\.)([_$\w][_$\w\d]*)|\[(?:(\d+)|'([^']+)'|"([^"]+)")]/ig;
const FIRST = Symbol('first');

module.exports = (property, ignoreInvalid = false) => {
	if (core.isSymbol(property) || core.isNumber(property)) {
		return (element, value) => {
			if (typeof element !== 'undefined' && element !== null) {
				element[property] = value;
            } else if (!ignoreInvalid) {
				throw new PropertyExpressionInvalidException(property);
            }
		};
	} else if (property === '') {
        throw new PropertyExpressionInvalidException(property);
	} else {
		regValid.lastIndex = 0;
		if (regValid.test(property)) {
			return (element, value) => {
				regSplit.lastIndex = 0;
				let result;
				let prop = FIRST;
				while(typeof element !== 'undefined' && element !== null && (result = regSplit.exec(property))) {
					if (prop !== FIRST) element = element[prop];
                    prop = result[1] || result[2] || result[3] || result[4];
				}
				if (typeof element !== 'undefined' && element !== null && prop !== FIRST) {
					element[prop] = value;
				} else if (!ignoreInvalid) {
					throw new PropertyExpressionInvalidException(property);
				}
			};
		} else if (!ignoreInvalid) {
			throw new PropertyExpressionInvalidException(property);
		}
	}
};