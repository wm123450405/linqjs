'use strict';

const core = require('./core/core');

const defaultPredicate = require('./methods/defaultPredicate');
const defaultSelector = require('./methods/defaultSelector');
const defaultSameComparer = require('./methods/defaultSameComparer');
const defaultEqualityComparer = require('./methods/defaultEqualityComparer');
const defaultStrictEqualityComparer = require('./methods/defaultStrictEqualityComparer');
const defaultComparer = require('./methods/defaultComparer');
const defaultGroupResultSelector = require('./methods/defaultGroupResultSelector');
const defaultKeySelector = require('./methods/defaultKeySelector');
const defaultValueSelector = require('./methods/defaultValueSelector');
const defaultAction = require('./methods/defaultAction');

const arrayComparer = require('./methods/arrayComparer');
const predicateComparer = require('./methods/predicateComparer');
const propertySelector = require('./methods/propertySelector');

const NoSuchElementsException = require('./core/exceptions/NoSuchElementsException');
const OutOfRangeException = require('./core/exceptions/OutOfRangeException');
const TooManyElementsException = require('./core/exceptions/TooManyElementsException');
const KeysForMultiElementsException = require('./core/exceptions/KeysForMultiElementsException');
const NeedExecuteBeforeException = require('./core/exceptions/NeedExecuteBeforeException');
const NotEnumerableException = require('./core/exceptions/NotEnumerableException');
const PluginRepeatException = require('./core/exceptions/PluginRepeatException');

const IComparable = require('./core/IComparable');
const IEquatable = require('./core/IEquatable');

const asIterable = value => {
	if (value[Symbol.iterator]) {
		return value;
	} else if (value.asEnumerable) {
		return value.asEnumerable();
	} else {
		throw new NotEnumerableException(value);
	}
};

const pluginComparer = (element, other) => element.name === other.name;

let _plugins = [];
let _extends = new Map();

const addExtends = (prototype, type) => {
	for (let [, prototypes] of _extends) {
		if (prototypes.has(prototype)) {
			return false;
		}
	}
	if (!_extends.has(type)) {
    	_extends.set(type, new Set());
    }
    _extends.get(type).add(prototype);
    return true;
};

const removeExtends = (prototype, type) => {
	if (_extends.has(type)) {
		if (_extends.get(type).has(prototype)) {
			_extends.get(type).delete(prototype);
			if (Enumerable.isEmpty(_extends.get(type))) {
				_extends.delete(type);
			}
			return true;
		}
	}
	return false;
};
const staticFunction = fn => function() {
	return fn.apply(Enumerable, arguments);
};
const memberFunction = name => function() {
	return Enumerable[name].apply(Enumerable, [this].concat(arguments));
};

