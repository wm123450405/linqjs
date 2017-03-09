'use strict';

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
var defaultAction = require('./methods/defaultAction');

var _arrayComparer = require('./methods/arrayComparer');
var _predicateComparer = require('./methods/predicateComparer');

var NoSuchElementsException = require('./core/exceptions/NoSuchElementsException');
var OutOfRangeException = require('./core/exceptions/OutOfRangeException');
var TooManyElementsException = require('./core/exceptions/TooManyElementsException');
var KeysForMultiElementsException = require('./core/exceptions/KeysForMultiElementsException');

var Enumerable = function () {
    function Enumerable() {
        _classCallCheck(this, Enumerable);
    }

    _createClass(Enumerable, null, [{
        key: 'extends',
        value: function _extends(prototype, type) {
            core.defineProperties(prototype, {
                where: function where() {
                    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

                    return this.asEnumerable().where(predicate);
                },
                select: function select() {
                    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;

                    return this.asEnumerable().select(selector);
                },
                elementAt: function elementAt(index) {
                    return this.asEnumerable().elementAt(index);
                },
                distinct: function distinct() {
                    var comparer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultEqualityComparer;

                    return this.asEnumerable().distinct(comparer);
                },
                except: function except(other) {
                    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;

                    return this.asEnumerable().except(other, comparer);
                },
                union: function union(other) {
                    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;

                    return this.asEnumerable().union(other, comparer);
                },
                intersect: function intersect(other) {
                    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;

                    return this.asEnumerable().intersect(other, comparer);
                },
                ofType: function ofType(type) {
                    return this.asEnumerable().ofType(type);
                },
                skip: function skip(count) {
                    return this.asEnumerable().skip(count);
                },
                skipWhile: function skipWhile() {
                    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate();

                    return this.asEnumerable().skipWhile(predicate);
                },
                take: function take(count) {
                    return this.asEnumerable().take(count);
                },
                takeWhile: function takeWhile() {
                    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate();

                    return this.asEnumerable().takeWhile(predicate);
                },
                orderBy: function orderBy() {
                    var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
                    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;

                    return this.asEnumerable().orderBy(keySelector, comparer);
                },
                orderByDescending: function orderByDescending() {
                    var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
                    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;

                    return this.asEnumerable().orderByDescending(keySelector, comparer);
                },
                groupBy: function groupBy() {
                    var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
                    var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
                    var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGroupResultSelector;
                    var comparer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultEqualityComparer;

                    return this.asEnumerable().groupBy(keySelector, elementSelector, resultSelector, comparer);
                },
                selectMany: function selectMany() {
                    var collectionSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
                    var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;

                    return this.asEnumerable().selectMany(collectionSelector, resultSelector);
                },
                join: function join(inner) {
                    var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
                    var outerKeySelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
                    var innerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
                    var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;

                    return this.asEnumerable().join(inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
                },
                groupJoin: function groupJoin(inner, resultSelector) {
                    var outerKeySelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
                    var innerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
                    var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;

                    return this.asEnumerable().groupJoin(inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
                },
                defaultIfEmpty: function defaultIfEmpty() {
                    return this.asEnumerable().defaultIfEmpty();
                },
                all: function all() {
                    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

                    return this.asEnumerable().all(predicate);
                },
                any: function any() {
                    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

                    return this.asEnumerable().any(predicate);
                },
                isEmpty: function isEmpty() {
                    return this.asEnumerable().isEmpty();
                },
                sequenceEqual: function sequenceEqual(other) {
                    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;

                    return this.asEnumerable().sequenceEqual(other, comparer);
                },
                first: function first() {
                    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

                    return this.asEnumerable().first(predicate);
                },
                firstOrDefault: function firstOrDefault(defaultValue) {
                    var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

                    return this.asEnumerable().firstOrDefault(defaultValue, predicate);
                },
                last: function last() {
                    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

                    return this.asEnumerable().last(predicate);
                },
                lastOrDefault: function lastOrDefault(defaultValue) {
                    var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

                    return this.asEnumerable().lastOrDefault(defaultValue, predicate);
                },
                single: function single() {
                    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

                    return this.asEnumerable().single(predicate);
                },
                singleOrDefault: function singleOrDefault(defaultValue) {
                    var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

                    return this.asEnumerable().singleOrDefault(defaultValue, predicate);
                },
                count: function count() {
                    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

                    return this.asEnumerable().count(predicate);
                },
                sum: function sum() {
                    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

                    return this.asEnumerable().sum(predicate);
                },
                max: function max() {
                    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
                    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;

                    return this.asEnumerable().max(selector, comparer);
                },
                min: function min() {
                    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
                    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;

                    return this.asEnumerable().min(selector, comparer);
                },
                average: function average() {
                    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

                    return this.asEnumerable().average(predicate);
                },
                aggregate: function aggregate(seed, func) {
                    var selector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;

                    return this.asEnumerable().aggregate(seed, func, selector);
                },
                contains: function contains(value) {
                    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;

                    return this.asEnumerable().contains(value, comparer);
                },
                indexOf: function indexOf(value) {
                    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

                    return this.asEnumerable().indexOf(value, start, comparer);
                },
                findIndex: function findIndex(predicate) {
                    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

                    return this.asEnumerable().findIndex(predicate, start);
                },
                lastIndexOf: function lastIndexOf(value) {
                    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

                    return this.asEnumerable().lastIndexOf(value, start, comparer);
                },
                findLastIndex: function findLastIndex(predicate) {
                    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

                    return this.asEnumerable().findLastIndex(predicate, start);
                },
                reverse: function reverse() {
                    return this.asEnumerable().reverse();
                },
                zip: function zip(other, resultSelector) {
                    return this.asEnumerable().zip(other, resultSelector);
                },
                toArray: function toArray() {
                    return this.asEnumerable().toArray();
                },
                toObject: function toObject() {
                    var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKeySelector;
                    var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultValueSelector;
                    var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

                    return this.asEnumerable().toDictionary(keySelector, elementSelector, comparer).toObject();
                },
                forEach: function forEach() {
                    var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultAction;

                    return this.asEnumerable().forEach(action);
                }
            });
            if (type !== 'string') {
                defineProperties(prototype, {
                    concat: function concat() {
                        var other = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

                        return this.asEnumerable().concat(other);
                    }
                });
            }
            if (type !== 'object') {
                defineProperties(prototype, {
                    toDictionary: function toDictionary() {
                        var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
                        var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
                        var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

                        return this.asEnumerable().toDictionary(keySelector, elementSelector, comparer);
                    },
                    toLookup: function toLookup() {
                        var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
                        var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
                        var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

                        return this.asEnumerable().toLookup(keySelector, elementSelector, comparer);
                    }
                });
            } else {
                defineProperties(prototype, {
                    toDictionary: function toDictionary() {
                        var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKeySelector;
                        var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultValueSelector;
                        var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

                        return this.asEnumerable().toDictionary(keySelector, elementSelector, comparer);
                    },
                    toLookup: function toLookup() {
                        var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKeySelector;
                        var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultValueSelector;
                        var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

                        return this.asEnumerable().toLookup(keySelector, elementSelector, comparer);
                    }
                });
            }
        }
    }, {
        key: 'getEnumerator',
        value: function getEnumerator(enumerable) {
            return new IEnumerator(enumerable);
        }
    }, {
        key: 'repeat',
        value: function repeat(element) {
            var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            return new RepeatEnumerable(element, count);
        }
    }, {
        key: 'range',
        value: function range(start, count) {
            return new RangeEnumerable(start, count);
        }
    }, {
        key: 'empty',
        value: function empty() {
            return new EmptyEnumerable();
        }
    }, {
        key: 'asEnumerable',
        value: function asEnumerable(object) {
            return object.asEnumerable ? object.asEnumerable() : new IteratorEnumerable(object);
        }
    }, {
        key: 'toArray',
        value: function toArray(source) {
            var array = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = source[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var element = _step.value;

                    array.push(element);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return array;
        }
    }, {
        key: 'toDictionary',
        value: function toDictionary(source) {
            var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
            var elementSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
            var comparer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultEqualityComparer;

            var dictionary = new Dictionary(),
                index = 0;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = source[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var element = _step2.value;

                    var key = keySelector(element, index);
                    if (dictionary.has(key, comparer)) {
                        throw KeysForMultiElementsException;
                    } else {
                        dictionary.set(key, elementSelector(element, index), comparer);
                    }
                    index++;
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return dictionary;
        }
    }, {
        key: 'toLookup',
        value: function toLookup(source) {
            var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
            var elementSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
            var comparer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultEqualityComparer;

            var lookup = new Lookup(),
                index = 0;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = source[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var element = _step3.value;

                    var key = keySelector(element, index);
                    if (lookup.has(key, comparer)) {
                        lookup.get(key, comparer).push(elementSelector(element, index));
                    } else {
                        lookup.set(key, [elementSelector(element, index)], comparer);
                    }
                    index++;
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return lookup;
        }
    }, {
        key: 'where',
        value: function where(source) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

            return new WhereEnumerable(source, predicate);
        }
    }, {
        key: 'select',
        value: function select(source) {
            var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;

            return new SelectEnumerable(source, selector);
        }
    }, {
        key: 'concat',
        value: function concat(source) {
            var other = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            return new ConcatEnumerable(source, other);
        }
    }, {
        key: 'distinct',
        value: function distinct(source) {
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;

            return new DistinctEnumerable(source, comparer);
        }
    }, {
        key: 'except',
        value: function except(source, other) {
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

            return new ExceptEnumerable(source, other, comparer);
        }
    }, {
        key: 'union',
        value: function union(source, other) {
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

            return new UnionEnumerable(source, other, comparer);
        }
    }, {
        key: 'intersect',
        value: function intersect(source, other) {
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

            return new IntersectEnumerable(source, other, comparer);
        }
    }, {
        key: 'ofType',
        value: function ofType(source, type) {
            return new OfTypeEnumerable(source, type);
        }
    }, {
        key: 'skip',
        value: function skip(source, count) {
            return new SkipEnumerable(source, count);
        }
    }, {
        key: 'skipWhile',
        value: function skipWhile(source) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

            return new SkipWhileEnumerable(source, predicate);
        }
    }, {
        key: 'take',
        value: function take(source, count) {
            return new TakeEnumerable(source, count);
        }
    }, {
        key: 'takeWhile',
        value: function takeWhile(source) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

            return new TakeWhileEnumerable(source, predicate);
        }
    }, {
        key: 'orderBy',
        value: function orderBy(source) {
            var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;

            return new OrderByEnumerable(source, keySelector, comparer);
        }
    }, {
        key: 'orderByDescending',
        value: function orderByDescending(source) {
            var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;

            return new OrderByDescendingEnumerable(source, keySelector, comparer);
        }
    }, {
        key: 'thenBy',
        value: function thenBy(orderedSource) {
            var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;

            if (orderedSource instanceof IOrderedEnumerable) {
                return new ThenByEnumerable(orderedSource, keySelector, comparer);
            } else {
                return new OrderByEnumerable(orderedSource, keySelector, comparer);
            }
        }
    }, {
        key: 'thenByDescending',
        value: function thenByDescending(orderedSource) {
            var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;

            if (orderedSource instanceof IOrderedEnumerable) {
                return new ThenByDescendingEnumerable(orderedSource, keySelector, comparer);
            } else {
                return new OrderByDescendingEnumerable(orderedSource, keySelector, comparer);
            }
        }
    }, {
        key: 'groupBy',
        value: function groupBy(source) {
            var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
            var elementSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
            var resultSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultGroupResultSelector;
            var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;

            return new GroupingEnumerable(source, keySelector, elementSelector, resultSelector, comparer);
        }
    }, {
        key: 'selectMany',
        value: function selectMany(source) {
            var collectionSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
            var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;

            return new SelectManyEnumerable(source, collectionSelector, resultSelector);
        }
    }, {
        key: 'join',
        value: function join(outer, inner) {
            var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
            var outerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
            var innerKeySelector = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultSelector;
            var comparer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultEqualityComparer;

            if (typeof resultSelector === 'undefined') {
                return core.array$join.call(outer, inner);
            } else {
                return new JoinEnumerable(outer, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
            }
        }
    }, {
        key: 'groupJoin',
        value: function groupJoin(outer, inner, resultSelector) {
            var outerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
            var innerKeySelector = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultSelector;
            var comparer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultEqualityComparer;

            return new GroupJoinEnumerable(outer, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
        }
    }, {
        key: 'reverse',
        value: function reverse(source) {
            return new ReverseEnumerable(source);
        }
    }, {
        key: 'zip',
        value: function zip(source, other, resultSelector) {
            return new ZipEnumerable(source, other, resultSelector);
        }
    }, {
        key: 'defaultIfEmpty',
        value: function defaultIfEmpty(source, defaultValue) {
            return Enumerable.isEmpty(source) ? new SingleEnumerable(defaultValue) : source;
        }
    }, {
        key: 'all',
        value: function all(source) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

            var index = 0;
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = source[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var element = _step4.value;

                    if (!predicate(element, index++)) {
                        return false;
                    }
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            return true;
        }
    }, {
        key: 'any',
        value: function any(source) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

            var index = 0;
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = source[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var element = _step5.value;

                    if (predicate(element, index++)) {
                        return true;
                    }
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            return false;
        }
    }, {
        key: 'isEmpty',
        value: function isEmpty(source) {
            return !Enumerable.any(source);
        }
    }, {
        key: 'sequenceEqual',
        value: function sequenceEqual(source, other) {
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

            var sourceIterator = source[Symbol.iterator]();
            var otherIterator = other[Symbol.iterator]();
            var sourceElement = void 0,
                otherElement = void 0;
            do {
                sourceElement = sourceIterator.next();
                otherElement = otherIterator.next();
                if (sourceElement.done != otherElement.done) {
                    return false;
                } else if (!comparer(sourceElement.value, otherElement.value)) {
                    return false;
                }
            } while (!(sourceElement.done && otherElement.done));
            return true;
        }
    }, {
        key: 'first',
        value: function first(source) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

            var index = 0;
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = source[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var element = _step6.value;

                    if (predicate(element, index++)) {
                        return element;
                    }
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }

            throw NoSuchElementsException;
        }
    }, {
        key: 'firstOrDefault',
        value: function firstOrDefault(source, defaultValue) {
            var predicate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPredicate;

            var index = 0;
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
                for (var _iterator7 = source[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                    var element = _step7.value;

                    if (predicate(element, index++)) {
                        return element;
                    }
                }
            } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
                        _iterator7.return();
                    }
                } finally {
                    if (_didIteratorError7) {
                        throw _iteratorError7;
                    }
                }
            }

            return defaultValue;
        }
    }, {
        key: 'last',
        value: function last(source) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

            var last = void 0,
                has = false,
                index = 0;
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
                for (var _iterator8 = source[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                    var element = _step8.value;

                    if (predicate(element, index++)) {
                        last = element;
                        has = true;
                    }
                }
            } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion8 && _iterator8.return) {
                        _iterator8.return();
                    }
                } finally {
                    if (_didIteratorError8) {
                        throw _iteratorError8;
                    }
                }
            }

            if (has) {
                return last;
            } else {
                throw NoSuchElementsException;
            }
        }
    }, {
        key: 'lastOrDefault',
        value: function lastOrDefault(source, defaultValue) {
            var predicate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPredicate;

            var last = void 0,
                has = false,
                index = 0;
            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
                for (var _iterator9 = source[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                    var element = _step9.value;

                    if (predicate(element, index++)) {
                        last = element;
                        has = true;
                    }
                }
            } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion9 && _iterator9.return) {
                        _iterator9.return();
                    }
                } finally {
                    if (_didIteratorError9) {
                        throw _iteratorError9;
                    }
                }
            }

            if (has) {
                return last;
            } else {
                return defaultValue;
            }
        }
    }, {
        key: 'single',
        value: function single(source) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

            var single = void 0,
                count = 0,
                index = 0;
            var _iteratorNormalCompletion10 = true;
            var _didIteratorError10 = false;
            var _iteratorError10 = undefined;

            try {
                for (var _iterator10 = source[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                    var element = _step10.value;

                    if (predicate(element, index++)) {
                        single = element;
                        count++;
                        if (count >= 2) {
                            break;
                        }
                    }
                }
            } catch (err) {
                _didIteratorError10 = true;
                _iteratorError10 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion10 && _iterator10.return) {
                        _iterator10.return();
                    }
                } finally {
                    if (_didIteratorError10) {
                        throw _iteratorError10;
                    }
                }
            }

            if (count == 1) {
                return single;
            } else if (count == 0) {
                throw NoSuchElementsException;
            } else {
                throw TooManyElementsException;
            }
        }
    }, {
        key: 'singleOrDefault',
        value: function singleOrDefault(source, defaultValue) {
            var predicate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPredicate;

            var single = void 0,
                count = 0,
                index = 0;
            var _iteratorNormalCompletion11 = true;
            var _didIteratorError11 = false;
            var _iteratorError11 = undefined;

            try {
                for (var _iterator11 = source[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                    var element = _step11.value;

                    if (predicate(element, index++)) {
                        single = element;
                        count++;
                        if (count >= 2) {
                            break;
                        }
                    }
                }
            } catch (err) {
                _didIteratorError11 = true;
                _iteratorError11 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion11 && _iterator11.return) {
                        _iterator11.return();
                    }
                } finally {
                    if (_didIteratorError11) {
                        throw _iteratorError11;
                    }
                }
            }

            if (count == 1) {
                return single;
            } else if (count == 0) {
                return defaultValue;
            } else {
                throw TooManyElementsException;
            }
        }
    }, {
        key: 'count',
        value: function count(source) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

            var count = 0,
                index = 0;
            var _iteratorNormalCompletion12 = true;
            var _didIteratorError12 = false;
            var _iteratorError12 = undefined;

            try {
                for (var _iterator12 = source[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                    var element = _step12.value;

                    if (predicate(element, index++)) {
                        count++;
                    }
                }
            } catch (err) {
                _didIteratorError12 = true;
                _iteratorError12 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion12 && _iterator12.return) {
                        _iterator12.return();
                    }
                } finally {
                    if (_didIteratorError12) {
                        throw _iteratorError12;
                    }
                }
            }

            return count;
        }
    }, {
        key: 'aggregate',
        value: function aggregate(source, seed, func) {
            var resultSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;

            var index = 0;
            var _iteratorNormalCompletion13 = true;
            var _didIteratorError13 = false;
            var _iteratorError13 = undefined;

            try {
                for (var _iterator13 = source[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                    var element = _step13.value;

                    seed = func(seed, element, index++);
                }
            } catch (err) {
                _didIteratorError13 = true;
                _iteratorError13 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion13 && _iterator13.return) {
                        _iterator13.return();
                    }
                } finally {
                    if (_didIteratorError13) {
                        throw _iteratorError13;
                    }
                }
            }

            return resultSelector(seed);
        }
    }, {
        key: 'sum',
        value: function sum(source) {
            var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;

            var sum = 0,
                index = 0;
            var _iteratorNormalCompletion14 = true;
            var _didIteratorError14 = false;
            var _iteratorError14 = undefined;

            try {
                for (var _iterator14 = source[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                    var element = _step14.value;

                    sum += parseFloat(selector(element, index++));
                }
            } catch (err) {
                _didIteratorError14 = true;
                _iteratorError14 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion14 && _iterator14.return) {
                        _iterator14.return();
                    }
                } finally {
                    if (_didIteratorError14) {
                        throw _iteratorError14;
                    }
                }
            }

            return sum;
        }
    }, {
        key: 'max',
        value: function max(source) {
            var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;

            var max = false,
                first = true,
                index = 0;
            var _iteratorNormalCompletion15 = true;
            var _didIteratorError15 = false;
            var _iteratorError15 = undefined;

            try {
                for (var _iterator15 = source[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                    var element = _step15.value;

                    element = selector(element, index++);
                    if (first) {
                        max = element;
                    } else {
                        max = comparer(max, element) > 0 ? max : element;
                    }
                }
            } catch (err) {
                _didIteratorError15 = true;
                _iteratorError15 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion15 && _iterator15.return) {
                        _iterator15.return();
                    }
                } finally {
                    if (_didIteratorError15) {
                        throw _iteratorError15;
                    }
                }
            }

            if (first) {
                throw NoSuchElementsException;
            } else {
                return max;
            }
        }
    }, {
        key: 'min',
        value: function min(source) {
            var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;

            var min = false,
                first = true,
                index = 0;
            var _iteratorNormalCompletion16 = true;
            var _didIteratorError16 = false;
            var _iteratorError16 = undefined;

            try {
                for (var _iterator16 = source[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                    var element = _step16.value;

                    element = selector(element, index++);
                    if (first) {
                        min = element;
                    } else {
                        min = comparer(min, element) < 0 ? min : element;
                    }
                }
            } catch (err) {
                _didIteratorError16 = true;
                _iteratorError16 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion16 && _iterator16.return) {
                        _iterator16.return();
                    }
                } finally {
                    if (_didIteratorError16) {
                        throw _iteratorError16;
                    }
                }
            }

            if (first) {
                throw NoSuchElementsException;
            } else {
                return min;
            }
        }
    }, {
        key: 'average',
        value: function average(source) {
            var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;

            var sum = 0,
                count = 0,
                index = 0;
            var _iteratorNormalCompletion17 = true;
            var _didIteratorError17 = false;
            var _iteratorError17 = undefined;

            try {
                for (var _iterator17 = source[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                    var element = _step17.value;

                    sum += parseFloat(selector(element, index++));
                    count++;
                }
            } catch (err) {
                _didIteratorError17 = true;
                _iteratorError17 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion17 && _iterator17.return) {
                        _iterator17.return();
                    }
                } finally {
                    if (_didIteratorError17) {
                        throw _iteratorError17;
                    }
                }
            }

            if (count != 0) {
                return sum / count;
            } else {
                throw NoSuchElementsException;
            }
        }
    }, {
        key: 'contains',
        value: function contains(source, value) {
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;
            var _iteratorNormalCompletion18 = true;
            var _didIteratorError18 = false;
            var _iteratorError18 = undefined;

            try {
                for (var _iterator18 = source[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                    var element = _step18.value;

                    if (comparer(element, value)) {
                        return true;
                    }
                }
            } catch (err) {
                _didIteratorError18 = true;
                _iteratorError18 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion18 && _iterator18.return) {
                        _iterator18.return();
                    }
                } finally {
                    if (_didIteratorError18) {
                        throw _iteratorError18;
                    }
                }
            }

            return false;
        }
    }, {
        key: 'elementAt',
        value: function elementAt(source, index) {
            if (index >= 0) {
                var _iteratorNormalCompletion19 = true;
                var _didIteratorError19 = false;
                var _iteratorError19 = undefined;

                try {
                    for (var _iterator19 = source[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
                        var element = _step19.value;

                        if (index-- == 0) {
                            return element;
                        }
                    }
                } catch (err) {
                    _didIteratorError19 = true;
                    _iteratorError19 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion19 && _iterator19.return) {
                            _iterator19.return();
                        }
                    } finally {
                        if (_didIteratorError19) {
                            throw _iteratorError19;
                        }
                    }
                }
            }
            throw OutOfRangeException;
        }
    }, {
        key: 'elementAtOrDefault',
        value: function elementAtOrDefault(source, index, defaultValue) {
            if (index >= 0) {
                var _iteratorNormalCompletion20 = true;
                var _didIteratorError20 = false;
                var _iteratorError20 = undefined;

                try {
                    for (var _iterator20 = source[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                        var element = _step20.value;

                        if (index-- == 0) {
                            return element;
                        }
                    }
                } catch (err) {
                    _didIteratorError20 = true;
                    _iteratorError20 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion20 && _iterator20.return) {
                            _iterator20.return();
                        }
                    } finally {
                        if (_didIteratorError20) {
                            throw _iteratorError20;
                        }
                    }
                }
            }
            return defaultValue;
        }
    }, {
        key: 'indexOf',
        value: function indexOf(source, value) {
            var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var comparer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultEqualityComparer;

            var index = 0;
            var _iteratorNormalCompletion21 = true;
            var _didIteratorError21 = false;
            var _iteratorError21 = undefined;

            try {
                for (var _iterator21 = source[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
                    var element = _step21.value;

                    if (index >= start && comparer(element, value)) {
                        return index;
                    }
                    index++;
                }
            } catch (err) {
                _didIteratorError21 = true;
                _iteratorError21 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion21 && _iterator21.return) {
                        _iterator21.return();
                    }
                } finally {
                    if (_didIteratorError21) {
                        throw _iteratorError21;
                    }
                }
            }

            return -1;
        }
    }, {
        key: 'findIndex',
        value: function findIndex(source, predicate) {
            var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            var index = 0;
            var _iteratorNormalCompletion22 = true;
            var _didIteratorError22 = false;
            var _iteratorError22 = undefined;

            try {
                for (var _iterator22 = source[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
                    var element = _step22.value;

                    if (index >= start && predicate(element, index)) {
                        return index;
                    }
                    index++;
                }
            } catch (err) {
                _didIteratorError22 = true;
                _iteratorError22 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion22 && _iterator22.return) {
                        _iterator22.return();
                    }
                } finally {
                    if (_didIteratorError22) {
                        throw _iteratorError22;
                    }
                }
            }

            return -1;
        }
    }, {
        key: 'lastIndexOf',
        value: function lastIndexOf(source, value) {
            var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var comparer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultEqualityComparer;

            var index = 0,
                lastIndex = -1;
            var _iteratorNormalCompletion23 = true;
            var _didIteratorError23 = false;
            var _iteratorError23 = undefined;

            try {
                for (var _iterator23 = source[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
                    var element = _step23.value;

                    if (index >= start && comparer(element, value)) {
                        lastIndex = index;
                    }
                    index++;
                }
            } catch (err) {
                _didIteratorError23 = true;
                _iteratorError23 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion23 && _iterator23.return) {
                        _iterator23.return();
                    }
                } finally {
                    if (_didIteratorError23) {
                        throw _iteratorError23;
                    }
                }
            }

            return lastIndex;
        }
    }, {
        key: 'findLastIndex',
        value: function findLastIndex(source, predicate) {
            var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            var index = 0,
                lastIndex = -1;
            var _iteratorNormalCompletion24 = true;
            var _didIteratorError24 = false;
            var _iteratorError24 = undefined;

            try {
                for (var _iterator24 = source[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
                    var element = _step24.value;

                    if (index >= start && predicate(element, index)) {
                        lastIndex = index;
                    }
                    index++;
                }
            } catch (err) {
                _didIteratorError24 = true;
                _iteratorError24 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion24 && _iterator24.return) {
                        _iterator24.return();
                    }
                } finally {
                    if (_didIteratorError24) {
                        throw _iteratorError24;
                    }
                }
            }

            return lastIndex;
        }
    }, {
        key: 'forEach',
        value: function forEach(source) {
            var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultAction;

            var index = 0;
            var _iteratorNormalCompletion25 = true;
            var _didIteratorError25 = false;
            var _iteratorError25 = undefined;

            try {
                for (var _iterator25 = source[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
                    var element = _step25.value;

                    action(element, index++);
                }
            } catch (err) {
                _didIteratorError25 = true;
                _iteratorError25 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion25 && _iterator25.return) {
                        _iterator25.return();
                    }
                } finally {
                    if (_didIteratorError25) {
                        throw _iteratorError25;
                    }
                }
            }
        }
    }, {
        key: 'arrayComparer',
        value: function arrayComparer(array) {
            var last = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            return _arrayComparer(array, last);
        }
    }, {
        key: 'predicateComparer',
        value: function predicateComparer(predicateArray) {
            var last = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            return _predicateComparer(predicateArray, last);
        }
    }]);

    return Enumerable;
}();

