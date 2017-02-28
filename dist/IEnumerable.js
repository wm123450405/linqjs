'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = require('./core/core');

var _core2 = _interopRequireDefault(_core);

var _Enumerable = require('./Enumerable');

var _Enumerable2 = _interopRequireDefault(_Enumerable);

var _defaultPredicate = require('./methods/defaultPredicate');

var _defaultPredicate2 = _interopRequireDefault(_defaultPredicate);

var _defaultSelector = require('./methods/defaultSelector');

var _defaultSelector2 = _interopRequireDefault(_defaultSelector);

var _defaultEqualityComparer = require('./methods/defaultEqualityComparer');

var _defaultEqualityComparer2 = _interopRequireDefault(_defaultEqualityComparer);

var _defaultComparer = require('./methods/defaultComparer');

var _defaultComparer2 = _interopRequireDefault(_defaultComparer);

var _defaultGroupResultSelector = require('./methods/defaultGroupResultSelector');

var _defaultGroupResultSelector2 = _interopRequireDefault(_defaultGroupResultSelector);

var _defaultKeySelector = require('./methods/defaultKeySelector');

var _defaultKeySelector2 = _interopRequireDefault(_defaultKeySelector);

var _defaultValueSelector = require('./methods/defaultValueSelector');

var _defaultValueSelector2 = _interopRequireDefault(_defaultValueSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IEnumerable = function () {
    function IEnumerable(source) {
        _classCallCheck(this, IEnumerable);

        var type = source instanceof String || typeof source === 'string' ? 'string' : source instanceof Array || _core2.default.typeName(source).endsWith(' Iterator') ? 'array' : source instanceof IEnumerable ? 'enumerable' : 'object';
        _core2.default.defineProperty(this, Symbol.toStringTag, 'IEnumerable');
        _core2.default.defineProperties(this, {
            getProtoType: function getProtoType() {
                return type === 'enumerable' ? source.getProtoType() : type;
            },
            toString: function toString() {
                return type === 'string' ? _Enumerable2.default.join(this, '') : type === 'array' ? '[' + _Enumerable2.default.join(this, ',') + ']' : type === 'enumerable' ? source.toString.call(this) : '[' + _Enumerable2.default.join(this, ',') + ']';
            }
        });
        return new Proxy(this, {
            get: function get(target, prop) {
                if ((typeof prop === 'undefined' ? 'undefined' : _typeof(prop)) !== 'symbol' && !isNaN(prop) && parseInt(prop) == prop && !(prop in target)) {
                    return target.elementAtOrDefault(prop);
                } else {
                    return target[prop];
                }
            },
            getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, prop) {
                if ((typeof prop === 'undefined' ? 'undefined' : _typeof(prop)) !== 'symbol' && !isNaN(prop) && parseInt(prop) == prop && !(prop in target)) {
                    return { writable: false, enumerable: true, configurable: true };
                } else {
                    return Object.getOwnPropertyDescriptor(target, prop);
                }
            },
            ownKeys: function ownKeys(target) {
                return _Enumerable2.default.range(0, target.count()).select(function (i) {
                    return String(i);
                }).concat(Reflect.ownKeys(target)).toArray();
            }
        });
    }

    _createClass(IEnumerable, [{
        key: 'where',
        value: function where() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultPredicate2.default;

            return _Enumerable2.default.where(this, predicate);
        }
    }, {
        key: 'select',
        value: function select() {
            var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultSelector2.default;

            return _Enumerable2.default.select(this, selector);
        }
    }, {
        key: 'elementAt',
        value: function elementAt(index) {
            return _Enumerable2.default.elementAt(this, index);
        }
    }, {
        key: 'elementAtOrDefault',
        value: function elementAtOrDefault(index, defaultValue) {
            return _Enumerable2.default.elementAtOrDefault(this, index, defaultValue);
        }
    }, {
        key: 'asEnumerable',
        value: function asEnumerable() {
            return this;
        }
    }, {
        key: 'concat',
        value: function concat() {
            var other = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            return _Enumerable2.default.concat(this, other);
        }
    }, {
        key: 'distinct',
        value: function distinct() {
            var comparer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultEqualityComparer2.default;

            return _Enumerable2.default.distinct(this, comparer);
        }
    }, {
        key: 'except',
        value: function except(other) {
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultEqualityComparer2.default;

            return _Enumerable2.default.except(this, other, comparer);
        }
    }, {
        key: 'union',
        value: function union(other) {
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultEqualityComparer2.default;

            return _Enumerable2.default.union(this, other, comparer);
        }
    }, {
        key: 'intersect',
        value: function intersect(other) {
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultEqualityComparer2.default;

            return _Enumerable2.default.intersect(this, other, comparer);
        }
    }, {
        key: 'ofType',
        value: function ofType(type) {
            return _Enumerable2.default.ofType(this, type);
        }
    }, {
        key: 'skip',
        value: function skip(count) {
            return _Enumerable2.default.skip(this, count);
        }
    }, {
        key: 'skipWhile',
        value: function skipWhile() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _defaultPredicate2.default)();

            return _Enumerable2.default.skipWhile(this, predicate);
        }
    }, {
        key: 'take',
        value: function take(count) {
            return _Enumerable2.default.take(this, count);
        }
    }, {
        key: 'takeWhile',
        value: function takeWhile() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _defaultPredicate2.default)();

            return _Enumerable2.default.takeWhile(this, predicate);
        }
    }, {
        key: 'orderBy',
        value: function orderBy() {
            var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultSelector2.default;
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultComparer2.default;

            return _Enumerable2.default.orderBy(this, keySelector, comparer);
        }
    }, {
        key: 'orderByDescending',
        value: function orderByDescending() {
            var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultSelector2.default;
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultComparer2.default;

            return _Enumerable2.default.orderByDescending(this, keySelector, comparer);
        }
    }, {
        key: 'groupBy',
        value: function groupBy() {
            var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultSelector2.default;
            var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultSelector2.default;
            var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _defaultGroupResultSelector2.default;
            var comparer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _defaultEqualityComparer2.default;

            return _Enumerable2.default.groupBy(this, keySelector, elementSelector, resultSelector, comparer);
        }
    }, {
        key: 'selectMany',
        value: function selectMany() {
            var collectionSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultSelector2.default;
            var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultSelector2.default;

            return _Enumerable2.default.selectMany(this, collectionSelector, resultSelector);
        }
    }, {
        key: 'join',
        value: function join(inner, outerKeySelector, innerKeySelector, resultSelector) {
            var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _defaultEqualityComparer2.default;

            return _Enumerable2.default.join(this, inner, outerKeySelector, innerKeySelector, resultSelector, comparer);
        }
    }, {
        key: 'groupJoin',
        value: function groupJoin(inner, outerKeySelector, innerKeySelector, resultSelector) {
            var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _defaultEqualityComparer2.default;

            return _Enumerable2.default.groupJoin(this, inner, outerKeySelector, innerKeySelector, resultSelector, comparer);
        }
    }, {
        key: 'defaultIfEmpty',
        value: function defaultIfEmpty() {
            return _Enumerable2.default.defaultIfEmpty(this);
        }
    }, {
        key: 'all',
        value: function all() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultPredicate2.default;

            return _Enumerable2.default.all(this, predicate);
        }
    }, {
        key: 'any',
        value: function any() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultPredicate2.default;

            return _Enumerable2.default.any(this, predicate);
        }
    }, {
        key: 'isEmpty',
        value: function isEmpty() {
            return _Enumerable2.default.isEmpty(this);
        }
    }, {
        key: 'sequenceEqual',
        value: function sequenceEqual(other) {
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultEqualityComparer2.default;

            return _Enumerable2.default.sequenceEqual(this, other, comparer);
        }
    }, {
        key: 'first',
        value: function first() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultPredicate2.default;

            return _Enumerable2.default.first(this, predicate);
        }
    }, {
        key: 'firstOrDefault',
        value: function firstOrDefault(defaultValue) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultPredicate2.default;

            return _Enumerable2.default.firstOrDefault(this, defaultValue, predicate);
        }
    }, {
        key: 'last',
        value: function last() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultPredicate2.default;

            return _Enumerable2.default.last(this, predicate);
        }
    }, {
        key: 'lastOrDefault',
        value: function lastOrDefault(defaultValue) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultPredicate2.default;

            return _Enumerable2.default.lastOrDefault(this, defaultValue, predicate);
        }
    }, {
        key: 'single',
        value: function single() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultPredicate2.default;

            return _Enumerable2.default.single(this, predicate);
        }
    }, {
        key: 'singleOrDefault',
        value: function singleOrDefault(defaultValue) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultPredicate2.default;

            return _Enumerable2.default.singleOrDefault(this, defaultValue, predicate);
        }
    }, {
        key: 'count',
        value: function count() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultPredicate2.default;

            return _Enumerable2.default.count(this, predicate);
        }
    }, {
        key: 'sum',
        value: function sum() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultPredicate2.default;

            return _Enumerable2.default.sum(this, predicate);
        }
    }, {
        key: 'max',
        value: function max() {
            var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultSelector2.default;
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultComparer2.default;

            return _Enumerable2.default.max(this, selector, comparer);
        }
    }, {
        key: 'min',
        value: function min() {
            var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultSelector2.default;
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultComparer2.default;

            return _Enumerable2.default.min(this, selector, comparer);
        }
    }, {
        key: 'average',
        value: function average() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultPredicate2.default;

            return _Enumerable2.default.average(this, predicate);
        }
    }, {
        key: 'aggregate',
        value: function aggregate(seed, func) {
            var selector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _defaultSelector2.default;

            return _Enumerable2.default.aggregate(this, seed, func, selector);
        }
    }, {
        key: 'contains',
        value: function contains(value) {
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultEqualityComparer2.default;

            return _Enumerable2.default.contains(this, value, comparer);
        }
    }, {
        key: 'indexOf',
        value: function indexOf(value) {
            var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _defaultEqualityComparer2.default;

            return _Enumerable2.default.indexOf(this, value, start, comparer);
        }
    }, {
        key: 'findIndex',
        value: function findIndex(predicate) {
            var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            return _Enumerable2.default.findIndex(this, predicate, start);
        }
    }, {
        key: 'lastIndexOf',
        value: function lastIndexOf(value) {
            var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _defaultEqualityComparer2.default;

            return _Enumerable2.default.lastIndexOf(this, value, start, comparer);
        }
    }, {
        key: 'findLastIndex',
        value: function findLastIndex(predicate) {
            var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            return _Enumerable2.default.findLastIndex(this, predicate, start);
        }
    }, {
        key: 'reverse',
        value: function reverse() {
            return _Enumerable2.default.reverse(this);
        }
    }, {
        key: 'zip',
        value: function zip(other, resultSelector) {
            return _Enumerable2.default.zip(this, other, resultSelector);
        }
    }, {
        key: 'toArray',
        value: function toArray() {
            return _Enumerable2.default.toArray(this);
        }
    }, {
        key: 'toObject',
        value: function toObject() {
            var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultKeySelector2.default;
            var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultValueSelector2.default;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _defaultEqualityComparer2.default;

            return this.toDictionary(keySelector, elementSelector, comparer).toObject();
        }
    }, {
        key: 'toDictionary',
        value: function toDictionary() {
            var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultSelector2.default;
            var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultSelector2.default;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _defaultEqualityComparer2.default;

            return _Enumerable2.default.toDictionary(this, keySelector, elementSelector, comparer);
        }
    }, {
        key: 'toLookup',
        value: function toLookup() {
            var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultSelector2.default;
            var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultSelector2.default;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _defaultEqualityComparer2.default;

            return _Enumerable2.default.toLookup(this, keySelector, elementSelector, comparer);
        }
    }, {
        key: 'forEach',
        value: function forEach() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultAction;

            return _Enumerable2.default.forEach(this, action);
        }
    }, {
        key: 'length',
        get: function get() {
            return this.count();
        }
    }, {
        key: 'size',
        get: function get() {
            return this.count();
        }
    }]);

    return IEnumerable;
}();

;
exports.default = IEnumerable;