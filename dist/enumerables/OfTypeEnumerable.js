'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = require('./../IEnumerable');

var core = require('./../core/core');

var isInstanceofString = function isInstanceofString(element) {
    return element instanceof String || typeof element === 'string';
};
var isInstanceofArray = function isInstanceofArray(element) {
    return element instanceof Array;
};
var isInstanceofObject = function isInstanceofObject(element) {
    return element instanceof Object;
};
var isInstanceofNumber = function isInstanceofNumber(element) {
    return element instanceof Number || typeof element === 'number';
};
var isInstanceofFunction = function isInstanceofFunction(element) {
    return element instanceof Function || typeof element === 'function';
};
var isInstanceof = function isInstanceof(type) {
    return function (element) {
        return element instanceof type;
    };
};

var OfTypeEnumerable = function (_IEnumerable) {
    _inherits(OfTypeEnumerable, _IEnumerable);

    function OfTypeEnumerable(source, type) {
        _classCallCheck(this, OfTypeEnumerable);

        var _this = _possibleConstructorReturn(this, (OfTypeEnumerable.__proto__ || Object.getPrototypeOf(OfTypeEnumerable)).call(this, source));

        var is = type === String ? isInstanceofString : type === Array ? isInstanceofArray : type === Object ? isInstanceofObject : type === Number ? isInstanceofNumber : type === Function ? isInstanceofFunction : isInstanceof(type);
        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, element;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 3;
                            _iterator = source[Symbol.iterator]();

                        case 5:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context.next = 13;
                                break;
                            }

                            element = _step.value;

                            if (!is(element)) {
                                _context.next = 10;
                                break;
                            }

                            _context.next = 10;
                            return element;

                        case 10:
                            _iteratorNormalCompletion = true;
                            _context.next = 5;
                            break;

                        case 13:
                            _context.next = 19;
                            break;

                        case 15:
                            _context.prev = 15;
                            _context.t0 = _context['catch'](3);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                        case 19:
                            _context.prev = 19;
                            _context.prev = 20;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 22:
                            _context.prev = 22;

                            if (!_didIteratorError) {
                                _context.next = 25;
                                break;
                            }

                            throw _iteratorError;

                        case 25:
                            return _context.finish(22);

                        case 26:
                            return _context.finish(19);

                        case 27:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[3, 15, 19, 27], [20,, 22, 26]]);
        }));
        return _this;
    }

    return OfTypeEnumerable;
}(IEnumerable);

;

module.exports = OfTypeEnumerable;