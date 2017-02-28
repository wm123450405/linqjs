'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('babel-polyfill');

var _core = require('./core/core');

var _core2 = _interopRequireDefault(_core);

var _Enumerable = require('./Enumerable');

var _Enumerable2 = _interopRequireDefault(_Enumerable);

var _MapEnumerable = require('./enumerables/MapEnumerable');

var _MapEnumerable2 = _interopRequireDefault(_MapEnumerable);

var _ArrayEnumerable = require('./enumerables/ArrayEnumerable');

var _ArrayEnumerable2 = _interopRequireDefault(_ArrayEnumerable);

var _StringEnumerable = require('./enumerables/StringEnumerable');

var _StringEnumerable2 = _interopRequireDefault(_StringEnumerable);

var _IteratorEnumerable = require('./enumerables/IteratorEnumerable');

var _IteratorEnumerable2 = _interopRequireDefault(_IteratorEnumerable);

var _ObjectEnumerable = require('./enumerables/ObjectEnumerable');

var _ObjectEnumerable2 = _interopRequireDefault(_ObjectEnumerable);

var _linqArray = require('./linq-array');

var _linqArray2 = _interopRequireDefault(_linqArray);

var _linqObject = require('./linq-object');

var _linqObject2 = _interopRequireDefault(_linqObject);

var _linqString = require('./linq-string');

var _linqString2 = _interopRequireDefault(_linqString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_core2.default.defineProperties(Map.prototype, {
    asEnumerable: function asEnumerable() {
        return new _MapEnumerable2.default(this);
    }
});
_core2.default.defineProperties(Array.prototype, {
    asEnumerable: function asEnumerable() {
        return new _ArrayEnumerable2.default(this);
    }
});
_core2.default.defineProperties(Set.prototype, {
    asEnumerable: function asEnumerable() {
        return new _ArrayEnumerable2.default(this);
    }
});
_core2.default.defineProperties(String.prototype, {
    asEnumerable: function asEnumerable() {
        return new _StringEnumerable2.default(this);
    }
});
_core2.default.defineProperties(Object.prototype, {
    asEnumerable: function asEnumerable() {
        var type = _core2.default.typeName(this);
        if (type.endsWith(' Iterator')) {
            return new _IteratorEnumerable2.default(this);
        } else {
            return new _ObjectEnumerable2.default(this);
        }
    }
});

_Enumerable2.default.Config = {
    extends: {
        set array(value) {
            if (value) {
                (0, _linqArray2.default)();
            }
        },
        set object(value) {
            if (value) {
                (0, _linqObject2.default)();
            }
        },
        set string(value) {
            if (value) {
                (0, _linqString2.default)();
            }
        }
    }
};

exports.default = _Enumerable2.default;