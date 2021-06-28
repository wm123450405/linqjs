'use strict';

const { asEnumerable, defineProperty } = require('./core/core');

const defaultPredicate = require('./methods/defaultPredicate');
const defaultFalsePredicate = require('./methods/defaultFalsePredicate');
const defaultSelector = require('./methods/defaultSelector');
const defaultSameComparer = require('./methods/defaultSameComparer');
const defaultEqualityComparer = require('./methods/defaultEqualityComparer');
const defaultStrictEqualityComparer = require('./methods/defaultStrictEqualityComparer');
const defaultComparer = require('./methods/defaultComparer');
const defaultResultSelector = require('./methods/defaultResultSelector');
const defaultJoinSelector = require('./methods/defaultJoinSelector');
const defaultKeySelector = require('./methods/defaultKeySelector');
const defaultValueSelector = require('./methods/defaultValueSelector');
const defaultParentSelector = require('./methods/defaultParentSelector');
const defaultIndexSelector = require('./methods/defaultIndexSelector');
const defaultChildrenSelector = require('./methods/defaultChildrenSelector');
const defaultChildrenSetter = require('./methods/defaultChildrenSetter');
const defaultValueSetter = require('./methods/defaultValueSetter');
const defaultAction = require('./methods/defaultAction');

const arrayComparer = require('./methods/arrayComparer');
const predicateComparer = require('./methods/predicateComparer');
const propertySetter = require('./methods/propertySetter');
const propertySelector = require('./methods/propertySelector');
const regexpPredicate = require('./methods/regexpPredicate');
const defaultExistsPredicate = require('./methods/defaultExistsPredicate');
const notPredicate = require('./methods/notPredicate');
const equalityPredicate = require('./methods/equalityPredicate');
const selectorPredicate = require('./methods/selectorPredicate');
const greaterComparer = require('./methods/greaterComparer');
const lessComparer = require('./methods/lessComparer');
const ignoreCaseComparer = require('./methods/ignoreCaseComparer');

const NoSuchElementsException = require('./core/exceptions/NoSuchElementsException');
const OutOfRangeException = require('./core/exceptions/OutOfRangeException');
const TooManyElementsException = require('./core/exceptions/TooManyElementsException');
const KeysForMultiElementsException = require('./core/exceptions/KeysForMultiElementsException');
const NeedExecuteBeforeException = require('./core/exceptions/NeedExecuteBeforeException');
const PluginRepeatException = require('./core/exceptions/PluginRepeatException');
const PropertyExpressionInvalidException = require('./core/exceptions/PropertyExpressionInvalidException');
const InvalidFunctionException = require('./core/exceptions/InvalidFunctionException');
const NotAncestorOfException = require('./core/exceptions/NotAncestorOfException');

const IComparable = require('./core/IComparable');
const IEquatable = require('./core/IEquatable');

