'use strict';


class Entry {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    toString() {
        return '{' + this.key + ':' + this.value + '}';
    }
}

module.exports = Entry;