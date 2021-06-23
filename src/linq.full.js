'use strict';

const core = require('./core/core');

const Enumerable = require('./linq');

require('./plugin');
require('./extend');

const CONFLICT_SET_CONFIG = 'Can not set this config after call the noConflict method. If you want, you can use Enumerable.noConflict method with one parameter which value is "true" to set Enumerable of global back to this module';

const config = {
    extends: {
        array: false,
        string: false,
        object: false
    }
};

const extendArray = require('./linq-array');
const extendObject = require('./linq-object');
const extendString = require('./linq-string');

const save = Enumerable.save;
const restore = Enumerable.restore;

Enumerable.save = function(saved) {
    save.call(this, saved);
    if (!saved.config) saved.config = { };
    if (!saved.config.extends) saved.config.extends = { };
    saved.config.extends.array = this.config.extends.array;
    this.config.extends.array = false;
    saved.config.extends.string = this.config.extends.string;
    this.config.extends.string = false;
    saved.config.extends.object = this.config.extends.object;
    this.config.extends.object = false;
    saved.extends = this.extends;
    if (this.unextendAll) this.unextendAll();
};
Enumerable.restore = function(saved) {
    restore.call(this, saved);
    this.config.extends.array = saved.config && saved.config.extends && saved.config.extends.array || false;
    this.config.extends.string = saved.config && saved.config.extends && saved.config.extends.string || false;
    this.config.extends.object = saved.config && saved.config.extends && saved.config.extends.object || false;
    this.extendAll(saved.extends);
};

Enumerable.config.extends = {
    set array(value) {
        if (config.noConflict) {
            console.warn(CONFLICT_SET_CONFIG);
            return;
        }
        if (config.extends.array !== value) {
            if (value) {
                extendArray.install();
            } else {
                extendArray.uninstall();
            }
        }
        config.extends.array = value;
    },
    get array() {
        return config.extends.array;
    },
    set object(value) {
        if (config.noConflict) {
            console.warn(CONFLICT_SET_CONFIG);
            return;
        }
        if (config.extends.object !== value) {
            if (value) {
                extendObject.install();
            } else {
                extendObject.uninstall();
            }
        }
        config.extends.object = value;
    },
    get object() {
        return config.extends.object;
    },
    set string(value) {
        if (config.noConflict) {
            console.warn(CONFLICT_SET_CONFIG);
            return;
        }
        if (config.extends.string !== value) {
            if (value) {
                extendString.install();
            } else {
                extendString.uninstall();
            }
        }
        config.extends.string = value;
    },
    get string() {
        return config.extends.string;
    },
    set lazy(value) {
        if (config.extends.lazy !== value) {
            core.lazy = value;
        }
        config.extends.lazy = value;
    },
    get lazy() {
        return config.extends.lazy;
    }
};

module.exports = Enumerable;