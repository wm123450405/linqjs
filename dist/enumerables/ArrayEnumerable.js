'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IteratorEnumerable = require('./IteratorEnumerable');

var core = require('./../core/core');

var defaultEqualityComparer = require('./../methods/defaultEqualityComparer');

var Enumerable = require('./../Enumerable');

var ArrayEnumerable = function (_IteratorEnumerable) {
    _inherits(ArrayEnumerable, _IteratorEnumerable);

    function ArrayEnumerable(array) {
        _classCallCheck(this, ArrayEnumerable);

        var _this = _possibleConstructorReturn(this, (ArrayEnumerable.__proto__ || Object.getPrototypeOf(ArrayEnumerable)).call(this, array));

        core.defineProperties(_this, {
            indexOf: function indexOf(value) {
                var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

                if (comparer === defaultEqualityComparer) {
                    return core.array$indexOf.call(array, value, start);
                } else {
                    return Enumerable.indexOf(this, value, start, comparer);
                }
            },
            lastIndexOf: function lastIndexOf(value) {
                var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

                if (comparer === defaultEqualityComparer) {
                    return core.array$lastIndexOf.call(array, value, start);
                } else {
                    return Enumerable.lastIndexOf(this, value, start, comparer);
                }
            },
            findIndex: function findIndex(predicate) {
                var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

                if (start === 0) {
                    return core.array$findIndex.call(array, predicate);
                } else {
                    return Enumerable.findIndex(this, predicate, start);
                }
            }
        });
        return _this;
    }

    return ArrayEnumerable;
}(IteratorEnumerable);

;

module.exports = ArrayEnumerable;