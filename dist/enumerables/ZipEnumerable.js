'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = require('./../IEnumerable');

var core = require('./../core/core');

var ZipEnumerable = function (_IEnumerable) {
    _inherits(ZipEnumerable, _IEnumerable);

    function ZipEnumerable(source, other, resultSelector) {
        _classCallCheck(this, ZipEnumerable);

        var _this = _possibleConstructorReturn(this, (ZipEnumerable.__proto__ || Object.getPrototypeOf(ZipEnumerable)).call(this, source));

        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            var sourceIterator, otherIterator, sourceElement, otherElement;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            sourceIterator = source[Symbol.iterator]();
                            otherIterator = other[Symbol.iterator]();
                            sourceElement = void 0, otherElement = void 0;

                        case 3:
                            sourceElement = sourceIterator.next();
                            otherElement = otherIterator.next();

                            if (!(!sourceElement.done && !otherElement.done)) {
                                _context.next = 8;
                                break;
                            }

                            _context.next = 8;
                            return resultSelector(sourceElement.value, otherElement.value);

                        case 8:
                            if (!(sourceElement.done && otherElement.done)) {
                                _context.next = 3;
                                break;
                            }

                        case 9:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
        return _this;
    }

    return ZipEnumerable;
}(IEnumerable);

;

module.exports = ZipEnumerable;