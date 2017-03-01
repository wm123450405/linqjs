'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IOrderedEnumerable = require('./IOrderedEnumerable');

var defaultSelector = require('./../methods/defaultSelector');
var defaultComparer = require('./../methods/defaultComparer');
var selectorComparer = require('./../methods/selectorComparer');
var descendingComparer = require('./../methods/descendingComparer');

var OrderByDescendingEnumerable = function (_IOrderedEnumerable) {
    _inherits(OrderByDescendingEnumerable, _IOrderedEnumerable);

    function OrderByDescendingEnumerable(source) {
        var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
        var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;

        _classCallCheck(this, OrderByDescendingEnumerable);

        return _possibleConstructorReturn(this, (OrderByDescendingEnumerable.__proto__ || Object.getPrototypeOf(OrderByDescendingEnumerable)).call(this, source, descendingComparer(selectorComparer(keySelector, comparer))));
    }

    return OrderByDescendingEnumerable;
}(IOrderedEnumerable);

;

module.exports = OrderByDescendingEnumerable;