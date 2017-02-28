'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _IEnumerable2 = require('./../IEnumerable');

var _IEnumerable3 = _interopRequireDefault(_IEnumerable2);

var _core = require('./../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RangeEnumerable = function (_IEnumerable) {
    _inherits(RangeEnumerable, _IEnumerable);

    function RangeEnumerable(start, count) {
        _classCallCheck(this, RangeEnumerable);

        var _this = _possibleConstructorReturn(this, (RangeEnumerable.__proto__ || Object.getPrototypeOf(RangeEnumerable)).call(this, []));

        _core2.default.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            var i, value;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            i = 0, value = start;

                        case 1:
                            if (!(i < count)) {
                                _context.next = 7;
                                break;
                            }

                            _context.next = 4;
                            return value;

                        case 4:
                            i++, value++;
                            _context.next = 1;
                            break;

                        case 7:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
        return _this;
    }

    return RangeEnumerable;
}(_IEnumerable3.default);

;

exports.default = RangeEnumerable;