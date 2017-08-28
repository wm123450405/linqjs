'use strict';

const core = require('./core/core');

const Enumerable = require('./Enumerable');

const IEnumerable = require('./IEnumerable');

const PluginRepeatException = require('./core/exceptions/PluginRepeatException');

let _plugins = [];

const pluginComparer = (element, other) => element.name === other.name;
const staticFunction = fn => function() {
	return fn.apply(Enumerable, arguments);
};
const memberFunction = name => function() {
	return Enumerable[name].apply(Enumerable, [this].concat(arguments));
};

core.defineProperty(Enumerable, 'plugins', function() {
	return this.select(_plugins, plugin => ({ 
		get name() { return plugin.name; }, 
		get value() { return plugin.value; }, 
		get types() { return plugin.types; } 
	})).toArray();
}, true, true);
Enumerable.addPlugins = function(...plugins) {
	for(let plugin of plugins) {
		if (plugin.name && plugin.value) {
			if (this.contains(_plugins, plugin, pluginComparer)) {
				throw new PluginRepeatException(plugin);
			} else if (typeof Enumerable[plugin.name] !== 'undefined') {
				throw new PluginRepeatException(plugin, true);
			} else {
				plugin.types = plugin.types || [];
				_plugins.push(plugin);
				Enumerable[plugin.name] = staticFunction(plugin.value);
				IEnumerable.prototype[plugin.name] = memberFunction(plugin.name);
				for (let [type, prototypes] of this.extends) {
					for (let prototype of prototypes) {
						if (this.isEmpty(plugin.types) || this.contains(plugin.types, type)) {
							prototype[plugin.name] = memberFunction(plugin.name);
						}
					}
				}
			}
		} else {
			console.error(`Not a plugin value`);
		}
	}
	return this;
};
Enumerable.removePlugins = function(...plugins) {
	for (let plugin of plugins) {
		if (core.getType(plugin) === core.types.String) {
			plugin = { name: plugin };
		}
		let index = this.indexOf(_plugins, plugin, 0, pluginComparer);
		if (index !== -1) {
			plugin = _plugins[index];
			_plugins.splice(index, 1);
			delete Enumerable[plugin.name];
			delete IEnumerable.prototype[plugin.name];
			for (let [type, prototypes] of this.extends) {
				for (let prototype of prototypes) {
					if (this.isEmpty(plugin.types) || this.contains(plugin.types, type)) {
						delete prototype[plugin.name];
					}
				}
			}
		} else {
			console.error(`No plugin find with name "${ plugin.name }"`);
		}
	}
	return this;
};