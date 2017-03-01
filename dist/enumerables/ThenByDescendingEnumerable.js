'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IOrderedEnumerable = require('./IOrderedEnumerable');

var thenByComparer = require('./../methods/thenByComparer');
var selectorComparer = require('./../methods/selectorComparer');
var defaultSelector = require('./../methods/defaultSelector');
var defaultComparer = require('./../methods/defaultComparer');
var descendingComparer = require('./../methods/descendingComparer');

var ThenByDescendingEnumerable = function (_IOrderedEnumerable) {
    _inherits(ThenByDescendingEnumerable, _IOrderedEnumerable);

    function ThenByDescendingEnumerable(orderedSource) {
        var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
        var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;

        _classCallCheck(this, ThenByDescendingEnumerable);

        return _possibleConstructorReturn(this, (ThenByDescendingEnumerable.__proto__ || Object.getPrototypeOf(ThenByDescendingEnumerable)).call(this, orderedSource[IOrderedEnumerable.source], thenByComparer(orderedSource[IOrderedEnumerable.orderByComparer], descendingComparer(selectorComparer(keySelector, comparer)))));
    }

    return ThenByDescendingEnumerable;
}(IOrderedEnumerable);

;

module.exports = ThenByDescendingEnumerable;