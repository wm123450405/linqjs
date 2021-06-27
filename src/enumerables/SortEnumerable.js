'use strict';

const IEnumerable = require('./../IEnumerable');

const defaultComparer = require('./../methods/defaultComparer');

const core = require('./../core/core');

const methods = require('./../methods/methods');

class SortEnumerable extends IEnumerable {
	constructor(source, comparer = defaultComparer) {
        super(source);
        comparer = methods.asComparer(comparer);
        let iterable = source.getIterable();
        core.setProperty(source, Symbol.iterator, function*() {
            yield* [...iterable].sort(comparer);
        });
        return source;
    }
}

module.exports = SortEnumerable;