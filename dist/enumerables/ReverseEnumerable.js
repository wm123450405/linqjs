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

var ReverseEnumerable = function (_IEnumerable) {
    _inherits(ReverseEnumerable, _IEnumerable);

    function ReverseEnumerable(source) {
        _classCallCheck(this, ReverseEnumerable);

        var _this = _possibleConstructorReturn(this, (ReverseEnumerable.__proto__ || Object.getPrototypeOf(ReverseEnumerable)).call(this, source));

        _core2.default.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            var temp, length, i;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            temp = source.toArray(), length = temp.length;
                            i = length - 1;

                        case 2:
                            if (!(i >= 0)) {
                                _context.next = 8;
                                break;
                            }

                            _context.next = 5;
                            return temp[i];

                        case 5:
                            i--;
                            _context.next = 2;
                            break;

                        case 8:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
        return _this;
    }

    return ReverseEnumerable;
}(_IEnumerable3.default);

;

exports.default = ReverseEnumerable;