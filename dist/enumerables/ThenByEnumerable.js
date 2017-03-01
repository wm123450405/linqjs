'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IOrderedEnumerable = require('./IOrderedEnumerable');

var thenByComparer = require('./../methods/thenByComparer');
var selectorComparer = require('./../methods/selectorComparer');
var defaultSelector = require('./../methods/defaultSelector');
var defaultComparer = require('./../methods/defaultComparer');

var ThenByEnumerable = function (_IOrderedEnumerable) {
    _inherits(ThenByEnumerable, _IOrderedEnumerable);

    function ThenByEnumerable(orderedSource) {
        var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
        var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;

        _classCallCheck(this, ThenByEnumerable);

        return _possibleConstructorReturn(this, (ThenByEnumerable.__proto__ || Object.getPrototypeOf(ThenByEnumerable)).call(this, orderedSource[IOrderedEnumerable.source], thenByComparer(orderedSource[IOrderedEnumerable.orderByComparer], selectorComparer(keySelector, comparer))));
    }

    return ThenByEnumerable;
}(IOrderedEnumerable);

;

module.exports = ThenByEnumerable;