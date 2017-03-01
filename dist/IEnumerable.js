'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var core = require('./core/core');

var defaultPredicate = require('./methods/defaultPredicate');
var defaultSelector = require('./methods/defaultSelector');
var defaultEqualityComparer = require('./methods/defaultEqualityComparer');
var defaultComparer = require('./methods/defaultComparer');
var defaultGroupResultSelector = require('./methods/defaultGroupResultSelector');
var defaultKeySelector = require('./methods/defaultKeySelector');
var defaultValueSelector = require('./methods/defaultValueSelector');

var hasProxy = typeof Proxy !== 'undefined' && Proxy.toString().match(/native code/);

var IEnumerable = function () {
    function IEnumerable(source) {
        _classCallCheck(this, IEnumerable);

        var type = source instanceof String || typeof source === 'string' ? 'string' : source instanceof Array || core.typeName(source).endsWith(' Iterator') ? 'array' : source instanceof IEnumerable ? 'enumerable' : 'object';
        core.defineProperty(this, Symbol.toStringTag, 'IEnumerable');
        core.defineProperties(this, {
            getProtoType: function getProtoType() {
                return type === 'enumerable' ? source.getProtoType() : type;
            },
            toString: function toString() {
                return type === 'string' ? Enumerable.join(this, '') : type === 'array' ? '[' + Enumerable.join(this, ',') + ']' : type === 'enumerable' ? source.toString.call(this) : '[' + Enumerable.join(this, ',') + ']';
            }
        });
        if (hasProxy) {
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
                    return Enumerable.range(0, target.count()).select(function (i) {
                        return String(i);
                    }).concat(Reflect.ownKeys(target)).toArray();
                }
            });
        }
    }

    _createClass(IEnumerable, [{
        key: 'where',
        value: function where() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

            return Enumerable.where(this, predicate);
        }
    }, {
        key: 'select',
        value: function select() {
            var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;

            return Enumerable.select(this, selector);
        }
    }, {
        key: 'elementAt',
        value: function elementAt(index) {
            return Enumerable.elementAt(this, index);
        }
    }, {
        key: 'elementAtOrDefault',
        value: function elementAtOrDefault(index, defaultValue) {
            return Enumerable.elementAtOrDefault(this, index, defaultValue);
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

            return Enumerable.concat(this, other);
        }
    }, {
        key: 'distinct',
        value: function distinct() {
            var comparer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultEqualityComparer;

            return Enumerable.distinct(this, comparer);
        }
    }, {
        key: 'except',
        value: function except(other) {
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;

            return Enumerable.except(this, other, comparer);
        }
    }, {
        key: 'union',
        value: function union(other) {
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;

            return Enumerable.union(this, other, comparer);
        }
    }, {
        key: 'intersect',
        value: function intersect(other) {
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;

            return Enumerable.intersect(this, other, comparer);
        }
    }, {
        key: 'ofType',
        value: function ofType(type) {
            return Enumerable.ofType(this, type);
        }
    }, {
        key: 'skip',
        value: function skip(count) {
            return Enumerable.skip(this, count);
        }
    }, {
        key: 'skipWhile',
        value: function skipWhile() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate();

            return Enumerable.skipWhile(this, predicate);
        }
    }, {
        key: 'take',
        value: function take(count) {
            return Enumerable.take(this, count);
        }
    }, {
        key: 'takeWhile',
        value: function takeWhile() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate();

            return Enumerable.takeWhile(this, predicate);
        }
    }, {
        key: 'orderBy',
        value: function orderBy() {
            var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;

            return Enumerable.orderBy(this, keySelector, comparer);
        }
    }, {
        key: 'orderByDescending',
        value: function orderByDescending() {
            var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;

            return Enumerable.orderByDescending(this, keySelector, comparer);
        }
    }, {
        key: 'groupBy',
        value: function groupBy() {
            var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
            var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
            var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGroupResultSelector;
            var comparer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultEqualityComparer;

            return Enumerable.groupBy(this, keySelector, elementSelector, resultSelector, comparer);
        }
    }, {
        key: 'selectMany',
        value: function selectMany() {
            var collectionSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
            var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;

            return Enumerable.selectMany(this, collectionSelector, resultSelector);
        }
    }, {
        key: 'join',
        value: function join(inner, outerKeySelector, innerKeySelector, resultSelector) {
            var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;

            return Enumerable.join(this, inner, outerKeySelector, innerKeySelector, resultSelector, comparer);
        }
    }, {
        key: 'groupJoin',
        value: function groupJoin(inner, outerKeySelector, innerKeySelector, resultSelector) {
            var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;

            return Enumerable.groupJoin(this, inner, outerKeySelector, innerKeySelector, resultSelector, comparer);
        }
    }, {
        key: 'defaultIfEmpty',
        value: function defaultIfEmpty() {
            return Enumerable.defaultIfEmpty(this);
        }
    }, {
        key: 'all',
        value: function all() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

            return Enumerable.all(this, predicate);
        }
    }, {
        key: 'any',
        value: function any() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

            return Enumerable.any(this, predicate);
        }
    }, {
        key: 'isEmpty',
        value: function isEmpty() {
            return Enumerable.isEmpty(this);
        }
    }, {
        key: 'sequenceEqual',
        value: function sequenceEqual(other) {
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;

            return Enumerable.sequenceEqual(this, other, comparer);
        }
    }, {
        key: 'first',
        value: function first() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

            return Enumerable.first(this, predicate);
        }
    }, {
        key: 'firstOrDefault',
        value: function firstOrDefault(defaultValue) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

            return Enumerable.firstOrDefault(this, defaultValue, predicate);
        }
    }, {
        key: 'last',
        value: function last() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

            return Enumerable.last(this, predicate);
        }
    }, {
        key: 'lastOrDefault',
        value: function lastOrDefault(defaultValue) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

            return Enumerable.lastOrDefault(this, defaultValue, predicate);
        }
    }, {
        key: 'single',
        value: function single() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

            return Enumerable.single(this, predicate);
        }
    }, {
        key: 'singleOrDefault',
        value: function singleOrDefault(defaultValue) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

            return Enumerable.singleOrDefault(this, defaultValue, predicate);
        }
    }, {
        key: 'count',
        value: function count() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

            return Enumerable.count(this, predicate);
        }
    }, {
        key: 'sum',
        value: function sum() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

            return Enumerable.sum(this, predicate);
        }
    }, {
        key: 'max',
        value: function max() {
            var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;

            return Enumerable.max(this, selector, comparer);
        }
    }, {
        key: 'min',
        value: function min() {
            var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;

            return Enumerable.min(this, selector, comparer);
        }
    }, {
        key: 'average',
        value: function average() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

            return Enumerable.average(this, predicate);
        }
    }, {
        key: 'aggregate',
        value: function aggregate(seed, func) {
            var selector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;

            return Enumerable.aggregate(this, seed, func, selector);
        }
    }, {
        key: 'contains',
        value: function contains(value) {
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;

            return Enumerable.contains(this, value, comparer);
        }
    }, {
        key: 'indexOf',
        value: function indexOf(value) {
            var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

            return Enumerable.indexOf(this, value, start, comparer);
        }
    }, {
        key: 'findIndex',
        value: function findIndex(predicate) {
            var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            return Enumerable.findIndex(this, predicate, start);
        }
    }, {
        key: 'lastIndexOf',
        value: function lastIndexOf(value) {
            var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

            return Enumerable.lastIndexOf(this, value, start, comparer);
        }
    }, {
        key: 'findLastIndex',
        value: function findLastIndex(predicate) {
            var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            return Enumerable.findLastIndex(this, predicate, start);
        }
    }, {
        key: 'reverse',
        value: function reverse() {
            return Enumerable.reverse(this);
        }
    }, {
        key: 'zip',
        value: function zip(other, resultSelector) {
            return Enumerable.zip(this, other, resultSelector);
        }
    }, {
        key: 'toArray',
        value: function toArray() {
            return Enumerable.toArray(this);
        }
    }, {
        key: 'toObject',
        value: function toObject() {
            var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKeySelector;
            var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultValueSelector;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

            return this.toDictionary(keySelector, elementSelector, comparer).toObject();
        }
    }, {
        key: 'toDictionary',
        value: function toDictionary() {
            var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
            var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

            return Enumerable.toDictionary(this, keySelector, elementSelector, comparer);
        }
    }, {
        key: 'toLookup',
        value: function toLookup() {
            var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
            var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

            return Enumerable.toLookup(this, keySelector, elementSelector, comparer);
        }
    }, {
        key: 'forEach',
        value: function forEach() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultAction;

            return Enumerable.forEach(this, action);
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

module.exports = IEnumerable;

var Enumerable = require('./Enumerable');