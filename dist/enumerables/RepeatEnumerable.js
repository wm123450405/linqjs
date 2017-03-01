'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = require('./../IEnumerable');

var core = require('./../core/core');

var RepeatEnumerable = function (_IEnumerable) {
    _inherits(RepeatEnumerable, _IEnumerable);

    function RepeatEnumerable(element) {
        var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, RepeatEnumerable);

        var _this = _possibleConstructorReturn(this, (RepeatEnumerable.__proto__ || Object.getPrototypeOf(RepeatEnumerable)).call(this, []));

        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            var i;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            i = 0;

                        case 1:
                            if (!(i < count)) {
                                _context.next = 7;
                                break;
                            }

                            _context.next = 4;
                            return element;

                        case 4:
                            i++;
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

    return RepeatEnumerable;
}(IEnumerable);

;

module.exports = RepeatEnumerable;