'use strict';

const IterableEnumerable = require('./IterableEnumerable');

const core = require('./../core/core');

const defaultPredicate = require('./../methods/defaultPredicate');

const OutOfRangeException = require('./../core/exceptions/OutOfRangeException');
const NoSuchElementsException = require('./../core/exceptions/NoSuchElementsException');
const TooManyElementsException = require('./../core/exceptions/TooManyElementsException');

class ProtoEnumerable extends IterableEnumerable {
    constructor(source) {
        super(source);
        core.defineProperty(this, core.delegate, source);
    }
    elementAt(index) {
        let delegate = this[core.delegate];
        if (core.isProto(delegate)) {
            if (index >= 0 && index < delegate.length) {
                return delegate[index];
            } else {
                throw new OutOfRangeException(index);
            }
        } else {
            return super.elementAt(index);
        }
    }
    elementAtOrDefault(index, defaultValue) {
        let delegate = this[core.delegate];
        if (core.isProto(delegate)) {
            if (index >= 0 && index < delegate.length) {
                return delegate[index];
            } else if (index > 0) {
                return defaultValue;
            }
        } else {
            return super.elementAtOrDefault(index, defaultValue);
        }
    }
    first(predicate = defaultPredicate) {
        let delegate = this[core.delegate];
        if (predicate === defaultPredicate && core.isProto(delegate)) {
            if (delegate.length > 0) {
                return delegate[0];
            } else {
                throw new NoSuchElementsException();
            }
        } else {
            return super.first(predicate);
        }
    }
    firstOrDefault(defaultValue, predicate = defaultPredicate) {
        let delegate = this[core.delegate];
        if (predicate === defaultPredicate && core.isProto(delegate)) {
            if (delegate.length > 0) {
                return delegate[0];
            } else {
                return defaultValue;
            }
        } else {
            return super.firstOrDefault(defaultValue, predicate);
        }
    }
    last(predicate = defaultPredicate) {
        let delegate = this[core.delegate];
        if (predicate === defaultPredicate && core.isProto(delegate)) {
            if (delegate.length > 0) {
                return delegate[delegate.length - 1];
            } else {
                throw new NoSuchElementsException();
            }
        } else {
            return super.last(predicate);
        }
    }
    lastOrDefault(defaultValue, predicate = defaultPredicate) {
        let delegate = this[core.delegate];
        if (predicate === defaultPredicate && core.isProto(delegate)) {
            if (delegate.length > 0) {
                return delegate[delegate.length - 1];
            } else {
                return defaultValue;
            }
        } else {
            return super.lastOrDefault(defaultValue, predicate);
        }
    }
    single(predicate = defaultPredicate) {
        let delegate = this[core.delegate];
        if (predicate === defaultPredicate && core.isProto(delegate)) {
            if (delegate.length === 1) {
                return delegate[0];
            } else if (delegate.length === 0) {
                throw new NoSuchElementsException();
            } else {
                throw new TooManyElementsException();
            }
        } else {
            return super.single(predicate);
        }
    }
    singleOrDefault(defaultValue, predicate = defaultPredicate) {
        let delegate = this[core.delegate];
        if (predicate === defaultPredicate && core.isProto(delegate)) {
            if (delegate.length === 1) {
                return delegate[0];
            } else if (delegate.length === 0) {
                return defaultValue;
            } else {
                throw new TooManyElementsException();
            }
        } else {
            return super.singleOrDefault(defaultValue, predicate);
        }
    }
    count(predicate = defaultPredicate) {
        let delegate = this[core.delegate];
        if (predicate === defaultPredicate && core.isProto(delegate)) {
            return delegate.length;
        } else {
            return super.count(predicate);
        }
    }
}

module.exports = ProtoEnumerable;