const Enumerable = function(source, childrenSelector, valueSelector = defaultValueSelector) {
    return asEnumerable(source, childrenSelector, valueSelector);
};
Enumerable.getEnumerator = function(enumerable) {
    return asEnumerable(enumerable).getEnumerator();
};
Enumerable.getIterator = function(enumerable) {
    return asEnumerable(enumerable).getIterator();
};
Enumerable.repeat = function(element, count = 0) {
    return new RepeatEnumerable(element, count);
};
Enumerable.range = function(start, count, step = 1) {
    return new RangeEnumerable(start, count, step);
};
Enumerable.between = function(start, end, step = 1) {
    return new BetweenEnumerable(start, end, step);
};
Enumerable.generate = function(generate, count = 0) {
    return new GenerateEnumerable(generate, count);
};
Enumerable.empty = function() {
    return new EmptyEnumerable();
};
Enumerable.asEnumerable = function(object, childrenSelector, valueSelector = defaultValueSelector) {
    return asEnumerable(object, childrenSelector, valueSelector);
};
Enumerable.from = function(object, childrenSelector, valueSelector = defaultValueSelector) {
    return asEnumerable(object, childrenSelector, valueSelector);
};
Enumerable.toArray = function(source) {
    return asEnumerable(source).toArray();
};
Enumerable.toDictionary = function(source, keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultSameComparer) {
    return asEnumerable(source).toDictionary(keySelector, elementSelector, comparer);
};
Enumerable.toLookup = function(source, keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultSameComparer) {
    return asEnumerable(source).toLookup(keySelector, elementSelector, comparer);
};
Enumerable.toPreOrder = function(source) {
    return asEnumerable(source).toPreOrder();
};
Enumerable.toInOrder = function(source) {
    return asEnumerable(source).toInOrder();
};
Enumerable.toPostOrder = function(source) {
    return asEnumerable(source).toPostOrder();
};
Enumerable.where = function(source, predicate = defaultPredicate) {
    return asEnumerable(source).where(predicate);
};
Enumerable.select = function(source, selector = defaultSelector) {
    return asEnumerable(source).select(selector);
};
Enumerable.distinct = function(source, comparer = defaultEqualityComparer) {
    return asEnumerable(source).distinct(comparer);
};
Enumerable.except = function(source, other, comparer = defaultEqualityComparer) {
    return asEnumerable(source).except(other, comparer);
};
Enumerable.union = function(source, other, comparer = defaultEqualityComparer) {
    return asEnumerable(source).union(other, comparer);
};
Enumerable.intersect = function(source, other, comparer = defaultEqualityComparer) {
    return asEnumerable(source).intersect(other, comparer);
};
Enumerable.ofType = function(source, type) {
    return asEnumerable(source).ofType(type);
};
Enumerable.skip = function(source, count) {
    return asEnumerable(source).skip(count);
};
Enumerable.skipWhile = function(source, predicate = defaultPredicate) {
    return asEnumerable(source).skipWhile(predicate);
};
Enumerable.skipSame = function(source, comparer = defaultSameComparer) {
    return asEnumerable(source).skipSame(comparer);
};
Enumerable.skipProportion = function(source, proportion = 0) {
    return asEnumerable(source).skipProportion(proportion);
};
Enumerable.take = function(source, count) {
    return asEnumerable(source).take(count);
};
Enumerable.takeWhile = function(source, predicate = defaultPredicate) {
    return asEnumerable(source).takeWhile(predicate);
};
Enumerable.takeSame = function(source, comparer = defaultSameComparer) {
    return asEnumerable(source).takeSame(comparer);
};
Enumerable.takeProportion = function(source, proportion = 0) {
    return asEnumerable(source).takeProportion(proportion);
};
Enumerable.orderBy = Enumerable.sorted = function(source, keySelector = defaultSelector, comparer = defaultComparer) {
    return asEnumerable(source).orderBy(keySelector, comparer);
};
Enumerable.orderByDescending = function(source, keySelector = defaultSelector, comparer = defaultComparer) {
    return asEnumerable(source).orderByDescending(keySelector, comparer);
};
Enumerable.thenBy = function(orderedSource, keySelector = defaultSelector, comparer = defaultComparer) {
    if (orderedSource instanceof IOrderedEnumerable) {
        return orderedSource.thenBy(keySelector, comparer);
    } else {
        return this.orderBy(orderedSource, keySelector, comparer);
    }
};
Enumerable.thenByDescending = function(orderedSource, keySelector = defaultSelector, comparer = defaultComparer) {
    if (orderedSource instanceof IOrderedEnumerable) {
        return orderedSource.thenByDescending(keySelector, comparer);
    } else {
        return this.orderByDescending(orderedSource, keySelector, comparer);
    }
};
Enumerable.groupBy = function(source, keySelector = defaultSelector, elementSelector = defaultSelector, resultSelector = defaultResultSelector, comparer = defaultEqualityComparer) {
    return asEnumerable(source).groupBy(keySelector, elementSelector, resultSelector, comparer);
};
Enumerable.selectMany = Enumerable.flatMap = Enumerable.flatten = function(source, collectionSelector = defaultSelector, resultSelector = defaultResultSelector) {
    return asEnumerable(source).selectMany(collectionSelector, resultSelector);
};
Enumerable.join = function(outer, inner, resultSelector = defaultJoinSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
    if (arguments.length <= 2) {
        return asEnumerable(outer).join(inner);
    } else {
        return asEnumerable(outer).join(inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
    }
};
Enumerable.innerJoin = Enumerable.joining = function(outer, inner, resultSelector = defaultJoinSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
    return asEnumerable(outer).innerJoin(inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
};
Enumerable.leftJoin = function(outer, inner, resultSelector = defaultJoinSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
    return asEnumerable(outer).leftJoin(inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
};
Enumerable.rightJoin = function(outer, inner, resultSelector = defaultJoinSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
    return asEnumerable(outer).rightJoin(inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
};
Enumerable.groupJoin = function(outer, inner, resultSelector = defaultJoinSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
    return asEnumerable(outer).groupJoin(inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
};
Enumerable.reverse = function(source) {
    return asEnumerable(source).reverse();
};
Enumerable.zip = function(source, other, resultSelector = defaultResultSelector) {
    return asEnumerable(source).zip(other, resultSelector);
};
Enumerable.every = function(source, callback, thisArg) {
    return asEnumerable(source).every(callback, thisArg);
};
Enumerable.find = function(source, callback, thisArg) {
    return asEnumerable(source).find(callback, thisArg);
};
Enumerable.includes = function(source, element, start = 0) {
    return asEnumerable(source).includes(element, start);
};
Enumerable.map = function(source, callback, thisArg) {
    return asEnumerable(source).map(callback, thisArg);
};
Enumerable.filter = function(source, callback, thisArg) {
    return asEnumerable(source).filter(callback, thisArg);
};
Enumerable.concat = function(source, ...others) {
    return asEnumerable(source).concat(...others);
};
Enumerable.pop = function(source) {
    return asEnumerable(source).pop();
};
Enumerable.push = function(source, ...values) {
    return asEnumerable(source).push(...values);
};
Enumerable.shift = function(source) {
    return asEnumerable(source).shift();
};
Enumerable.unshift = function(source, ...values) {
    return asEnumerable(source).unshift(...values);
};
Enumerable.reduce = function(source, callback, initialValue) {
    return asEnumerable(source).reduce(callback, initialValue);
};
Enumerable.reduceRight = function(source, callback, initialValue) {
    return asEnumerable(source).reduceRight(callback, initialValue);
};
Enumerable.some = function(source, callback, thisArg) {
    return asEnumerable(source).some(callback, thisArg);
};
Enumerable.slice = function(source, start = 0, end = Infinity) {
    return asEnumerable(source).slice(start, end);
};
Enumerable.splice = function(source, start, count, ...values) {
    return asEnumerable(source).splice(start, count, ...values);
};
Enumerable.fill = function(source, value, start = 0, end = Infinity) {
    return asEnumerable(source).fill(value, start, end);
};
Enumerable.sort = function(source, comparer = defaultComparer) {
    return asEnumerable(source).sort(comparer);
};
Enumerable.copyWithin = function(source, target = 0, start = 0, end = Infinity) {
    return asEnumerable(source).copyWithin(target, start, end);
};
Enumerable.defaultIfEmpty = function(source, ...defaultValues) {
    return asEnumerable(source).defaultIfEmpty(...defaultValues);
};
Enumerable.all = Enumerable.allMatch = function(source, predicate = defaultPredicate) {
    return asEnumerable(source).all(predicate);
};
Enumerable.any = Enumerable.anyMatch = function(source, predicate = defaultPredicate) {
    return asEnumerable(source).any(predicate);
};
Enumerable.isEmpty = function(source) {
    return asEnumerable(source).isEmpty();
};
Enumerable.sequenceEqual = function(source, other, comparer = defaultEqualityComparer) {
    return asEnumerable(source).sequenceEqual(other, comparer);
};
Enumerable.first = function(source, predicate = defaultPredicate) {
    return asEnumerable(source).first(predicate);
};
Enumerable.firstOrDefault = function(source, defaultValue, predicate = defaultPredicate) {
    return asEnumerable(source).firstOrDefault(defaultValue, predicate);
};
Enumerable.last = function(source, predicate = defaultPredicate) {
    return asEnumerable(source).last(predicate);
};
Enumerable.lastOrDefault = function(source, defaultValue, predicate = defaultPredicate) {
    return asEnumerable(source).lastOrDefault(defaultValue, predicate);
};
Enumerable.single = function(source, predicate = defaultPredicate) {
    return asEnumerable(source).single(predicate);
};
Enumerable.singleOrDefault = function(source, defaultValue, predicate = defaultPredicate) {
    return asEnumerable(source).singleOrDefault(defaultValue, predicate);
};
Enumerable.count = function(source, predicate = defaultPredicate) {
    return asEnumerable(source).count(predicate);
};
Enumerable.proportion = function(source, predicate = defaultPredicate) {
    return asEnumerable(source).proportion(predicate);
};
Enumerable.aggregate = function(source, seed, func, resultSelector = defaultSelector) {
    return asEnumerable(source).aggregate(seed, func, resultSelector);
};
Enumerable.sum = function(source, selector = defaultSelector) {
    return asEnumerable(source).sum(selector);
};
Enumerable.product = function(source, selector = defaultSelector) {
    return asEnumerable(source).product(selector);
};
Enumerable.max = function(source, selector = defaultSelector, comparer = defaultComparer) {
    return asEnumerable(source).max(selector, comparer);
};
Enumerable.maxIndex = function(source, defaultValue, selector = defaultSelector, comparer = defaultComparer) {
    return asEnumerable(source).maxIndex(selector, comparer);
};
Enumerable.maxOrDefault = function(source, defaultValue, selector = defaultSelector, comparer = defaultComparer) {
    return asEnumerable(source).maxOrDefault(defaultValue, selector, comparer);
};
Enumerable.min = function(source, selector = defaultSelector, comparer = defaultComparer) {
    return asEnumerable(source).min(selector, comparer);
};
Enumerable.minIndex = function(source, selector = defaultSelector, comparer = defaultComparer) {
    return asEnumerable(source).minIndex(selector, comparer);
};
Enumerable.minOrDefault = function(source, defaultValue, selector = defaultSelector, comparer = defaultComparer) {
    return asEnumerable(source).minOrDefault(defaultValue, selector, comparer);
};
Enumerable.average = function(source, selector = defaultSelector) {
    return asEnumerable(source).average(selector);
};
Enumerable.contains = function(source, value, comparer = defaultEqualityComparer) {
    return asEnumerable(source).contains(value, comparer);
};
Enumerable.elementAt = function(source, index) {
    return asEnumerable(source).elementAt(index);
};
Enumerable.elementAtOrDefault = function(source, index, defaultValue) {
    return asEnumerable(source).elementAtOrDefault(index, defaultValue);
};
Enumerable.indexOf = function(source, value, start = 0, comparer = defaultStrictEqualityComparer) {
    return asEnumerable(source).indexOf(value, start, comparer);
};
Enumerable.findIndex = function(source, callback, thisArg) {
    return asEnumerable(source).findIndex(callback, thisArg);
};
Enumerable.findLast = function(source, callback, thisArg) {
    return asEnumerable(source).findLast(callback, thisArg);
};
Enumerable.lastIndexOf = function(source, value, start = Infinity, comparer = defaultStrictEqualityComparer) {
    return asEnumerable(source).lastIndexOf(value, start, comparer);
};
Enumerable.findLastIndex = function(source, callback, thisArg) {
    return asEnumerable(source).findLastIndex(callback, thisArg);
};
Enumerable.forEach = function(source, action = defaultAction, thisArg = undefined) {
    return asEnumerable(source).forEach(action, thisArg);
};
Enumerable.each = function(source, action = defaultAction) {
    return asEnumerable(source).each(action);
};
Enumerable.indices = function(source, indices) {
    return asEnumerable(source).indices(indices);
};
Enumerable.permutation = function(source, count, repeatable = false) {
    return asEnumerable(source).permutation(count, repeatable);
};
Enumerable.combination = function(source, count, repeatable = false) {
    return asEnumerable(source).combination(count, repeatable);
};
Enumerable.chunk = function(source, chunk, offset = 0) {
    return asEnumerable(source).chunk(chunk, offset);
};
Enumerable.split = function(source, splitPredicate = defaultFalsePredicate) {
    return asEnumerable(source).split(splitPredicate);
};
Enumerable.nearSplit = function(source, splitPredicate = defaultFalsePredicate) {
    return asEnumerable(source).nearSplit(splitPredicate);
};
Enumerable.leftPad = function(source, length, value) {
    return asEnumerable(source).leftPad(length, value);
};
Enumerable.rightPad = function(source, length, value) {
    return asEnumerable(source).rightPad(length, value);
};
Enumerable.rand = function(source, count = 0) {
    return asEnumerable(source).rand(count);
};
Enumerable.random = function(source) {
    return asEnumerable(source).random();
};
Enumerable.randomOrDefault = function(source, defaultValue) {
    return asEnumerable(source).randomOrDefault(defaultValue);
};
Enumerable.randomProbability = function(source, probabilitySelector) {
    return asEnumerable(source).randomProbability(probabilitySelector);
};
Enumerable.randomIndexProbability = function(source, probabilitySelector) {
    return asEnumerable(source).randomIndexProbability(probabilitySelector);
};
Enumerable.randomProbabilityOrDefault = function(source, defaultValue, probabilitySelector) {
    return asEnumerable(source).randomProbabilityOrDefault(defaultValue, probabilitySelector);
};
Enumerable.wipe = function(source, predicate = defaultPredicate, count = 0) {
    return asEnumerable(source).wipe(predicate, count);
};
Enumerable.nearBy = function(source, keySelector = defaultSelector, elementSelector = defaultSelector, resultSelector = defaultResultSelector, comparer = defaultEqualityComparer) {
    return asEnumerable(source).nearBy(keySelector, elementSelector, resultSelector, comparer);
};
Enumerable.combine = function(source, parentSelector = defaultParentSelector, keySelector = defaultKeySelector, valueSelector = defaultSelector, comparer = defaultEqualityComparer) {
    return asEnumerable(source).combine(parentSelector, keySelector, valueSelector, comparer);
};
Enumerable.separate = function(source, childrenSelector = defaultChildrenSelector, valueSelector = defaultValueSelector) {
    return asEnumerable(source).separate(childrenSelector, valueSelector);
};
Enumerable.isSub = function(source, other, comparer = defaultEqualityComparer) {
    return asEnumerable(source).isSub(other, comparer);
};
Enumerable.isSuper = function(source, other, comparer = defaultEqualityComparer) {
    return asEnumerable(source).isSuper(other, comparer);
};
Enumerable.symmetric = function(source, other, comparer = defaultEqualityComparer) {
    return asEnumerable(source).symmetric(other, comparer);
};
Enumerable.conflict = function(source, selector = defaultSelector, comparer = defaultEqualityComparer) {
    return asEnumerable(source).conflict(selector, comparer);
};
defineProperty(Enumerable, 'comparers', () => ({
    get default() {
        return defaultComparer;
    },
    get equality() {
        return defaultEqualityComparer;
    },
    get same() {
        return defaultSameComparer;
    },
    get strict() {
        return defaultStrictEqualityComparer;
    },
    array(array, last = false, comparer = defaultEqualityComparer) {
        return arrayComparer(array, last, comparer);
    },
    predicate(predicateArray, last = false) {
        return predicateComparer(predicateArray, last);
    },
    greater(greaterThen, comparer = defaultEqualityComparer) {
        return greaterComparer(greaterThen, comparer);
    },
    less(lessThen, comparer = defaultEqualityComparer) {
        return lessComparer(lessThen, comparer);
    },
    ignoreCase(selector = defaultSelector) {
        return ignoreCaseComparer(selector);
    }
}), true, true);
defineProperty(Enumerable, 'setters', () => ({
    get children() {
        return defaultChildrenSetter;
    },
    get value() {
        return defaultValueSetter;
    },
    property(property, ignoreInvalid = false) {
        return propertySetter(property, ignoreInvalid);
    }
}), true, true);
defineProperty(Enumerable, 'selectors', () => ({
    get default() {
        return defaultSelector;
    },
    get key() {
        return defaultKeySelector;
    },
    get value() {
        return defaultValueSelector;
    },
    get children() {
        return defaultChildrenSelector;
    },
    get parent() {
        return defaultParentSelector;
    },
    get result() {
        return defaultResultSelector;
    },
    get join() {
        return defaultJoinSelector;
    },
    get index() {
        return defaultIndexSelector;
    },
    property(property, ignoreInvalid = false) {
    	return propertySelector(property, ignoreInvalid);
    }
}), true, true);
defineProperty(Enumerable, 'actions', () => ({
    get default() {
        return defaultAction;
    }
}), true, true);
defineProperty(Enumerable, 'predicates', () => ({
    get default() {
        return defaultPredicate;
    },
    get exists() {
        return defaultExistsPredicate;
    },
    selector(selector, predicate = defaultExistsPredicate) {
        return selectorPredicate(selector, predicate);
    },
    not(predicate = defaultExistsPredicate) {
        return notPredicate(predicate);
    },
    equality(value, comparer = defaultEqualityComparer) {
        return equalityPredicate(value, comparer);
    },
    strict(value) {
        return equalityPredicate(value, defaultStrictEqualityComparer);
    },
    same(value) {
        return equalityPredicate(value, defaultSameComparer);
    },
    regexp(regexp, keySelector = defaultSelector) {
        return regexpPredicate(regexp, keySelector);
    }
}), true, true);
defineProperty(Enumerable, 'exceptions', () => ({
    get NoSuchElementsException() {
        return NoSuchElementsException;
    },
    get OutOfRangeException() {
        return OutOfRangeException;
    },
    get TooManyElementsException() {
        return TooManyElementsException;
    },
    get KeysForMultiElementsException() {
        return KeysForMultiElementsException;
    },
    get NeedExecuteBeforeException() {
        return NeedExecuteBeforeException;
    },
    get PropertyExpressionInvalidException() {
        return PropertyExpressionInvalidException;
    },
    get InvalidFunctionException() {
        return InvalidFunctionException;
    },
    get PluginRepeatException() {
        return PluginRepeatException;
    },
    get NotAncestorOfException() {
        return NotAncestorOfException;
    }
}), true, true);
defineProperty(Enumerable, 'IComparable', () => IComparable, true, true);
defineProperty(Enumerable, 'IEquatable', () => IEquatable, true, true);

module.exports = Enumerable;

const RepeatEnumerable = require('./enumerables/RepeatEnumerable');
const RangeEnumerable = require('./enumerables/RangeEnumerable');
const EmptyEnumerable = require('./enumerables/EmptyEnumerable');
const IOrderedEnumerable = require('./enumerables/IOrderedEnumerable');
const BetweenEnumerable = require('./enumerables/BetweenEnumerable');
const GenerateEnumerable = require('./enumerables/GenerateEnumerable');
