'use strict';

const core = require('./../core/core');

module.exports = value => core.isObject(value) ? { ...value } : value;