import IMapEnumerable from './IMapEnumerable';

import core from './../core/core';

import Entry from './Entry';

class ObjectEnumerable extends IMapEnumerable {
    constructor(source) {
        super();
        core.defineProperty(this, Symbol.iterator, function*() {
            for (let key of Object.keys(source)) {
                yield new Entry(key, source[key]);
            }
        });
    };
};

export default ObjectEnumerable;