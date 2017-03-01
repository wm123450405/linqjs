'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = require('./../IEnumerable');

var core = require('./../core/core');

var ConcatEnumerable = function (_IEnumerable) {
    _inherits(ConcatEnumerable, _IEnumerable);

    function ConcatEnumerable(source) {
        var other = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        _classCallCheck(this, ConcatEnumerable);

        var _this = _possibleConstructorReturn(this, (ConcatEnumerable.__proto__ || Object.getPrototypeOf(ConcatEnumerable)).call(this, source));

        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            return _context.delegateYield(source, 't0', 1);

                        case 1:
                            return _context.delegateYield(other, 't1', 2);

                        case 2:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
        return _this;
    }

    return ConcatEnumerable;
}(IEnumerable);

;

module.exports = ConcatEnumerable;