const Enumerable = function(source) {
	return Enumerable.asEnumerable(source);
};
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
				for (let [type, prototypes] of _extends) {
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
};
Enumerable.removePlugins = function(...plugins) {
	for (let plugin of plugins) {
		if (core.getType(plugin) === core.types.String) {
			plugin = { name: plugin };
		}
		let index = this.indexOf(_plugins, plugin, 0, pluginComparer);
		if (index != -1) {
			plugin = _plugins[index];
			_plugins.splice(index, 1);
			delete Enumerable[plugin.name];
			delete IEnumerable.prototype[plugin.name];
			for (let [type, prototypes] of _extends) {
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
};
core.defineProperty(Enumerable, 'plugins', function() {
	return this.select(_plugins, plugin => ({ 
		get name() { return plugin.name; }, 
		get value() { return plugin.value; }, 
		get types() { return plugin.types; } 
	})).toArray();
}, true, true);
Enumerable.unextends = function(prototype, type, isPrototype = false) {
    if (typeof prototype !== 'object' || core.getType(type) !== core.types.String) return prototype;
    if (!isPrototype || removeExtends(prototype, type)) {
		core.undefineProperties(prototype, 'where', 'select', 'elementAt', 'distinct', 'except', 'union', 'intersect', 'ofType', 'skip', 'skipWhile', 'take', 'takeWhile', 'orderBy', 'orderByDescending', 'groupBy', 'selectMany', 'join', 'groupJoin', 'defaultIfEmpty', 'all', 'any', 'isEmpty', 'sequenceEqual', 'first', 'firstOrDefault', 'last', 'lastOrDefault', 'single', 'singleOrDefault', 'count', 'sum', 'max', 'min', 'average', 'aggregate', 'contains', 'indexOf', 'findIndex', 'lastIndexOf', 'findLastIndex', 'reverse', 'copyWithin', 'every', 'fill', 'filter', 'find', 'includes', 'map', 'pop', 'push', 'shift', 'unshift', 'reduce', 'reduceRight', 'slice', 'splice', 'some', 'sort', 'zip', 'toArray', 'toObject', 'forEach', 'concat', 'toDictionary', 'toLookup');
        for (let plugin of this.plugins) {
        	if (this.isEmpty(plugin.types) || this.contains(plugin.types, type)) {
        		core.undefineProperties(prototype, plugin.name);
        	}
        }
    }
};
Enumerable.extends = function(prototype, type, isPrototype = false) {
    if (typeof prototype !== 'object' || core.getType(type) !== core.types.String) return prototype;
    if (!isPrototype ||addExtends(prototype, type)) {
        core.defineProperties(prototype, {
            where(predicate = defaultPredicate) {
                return Enumerable.where(this, predicate);
            },
            select(selector = defaultSelector) {
                return Enumerable.select(this, selector);
            },
            elementAt(index) {
                return Enumerable.elementAt(this, index);
            },
            distinct(comparer = defaultEqualityComparer) {
                return Enumerable.distinct(this, comparer);
            },
            except(other, comparer = defaultEqualityComparer) {
                return Enumerable.except(this, other, comparer);
            },
            union(other, comparer = defaultEqualityComparer) {
                return Enumerable.union(this, other, comparer);
            },
            intersect(other, comparer = defaultEqualityComparer) {
                return Enumerable.intersect(this, other, comparer);
            },
            ofType(type) {
                return Enumerable.ofType(this, type);
            },
            skip(count) {
                return Enumerable.skip(this, count);
            },
            skipWhile(predicate = defaultPredicate()) {
                return Enumerable.skipWhile(this, predicate);
            },
            take(count) {
                return Enumerable.take(this, count);
            },
            takeWhile(predicate = defaultPredicate()) {
                return Enumerable.takeWhile(this, predicate);
            },
            orderBy(keySelector = defaultSelector, comparer = defaultComparer) {
                return Enumerable.orderBy(this, keySelector, comparer);
            },
            orderByDescending(keySelector = defaultSelector, comparer = defaultComparer) {
                return Enumerable.orderByDescending(this, keySelector, comparer);
            },
            groupBy(keySelector = defaultSelector, elementSelector = defaultSelector, resultSelector = defaultGroupResultSelector, comparer = defaultEqualityComparer) {
                return Enumerable.groupBy(this, keySelector, elementSelector, resultSelector, comparer);
            },
            selectMany(collectionSelector = defaultSelector, resultSelector = defaultSelector) {
                return Enumerable.selectMany(this, collectionSelector, resultSelector);
            },
            join(inner, resultSelector = undefined, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
                return Enumerable.join(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
            },
            groupJoin(inner, resultSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
                return Enumerable.groupJoin(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
            },
            defaultIfEmpty() {
                return Enumerable.defaultIfEmpty(this);
            },
            all(predicate = defaultPredicate) {
                return Enumerable.all(this, predicate);
            },
            any(predicate = defaultPredicate) {
                return Enumerable.any(this, predicate);
            },
            isEmpty() {
                return Enumerable.isEmpty(this);
            },
            sequenceEqual(other, comparer = defaultEqualityComparer) {
                return Enumerable.sequenceEqual(this, other, comparer);
            },
            first(predicate = defaultPredicate) {
                return Enumerable.first(this, predicate);
            },
            firstOrDefault(defaultValue, predicate = defaultPredicate) {
                return Enumerable.firstOrDefault(this, defaultValue, predicate);
            },
            last(predicate = defaultPredicate) {
                return Enumerable.last(this, predicate);
            },
            lastOrDefault(defaultValue, predicate = defaultPredicate) {
                return Enumerable.lastOrDefault(this, defaultValue, predicate);
            },
            single(predicate = defaultPredicate) {
                return Enumerable.single(this, predicate);
            },
            singleOrDefault(defaultValue, predicate = defaultPredicate) {
                return Enumerable.singleOrDefault(this, defaultValue, predicate);
            },
            count(predicate = defaultPredicate) {
                return Enumerable.count(this, predicate);
            },
            sum(predicate = defaultPredicate) {
                return Enumerable.sum(this, predicate);
            },
            max(selector = defaultSelector, comparer = defaultComparer) {
                return Enumerable.max(this, selector, comparer);
            },
            min(selector = defaultSelector, comparer = defaultComparer) {
                return Enumerable.min(this, selector, comparer);
            },
            average(predicate = defaultPredicate) {
                return Enumerable.average(this, predicate);
            },
            aggregate(seed, func, selector = defaultSelector) {
                return Enumerable.aggregate(this, seed, func, selector);
            },
            contains(value, comparer = defaultEqualityComparer) {
                return Enumerable.contains(this, value, comparer);
            },
            indexOf(value, start = 0, comparer = defaultStrictEqualityComparer) {
                return Enumerable.indexOf(this, value, start, comparer);
            },
            findIndex(predicate, thisArg) {
                return Enumerable.findIndex(this, predicate, thisArg);
            },
            lastIndexOf(value, start = Infinity, comparer = defaultStrictEqualityComparer) {
                return Enumerable.lastIndexOf(this, value, start, comparer);
            },
            findLastIndex(predicate, thisArg) {
                return Enumerable.findLastIndex(this, predicate, thisArg);
            },
            reverse() {
                return Enumerable.reverse(this);
            },
            copyWithin(target = 0, start = 0, end = Infinity) {
                return Enumerable.copyWithin(this, target, start, end);
            },
            every(callback, thisArg) {
                return Enumerable.every(this, callback, thisArg);
            },
            fill(value, start = 0, end = Infinity) {
                return Enumerable.fill(this, value, start, end);
            },
            filter(callback, thisArg) {
                return Enumerable.filter(this, callback, thisArg);
            },
            find(callback, thisArg) {
                return Enumerable.find(this, callback, thisArg);
            },
            includes(element, start = 0) {
                return Enumerable.includes(this, element, start);
            },
            map(callback, thisArg) {
                return Enumerable.map(this, callback, thisArg);
            },
            pop() {
                return Enumerable.pop(this);
            },
            push(...values) {
                return Enumerable.push.apply(Enumerable, core.array$concat.call([this], values));
            },
            shift() {
                return Enumerable.shift(this);
            },
            unshift(...values) {
                return Enumerable.unshift.apply(Enumerable, core.array$concat.call([this], values));
            },
            reduce(callback, initialValue) {
                return Enumerable.reduce(this, callback, initialValue);
            },
            reduceRight(callback, initialValue) {
                return Enumerable.reduceRight(this, callback, initialValue);
            },
            slice(start = 0, end = Infinity) {
                return Enumerable.slice(this, start, end);
            },
            splice(start, count, ...values) {
                return Enumerable.splice.apply(Enumerable, core.array$concat.call([this, start, count], values));
            },
            some(callback, thisArg) {
                return Enumerable.some(this, callback, thisArg);
            },
            sort(comparer = defaultComparer) {
                return Enumerable.sort(this, comparer);
            },
            zip(other, resultSelector) {
                return Enumerable.zip(this, other, resultSelector);
            },
            toArray() {
                return Enumerable.toArray(this);
            },
            toObject(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultSameComparer) {
                return Enumerable.toDictionary(this, keySelector, elementSelector, comparer).toObject();
            },
            forEach(action = defaultAction, thisArg = undefined) {
                return Enumerable.forEach(this, action, thisArg);
            },
            concat(...others) {
                return Enumerable.concat.apply(Enumerable, core.array$concat.call([this], others));
            }
        });
        if (type !== core.types.Object) {
            core.defineProperties(prototype, {
                toDictionary(keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultSameComparer) {
                    return Enumerable.toDictionary(this, keySelector, elementSelector, comparer);
                },
                toLookup(keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultSameComparer) {
                    return Enumerable.toLookup(this, keySelector, elementSelector, comparer);
                }
            });
        } else {
            core.defineProperties(prototype, {
                toDictionary(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultSameComparer) {
                    return Enumerable.toDictionary(this, keySelector, elementSelector, comparer);
                },
                toLookup(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultSameComparer) {
                    return Enumerable.toLookup(this, keySelector, elementSelector, comparer);
                }
            });
        }
        for (let plugin of this.plugins) {
        	if (this.isEmpty(plugin.types) || this.contains(plugin.types, type)) {
        		core.defineProperty(prototype, plugin.name, memberFunction(plugin.name));
        	}
        }
    }
    return prototype;
};
Enumerable.getEnumerator = function(enumerable) {
    return new IEnumerator(asIterable(enumerable));
};
Enumerable.repeat = function(element, count = 0) {
    return new RepeatEnumerable(element, count);
};
Enumerable.range = function(start, count) {
    return new RangeEnumerable(start, count);
};
Enumerable.empty = function() {
    return new EmptyEnumerable();
};
Enumerable.asEnumerable = function(object) {
    return object.asEnumerable ? object.asEnumerable() : new IteratorEnumerable(object);
};
Enumerable.toArray = function(source) {
    if (core.isArray(source)) {
        return source;
    } else {
        source = asIterable(source);
        return Array.from(source);
    }
};
Enumerable.toDictionary = function(source, keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultSameComparer) {
    let dictionary = new Dictionary(), index = 0;
    source = asIterable(source);
    for (let element of source) {
        let key = keySelector(element, index);
        if (dictionary.has(key, comparer)) {
            throw new KeysForMultiElementsException(key);
        } else {
            dictionary.set(key, elementSelector(element, index), comparer);
        }
        index++;
    }
    return dictionary;
};
Enumerable.toLookup = function(source, keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultSameComparer) {
    let lookup = new Lookup(), index = 0;
    source = asIterable(source);
    for (let element of source) {
        let key = keySelector(element, index);
        if (lookup.has(key, comparer)) {
            lookup.get(key, comparer).push(elementSelector(element, index));
        } else {
            lookup.set(key, [elementSelector(element, index)], comparer);
        }
        index++;
    }
    return lookup;
};
Enumerable.where = function(source, predicate = defaultPredicate) {
    return new WhereEnumerable(asIterable(source), predicate);
};
Enumerable.select = function(source, selector = defaultSelector) {
    return new SelectEnumerable(asIterable(source), selector);
};
Enumerable.distinct = function(source, comparer = defaultEqualityComparer) {
    return new DistinctEnumerable(asIterable(source), comparer);
};
Enumerable.except = function(source, other, comparer = defaultEqualityComparer) {
    return new ExceptEnumerable(asIterable(source), other, comparer);
};
Enumerable.union = function(source, other, comparer = defaultEqualityComparer) {
    return new UnionEnumerable(asIterable(source), other, comparer);
};
Enumerable.intersect = function(source, other, comparer = defaultEqualityComparer) {
    return new IntersectEnumerable(asIterable(source), other, comparer);
};
Enumerable.ofType = function(source, type) {
    return new OfTypeEnumerable(asIterable(source), type);
};
Enumerable.skip = function(source, count) {
    return new SkipEnumerable(asIterable(source), count);
};
Enumerable.skipWhile = function(source, predicate = defaultPredicate) {
    return new SkipWhileEnumerable(asIterable(source), predicate);
};
Enumerable.take = function(source, count) {
    return new TakeEnumerable(asIterable(source), count);
};
Enumerable.takeWhile = function(source, predicate = defaultPredicate) {
    return new TakeWhileEnumerable(asIterable(source), predicate);
};
Enumerable.orderBy = function(source, keySelector = defaultSelector, comparer = defaultComparer) {
    return new OrderByEnumerable(asIterable(source), keySelector, comparer);
};
Enumerable.orderByDescending = function(source, keySelector = defaultSelector, comparer = defaultComparer) {
    return new OrderByDescendingEnumerable(asIterable(source), keySelector, comparer);
};
Enumerable.thenBy = function(orderedSource, keySelector = defaultSelector, comparer = defaultComparer) {
    if (orderedSource instanceof IOrderedEnumerable) {
        return new ThenByEnumerable(orderedSource, keySelector, comparer);
    } else {
        return new OrderByEnumerable(asIterable(orderedSource), keySelector, comparer);
    }
};
Enumerable.thenByDescending = function(orderedSource, keySelector = defaultSelector, comparer = defaultComparer) {
    if (orderedSource instanceof IOrderedEnumerable) {
        return new ThenByDescendingEnumerable(orderedSource, keySelector, comparer);
    } else {
        return new OrderByDescendingEnumerable(asIterable(orderedSource), keySelector, comparer);
    }
};
Enumerable.groupBy = function(source, keySelector = defaultSelector, elementSelector = defaultSelector, resultSelector = defaultGroupResultSelector, comparer = defaultEqualityComparer) {
    return new GroupedEnumerable(asIterable(source), keySelector, elementSelector, resultSelector, comparer);
};
Enumerable.selectMany = function(source, collectionSelector = defaultSelector, resultSelector = defaultSelector) {
    return new SelectManyEnumerable(asIterable(source), collectionSelector, resultSelector);
};
Enumerable.join = function(outer, inner, resultSelector = undefined, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
    if (typeof resultSelector === 'undefined' && core.array$join) {
        if (core.isArray(outer)) {
            return core.array$join.call(outer, inner);
        } else {
            return core.array$join.call(this.toArray(asIterable(outer)), inner);
        }
    } else {
        return new JoinEnumerable(asIterable(outer), inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
    }
};
Enumerable.groupJoin = function(outer, inner, resultSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
    return new GroupJoinEnumerable(asIterable(outer), inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
};
Enumerable.reverse = function(source) {
    return new ReverseEnumerable(asIterable(source));
};
Enumerable.zip = function(source, other, resultSelector) {
    return new ZipEnumerable(asIterable(source), other, resultSelector);
};
Enumerable.every = function(source, callback, thisArg) {
    if (core.isArray(source) && core.array$every) {
        return core.array$every.call(source, callback, thisArg);
    } else {
        return this.all(source, (element, index) => callback.call(thisArg, element, index, source));
    }
};
Enumerable.find = function(source, callback, thisArg) {
    if (core.isArray(source) && core.array$find) {
        return core.array$find.call(source, callback, thisArg);
    } else {
        return this.firstOrDefault(source, undefined, (element, index) => callback.call(thisArg, element, index, source));
    }
};
Enumerable.includes = function(source, element, start = 0) {
    if (core.isArray(source) && core.array$includes) {
        return core.array$includes.call(source, element, start);
    } else if (core.isString(source) && core.string$includes) {
        return core.string$includes.call(source, element, start);
    } else {
        return this.skip(source, start).contains(element);
    }
};
Enumerable.map = function(source, callback, thisArg) {
    return this.select(source, (element, index) => callback.call(thisArg, element, index, source));
};
Enumerable.filter = function(source, callback, thisArg) {
    return this.where(source, (element, index) => callback.call(thisArg, element, index, source));
};
Enumerable.concat = function(source, ...others) {
    return new (Function.prototype.bind.apply(ConcatEnumerable, core.array$concat.call([null], [asIterable(source)], others)))();
};
Enumerable.pop = function(source) {
    if (core.isArray(source) && core.array$pop) {
        return core.array$pop.call(source);
    } else {
        source = asIterable(source);
        let iterable = this.toArray(source);
        core.setProperty(source, Symbol.iterator, function*() {
            let len = iterable.length - 1;
            for (let index = 0; index < len; index++) {
                yield iterable[index];
            }
        });
        return iterable[iterable.length - 1];
    }
};
Enumerable.push = function(source, ...values) {
    if (core.isArray(source) && core.array$push) {
        return core.array$push.apply(source, values);
    } else {
        source = asIterable(source);
        let iterable = this.toArray(source);
        core.setProperty(source, Symbol.iterator, function*() {
            yield* iterable;
            yield* values;
        });
        return iterable.length + values.length;
    }
};
Enumerable.shift = function(source) {
    if (core.isArray(source) && core.array$shift) {
        return core.array$shift.call(source);
    } else {
        source = asIterable(source);
        let iterable = { [Symbol.iterator]:source[Symbol.iterator] };
        core.setProperty(source, Symbol.iterator, function*() {
            let index = 0;
            for (let element of iterable) {
                if (index > 0) {
                    yield element;
                }
                index++;
            }
        });
        return this.firstOrDefault(iterable);
    }
};
Enumerable.unshift = function(source, ...values) {
    if (core.isArray(source) && core.array$unshift) {
        return core.array$unshift.apply(source, values);
    } else {
        source = asIterable(source);
        let iterable = this.toArray(source);
        core.setProperty(source, Symbol.iterator, function*() {
            yield* values;
            yield* iterable;
        });
        return values.length + iterable.length;
    }
};
Enumerable.reduce = function(source, callback, initialValue) {
    if (core.isArray(source) && core.array$reduce) {
        return core.array$reduce.call(source, callback, initialValue);
    } else {
        return this.aggregate(source, initialValue, (seed, element, index) => callback(seed, element, index, source));
    }
};
Enumerable.reduceRight = function(source, callback, initialValue) {
    if (core.isArray(source) && core.array$reduceRight) {
        return core.array$reduceRight.call(source, callback, initialValue);
    } else {
        return this.reverse(source).aggregate(initialValue, (seed, element, index) => callback(seed, element, index, source));
    }
};
Enumerable.some = function(source, callback, thisArg) {
    if (core.isArray(source) && core.array$some) {
        return core.array$some.call(source, callback, thisArg);
    } else {
        return this.any(source, (element, index) => callback.call(thisArg, element, index, source));
    }
};
Enumerable.slice = function(source, start = 0, end = Infinity) {
    return new SliceEnumerable(asIterable(source), start, end);
};
Enumerable.splice = function(source, start, count, ...values) {
    return new (Function.prototype.bind.apply(SpliceEnumerable, core.array$concat.call([null], [asIterable(source), start, count], values)))();
};
Enumerable.fill = function(source, value, start = 0, end = Infinity) {
    return new FillEnumerable(asIterable(source), value, start, end);
};
Enumerable.sort = function(source, comparer = defaultComparer) {
    return new SortEnumerable(asIterable(source), comparer);
};
Enumerable.copyWithin = function(source, target = 0, start = 0, end = Infinity) {
    return new CopyWithinEnumerable(asIterable(source), target, start, end);
};
Enumerable.defaultIfEmpty = function(source, defaultValue) {
    return this.isEmpty(source) ? new SingleEnumerable(defaultValue) : this.asEnumerable(source);
};
Enumerable.all = function(source, predicate = defaultPredicate) {
    let index = 0;
    source = asIterable(source);
    for (let element of source) {
        if (!predicate(element, index++)) {
            return false;
        }
    }
    return true;
};
Enumerable.any = function(source, predicate = defaultPredicate) {
    let index = 0;
    source = asIterable(source);
    for (let element of source) {
        if (predicate(element, index++)) {
            return true;
        }
    }
    return false;
};
Enumerable.isEmpty = function(source) {
    return !this.any(source);
};
Enumerable.sequenceEqual = function(source, other, comparer = defaultEqualityComparer) {
    source = asIterable(source);
    other = asIterable(other);
    let sourceIterator = source[Symbol.iterator]();
    let otherIterator = other[Symbol.iterator]();
    let sourceElement, otherElement;
    while(!((sourceElement = sourceIterator.next()).done & (otherElement = otherIterator.next()).done)) {
        if (sourceElement.done != otherElement.done) {
            return false;
        } else if (!comparer(sourceElement.value, otherElement.value)) {
            return false;
        }
    }
    return true;
};
Enumerable.first = function(source, predicate = defaultPredicate) {
    if (predicate === defaultPredicate && core.isProto(source)) {
        if (source.length > 0) {
            return source[0];
        } else {
            throw new NoSuchElementsException();
        }
    } else {
        let index = 0;
        source = asIterable(source);
        for (let element of source) {
            if (predicate(element, index++)) {
                return element;
            }
        }
        throw new NoSuchElementsException();
    }
};
Enumerable.firstOrDefault = function(source, defaultValue, predicate = defaultPredicate) {
    if (predicate === defaultPredicate && core.isProto(source)) {
        if (source.length > 0) {
            return source[0];
        } else {
            return defaultValue;
        }   
    } else {
        let index = 0;
        source = asIterable(source);
        for (let element of source) {
            if (predicate(element, index++)) {
                return element;
            }
        }
        return defaultValue;
    }
};
Enumerable.last = function(source, predicate = defaultPredicate) {
    if (predicate === defaultPredicate && core.isProto(source)) {
        if (source.length > 0) {
            return source[source.length - 1];
        } else {
            throw new NoSuchElementsException();
        }
    } else {
        let last, has = false, index = 0;
        source = asIterable(source);
        for (let element of source) {
            if (predicate(element, index++)) {
                last = element;
                has = true;
            }
        }
        if (has) {
            return last;
        } else {
            throw new NoSuchElementsException();
        }
    }
};
Enumerable.lastOrDefault = function(source, defaultValue, predicate = defaultPredicate) {
    if (predicate === defaultPredicate && core.isProto(source)) {
        if (source.length > 0) {
            return source[source.length - 1];
        } else {
            return defaultValue;
        }
    } else {
        let last, has = false, index = 0;
        source = asIterable(source);
        for (let element of source) {
            if (predicate(element, index++)) {
                last = element;
                has = true;
            }
        }
        if (has) {
            return last;
        } else {
            return defaultValue;
        }
    }
};
Enumerable.single = function(source, predicate = defaultPredicate) {
    if (predicate === defaultPredicate && core.isProto(source)) {
        if (source.length === 1) {
            return source[0];
        } else if (source.length === 0) {
            throw new NoSuchElementsException();
        } else {
            throw new TooManyElementsException();
        }
    } else {
        let single, count = 0, index = 0;
        source = asIterable(source);
        for (let element of source) {
            if (predicate(element, index++)) {
                single = element;
                count++;
                if (count >= 2) {
                    break;
                }
            }
        }
        if (count === 1) {
            return single;
        } else if (count === 0) {
            throw new NoSuchElementsException();
        } else {
            throw new TooManyElementsException();
        }
    }
};
Enumerable.singleOrDefault = function(source, defaultValue, predicate = defaultPredicate) {
    if (predicate === defaultPredicate && core.isProto(source)) {
        if (source.length === 1) {
            return source[0];
        } else if (source.length === 0) {
            return defaultValue;
        } else {
            throw new TooManyElementsException();
        }
    } else {
        let single, count = 0, index = 0;
        source = asIterable(source);
        for (let element of source) {
            if (predicate(element, index++)) {
                single = element;
                count++;
                if (count >= 2) {
                    break;
                }
            }
        }
        if (count === 1) {
            return single;
        } else if (count === 0) {
            return defaultValue;
        } else {
            throw new TooManyElementsException();
        }
    }
};
Enumerable.count = function(source, predicate = defaultPredicate) {
    let count = 0, index = 0;
    source = asIterable(source);
    for (let element of source) {
        if (predicate(element, index++)) {
            count++;
        }
    }
    return count;
};
Enumerable.aggregate = function(source, seed, func, resultSelector = defaultSelector) {
    let index = 0;
    source = asIterable(source);
    for (let element of source) {
        seed = func(seed, element, index++);
    }
    return resultSelector(seed);
};
Enumerable.sum = function(source, selector = defaultSelector) {
    let sum = 0, index = 0;
    source = asIterable(source);
    for (let element of source) {
        sum += parseFloat(selector(element, index++));
        if (isNaN(sum)) return sum;
    }
    return sum;
};
Enumerable.max = function(source, selector = defaultSelector, comparer = defaultComparer) {
    let max = false, first = true, index = 0;
    source = asIterable(source);
    for (let element of source) {
        element = selector(element, index++);
        if (first) {
            max = element;
        } else {
            max = comparer(max, element) > 0 ? max : element;
        }
        first = false;
    }
    if (first) {
        throw new NoSuchElementsException();
    } else {
        return max;
    }
};
Enumerable.min = function(source, selector = defaultSelector, comparer = defaultComparer) {
    let min = false, first = true, index = 0;
    source = asIterable(source);
    for (let element of source) {
        element = selector(element, index++);
        if (first) {
            min = element;
        } else {
            min = comparer(min, element) < 0 ? min : element;
        }
        first = false;
    }
    if (first) {
        throw new NoSuchElementsException();
    } else {
        return min;
    }
};
Enumerable.average = function(source, selector = defaultSelector) {
    let sum = 0, count = 0, index = 0;
    source = asIterable(source);
    for (let element of source) {
        sum += parseFloat(selector(element, index++));
        if (isNaN(sum)) return sum;
        count++;
    }
    if (count !== 0) {
        return sum / count;
    } else {
        throw new NoSuchElementsException();
    }
};
Enumerable.contains = function(source, value, comparer = defaultEqualityComparer) {
    source = asIterable(source);
    for (let element of source) {
        if (comparer(element, value)) {
            return true;
        }
    }
    return false;
};
Enumerable.elementAt = function(source, index) {
    if (core.isProto(source)) {
        if (index >= 0 && index < source.length) {
            return source[index];
        } else {
            throw new OutOfRangeException(index);
        }
    } else {
        if (index >= 0) {
            source = asIterable(source);
            for (let element of source) {
                if (index-- === 0) {
                    return element;
                }
            }
        }
        throw new OutOfRangeException(index);
    }
};
Enumerable.elementAtOrDefault = function(source, index, defaultValue) {
    if (core.isProto(source)) {
        if (index >= 0 && index < source.length) {
            return source[index];
        } else {
            return defaultValue;
        }
    } else {
        if (index >= 0) {
            source = asIterable(source);
            for (let element of source) {
                if (index-- === 0) {
                    return element;
                }
            }
        }
        return defaultValue;
    }
};
Enumerable.indexOf = function(source, value, start = 0, comparer = defaultStrictEqualityComparer) {
    if (comparer === defaultStrictEqualityComparer && core.isArray(source) && core.array$indexOf) {
        return core.array$indexOf.call(source, value, start);
    } else if (comparer === defaultStrictEqualityComparer && core.isString(source) && core.string$indexOf) {
        return core.string$indexOf.call(source, value, start);
    } else {
        let index = 0;
        source = asIterable(source);
        for (let element of source) {
            if (index >= start && comparer(element, value)) {
                return index;
            }
            index++;
        }
        return -1;
    }
};
Enumerable.findIndex = function(source, predicate, thisArg) {
    let index = 0;
    let callback = (element, index) => predicate.call(thisArg, element, index, source);
    source = asIterable(source);
    for (let element of source) {
        if (callback(element, index)) {
            return index;
        }
        index++;
    }
    return -1;
};
Enumerable.lastIndexOf = function(source, value, start = Infinity, comparer = defaultStrictEqualityComparer) {
    if (comparer === defaultStrictEqualityComparer && core.isArray(source) && core.array$lastIndexOf) {
        return core.array$lastIndexOf.call(source, value, start);
    } else if (comparer === defaultStrictEqualityComparer && core.isString(source) && core.string$lastIndexOf) {
        return core.string$lastIndexOf.call(source, value, start);
    } else {
        source = this.toArray(asIterable(source));
        if (start < 0) {
            start = source.length + start;
        }
        for (let index = Math.min(start, source.length - 1); index >= 0; index--) {
            if (comparer(source[index], value)) {
                return index;
            }
        }
        return -1;
    }
};
Enumerable.findLastIndex = function(source, predicate, thisArg) {
    let callback = (element, index) => predicate.call(thisArg, element, index, source);
    source = this.toArray(asIterable(source));
    for (let index = source.length - 1; index >= 0; index--) {
        let element = source[index];
        if (callback(element, index)) {
            return index;
        }
    }
    return -1;
};
Enumerable.forEach = function(source, action = defaultAction, thisArg = undefined) {
    if (core.isArray(source) && core.array$forEach) {
        core.array$forEach.call(source, action, thisArg);
    } else {
        let index = 0;
        let callback = (element, index) => action.call(thisArg, element, index, source);
        source = asIterable(source);
        for (let element of source) {
            callback(element, index++);
        }
    }
};
Enumerable.arrayComparer = function(array, last = false, comparer = defaultEqualityComparer) {
    console.warn('This method was deprecated, please use Enumerable.comparers.array(array, last, comparer)');
    return arrayComparer(array, last, comparer);
};
Enumerable.predicateComparer = function(predicateArray, last = false) {
    console.warn('This method was deprecated, please use Enumerable.comparers.predicate(predicateArray, last)');
    return predicateComparer(predicateArray, last);
};
core.defineProperty(Enumerable, 'comparers', () => ({
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
    }
}), true, true);
core.defineProperty(Enumerable, 'selectors', () => ({
    get default() {
        return defaultSelector;
    },
    get key() {
        return defaultKeySelector;
    },
    get value() {
        return defaultValueSelector;
    },
    get groupResult() {
        return defaultGroupResultSelector;
    },
    property(property) {
    	return propertySelector(property);
    }
}), true, true);
core.defineProperty(Enumerable, 'actions', () => ({
    get default() {
        return defaultAction;
    }
}), true, true);
core.defineProperty(Enumerable, 'predicates', () => ({
    get default() {
        return defaultPredicate;
    }
}), true, true);
core.defineProperty(Enumerable, 'exceptions', () => ({
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
    }
}), true, true);
core.defineProperty(Enumerable, 'IComparable', () => IComparable, true, true);
core.defineProperty(Enumerable, 'IEquatable', () => IEquatable, true, true);

module.exports = Enumerable;

const IEnumerator = require('./IEnumerator');

const IEnumerable = require('./IEnumerable');
const RepeatEnumerable = require('./enumerables/RepeatEnumerable');
const RangeEnumerable = require('./enumerables/RangeEnumerable');
const EmptyEnumerable = require('./enumerables/EmptyEnumerable');
const IteratorEnumerable = require('./enumerables/IteratorEnumerable');
const WhereEnumerable = require('./enumerables/WhereEnumerable');
const SelectEnumerable = require('./enumerables/SelectEnumerable');
const ConcatEnumerable = require('./enumerables/ConcatEnumerable');
const DistinctEnumerable = require('./enumerables/DistinctEnumerable');
const ExceptEnumerable = require('./enumerables/ExceptEnumerable');
const UnionEnumerable = require('./enumerables/UnionEnumerable');
const IntersectEnumerable = require('./enumerables/IntersectEnumerable');
const OfTypeEnumerable = require('./enumerables/OfTypeEnumerable');
const SkipEnumerable = require('./enumerables/SkipEnumerable');
const SkipWhileEnumerable = require('./enumerables/SkipWhileEnumerable');
const TakeEnumerable = require('./enumerables/TakeEnumerable');
const TakeWhileEnumerable = require('./enumerables/TakeWhileEnumerable');
const IOrderedEnumerable = require('./enumerables/IOrderedEnumerable');
const OrderByEnumerable = require('./enumerables/OrderByEnumerable');
const OrderByDescendingEnumerable = require('./enumerables/OrderByDescendingEnumerable');
const ThenByEnumerable = require('./enumerables/ThenByEnumerable');
const ThenByDescendingEnumerable = require('./enumerables/ThenByDescendingEnumerable');
const GroupedEnumerable = require('./enumerables/GroupedEnumerable');
const SelectManyEnumerable = require('./enumerables/SelectManyEnumerable');
const JoinEnumerable = require('./enumerables/JoinEnumerable');
const GroupJoinEnumerable = require('./enumerables/GroupJoinEnumerable');
const ReverseEnumerable = require('./enumerables/ReverseEnumerable');
const ZipEnumerable = require('./enumerables/ZipEnumerable');
const SingleEnumerable = require('./enumerables/SingleEnumerable');
const Dictionary = require('./enumerables/Dictionary');
const Lookup = require('./enumerables/Lookup');
const SliceEnumerable = require('./enumerables/SliceEnumerable');
const SpliceEnumerable = require('./enumerables/SpliceEnumerable');
const FillEnumerable = require('./enumerables/FillEnumerable');
const SortEnumerable = require('./enumerables/SortEnumerable');
const CopyWithinEnumerable = require('./enumerables/CopyWithinEnumerable');