;

module.exports = Enumerable;

var IEnumerator = require('./IEnumerator');

var RepeatEnumerable = require('./enumerables/RepeatEnumerable');
var RangeEnumerable = require('./enumerables/RangeEnumerable');
var EmptyEnumerable = require('./enumerables/EmptyEnumerable');
var IteratorEnumerable = require('./enumerables/IteratorEnumerable');
var WhereEnumerable = require('./enumerables/WhereEnumerable');
var SelectEnumerable = require('./enumerables/SelectEnumerable');
var ConcatEnumerable = require('./enumerables/ConcatEnumerable');
var DistinctEnumerable = require('./enumerables/DistinctEnumerable');
var ExceptEnumerable = require('./enumerables/ExceptEnumerable');
var UnionEnumerable = require('./enumerables/UnionEnumerable');
var IntersectEnumerable = require('./enumerables/IntersectEnumerable');
var OfTypeEnumerable = require('./enumerables/OfTypeEnumerable');
var SkipEnumerable = require('./enumerables/SkipEnumerable');
var SkipWhileEnumerable = require('./enumerables/SkipWhileEnumerable');
var TakeEnumerable = require('./enumerables/TakeEnumerable');
var TakeWhileEnumerable = require('./enumerables/TakeWhileEnumerable');
var IOrderedEnumerable = require('./enumerables/IOrderedEnumerable');
var OrderByEnumerable = require('./enumerables/OrderByEnumerable');
var OrderByDescendingEnumerable = require('./enumerables/OrderByDescendingEnumerable');
var ThenByEnumerable = require('./enumerables/ThenByEnumerable');
var ThenByDescendingEnumerable = require('./enumerables/ThenByDescendingEnumerable');
var GroupingEnumerable = require('./enumerables/GroupingEnumerable');
var SelectManyEnumerable = require('./enumerables/SelectManyEnumerable');
var JoinEnumerable = require('./enumerables/JoinEnumerable');
var GroupJoinEnumerable = require('./enumerables/GroupJoinEnumerable');
var ReverseEnumerable = require('./enumerables/ReverseEnumerable');
var ZipEnumerable = require('./enumerables/ZipEnumerable');
var SingleEnumerable = require('./enumerables/SingleEnumerable');
var Dictionary = require('./enumerables/Dictionary');
var Lookup = require('./enumerables/Lookup');