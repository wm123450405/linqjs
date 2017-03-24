'use strict';

module.exports = property => element => {
	return element && element[property];
};