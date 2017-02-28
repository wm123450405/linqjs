'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Dictionary2 = require('./Dictionary');

var _Dictionary3 = _interopRequireDefault(_Dictionary2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lookup = function (_Dictionary) {
    _inherits(Lookup, _Dictionary);

    function Lookup() {
        _classCallCheck(this, Lookup);

        return _possibleConstructorReturn(this, (Lookup.__proto__ || Object.getPrototypeOf(Lookup)).call(this));
    }

    return Lookup;
}(_Dictionary3.default);

;

exports.default = Lookup;