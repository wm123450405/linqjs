'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IOrderedEnumerable = require('./IOrderedEnumerable');

var defaultSelector = require('./../methods/defaultSelector');
var defaultComparer = require('./../methods/defaultComparer');
var selectorComparer = require('./../methods/selectorComparer');

var OrderByEnumerable = function (_IOrderedEnumerable) {
    _inherits(OrderByEnumerable, _IOrderedEnumerable);

    function OrderByEnumerable(source) {
        var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
        var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;

        _classCallCheck(this, OrderByEnumerable);

        return _possibleConstructorReturn(this, (OrderByEnumerable.__proto__ || Object.getPrototypeOf(OrderByEnumerable)).call(this, source, selectorComparer(keySelector, comparer)));
    }

    return OrderByEnumerable;
}(IOrderedEnumerable);

;

module.exports = OrderByEnumerable;