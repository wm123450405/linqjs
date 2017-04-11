'use strict';

const defaultSameComparer = require('./defaultSameComparer');
const propertySelector = require('./propertySelector');

const compare = (element, properties, comparer) => {
	for (let property in properties) {
		let ep = propertySelector(property)(element);
		let pp = properties[property];
		let ept = core.getType(ep);
		if (ept !== core.getType(pp)) {
			return false;
		} else {
			if (ept === core.types.Object || ept === core.types.Array) {
				if (!compare(ep, pp, comparer)) {
					return false;
				}
			} else if (!comparer(ep, pp)) {
				return false;
			}
		}
	}
	return true;
};

module.exports = (properties, comparer = defaultSameComparer) => {
	comparer = methods.asEqualityComparer(comparer);
	return element => compare(element, properties, comparer);
};

const methods = require('./methods');
const core = require('./../core/core');