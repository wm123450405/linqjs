'use strict';

var core = require('./core/core');

var Enumerable = require('./Enumerable');

var MapEnumerable = require('./enumerables/MapEnumerable');
var ArrayEnumerable = require('./enumerables/ArrayEnumerable');
var StringEnumerable = require('./enumerables/StringEnumerable');
var IteratorEnumerable = require('./enumerables/IteratorEnumerable');
var ObjectEnumerable = require('./enumerables/ObjectEnumerable');

var extendArray = require('./linq-array');
var extendObject = require('./linq-object');
var extendString = require('./linq-string');

if (typeof regeneratorRuntime === 'undefined') {
    require('babel-polyfill');
}

core.defineProperties(Map.prototype, {
    asEnumerable: function asEnumerable() {
        return new MapEnumerable(this);
    }
});
core.defineProperties(Array.prototype, {
    asEnumerable: function asEnumerable() {
        return new ArrayEnumerable(this);
    }
});
core.defineProperties(Set.prototype, {
    asEnumerable: function asEnumerable() {
        return new ArrayEnumerable(this);
    }
});
core.defineProperties(String.prototype, {
    asEnumerable: function asEnumerable() {
        return new StringEnumerable(this);
    }
});
core.defineProperties(Object.prototype, {
    asEnumerable: function asEnumerable() {
        var type = core.typeName(this);
        if (type.endsWith(' Iterator')) {
            return new IteratorEnumerable(this);
        } else {
            return new ObjectEnumerable(this);
        }
    }
});

Enumerable.Config = {
    extends: {
        set array(value) {
            if (value) {
                extendArray();
            }
        },
        set object(value) {
            if (value) {
                extendObject();
            }
        },
        set string(value) {
            if (value) {
                extendString();
            }
        }
    }
};

//module.exports = Enumerable;
module.exports = Enumerable;