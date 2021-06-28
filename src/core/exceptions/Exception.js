'use strict';

const core = require('../core');

class Exception extends Error {
    constructor(message) {
        super(message);
        core.defineProperty(this, 'getType', () => core.getType(this), true, true);
        core.defineProperty(this, 'toString', () => `${ core.getType(this) }: ${ message }`, false, true);
    }
}

module.exports = Exception;