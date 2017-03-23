'use strict';

const core = require('./../core');

class PluginRepeatException extends Error {
	constructor(plugin, builtin = false) {
		super(builtin ? `Can not add plugin with name "${ plugin.name }" because of this is a builtin property` : `Plugin with name "${ plugin.name }" has already added`);
	}
}

module.exports = PluginRepeatException;