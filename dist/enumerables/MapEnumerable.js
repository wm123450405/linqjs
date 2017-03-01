'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IMapEnumerable = require('./IMapEnumerable');

var core = require('./../core/core');

var defaultEqualityComparer = require('./../methods/defaultEqualityComparer');
var equalityPredicate = require('./../methods/equalityPredicate');

var Entry = require('./Entry');

var MapEnumerable = function (_IMapEnumerable) {
    _inherits(MapEnumerable, _IMapEnumerable);

    function MapEnumerable(map) {
        _classCallCheck(this, MapEnumerable);

        var _this = _possibleConstructorReturn(this, (MapEnumerable.__proto__ || Object.getPrototypeOf(MapEnumerable)).call(this));

        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 3;
                            _iterator = map.keys()[Symbol.iterator]();

                        case 5:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context.next = 12;
                                break;
                            }

                            key = _step.value;
                            _context.next = 9;
                            return new Entry(key, map.get(key));

                        case 9:
                            _iteratorNormalCompletion = true;
                            _context.next = 5;
                            break;

                        case 12:
                            _context.next = 18;
                            break;

                        case 14:
                            _context.prev = 14;
                            _context.t0 = _context['catch'](3);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                        case 18:
                            _context.prev = 18;
                            _context.prev = 19;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 21:
                            _context.prev = 21;

                            if (!_didIteratorError) {
                                _context.next = 24;
                                break;
                            }

                            throw _iteratorError;

                        case 24:
                            return _context.finish(21);

                        case 25:
                            return _context.finish(18);

                        case 26:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[3, 14, 18, 26], [19,, 21, 25]]);
        }));
        core.defineProperties(_this, {
            get: function get(key) {
                var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;

                return map.get(map.keys().asEnumerable().single(equalityPredicate(key, comparer)));
            },
            set: function set(key, value) {
                var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

                return map.set(map.keys().asEnumerable().singleOrDefault(key, equalityPredicate(key, comparer)), value);
            },
            has: function has(key) {
                var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;

                return map.keys().asEnumerable().contains(key, comparer);
            },
            delete: function _delete(key) {
                var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;

                return map.delete(map.keys().asEnumerable().single(equalityPredicate(key, comparer)));
            },
            keys: function keys() {
                return map.keys().asEnumerable();
            },
            values: function values() {
                return map.values.asEnumerable();
            },
            entries: function entries() {
                return map.entries().asEnumerable();
            }
        });
        return _this;
    }

    return MapEnumerable;
}(IMapEnumerable);

;

module.exports = MapEnumerable;