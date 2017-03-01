'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = require('./../IEnumerable');

var core = require('./../core/core');

var Enumerable = require('./../Enumerable');

var defaultSelector = require('./../methods/defaultSelector');
var defaultGroupResultSelector = require('./../methods/defaultGroupResultSelector');
var defaultEqualityComparer = require('./../methods/defaultEqualityComparer');
var equalityPredicate = require('./../methods/equalityPredicate');

var IGrouping = require('./IGrouping');

var GroupingEnumerable = function (_IEnumerable) {
    _inherits(GroupingEnumerable, _IEnumerable);

    function GroupingEnumerable(source) {
        var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
        var elementSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
        var resultSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultGroupResultSelector;
        var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;

        _classCallCheck(this, GroupingEnumerable);

        var _this = _possibleConstructorReturn(this, (GroupingEnumerable.__proto__ || Object.getPrototypeOf(GroupingEnumerable)).call(this, source));

        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee2() {
            var groupings, iterators, noneKey, it, hasNext;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            groupings = [];
                            iterators = new Map();
                            noneKey = Symbol('noneKey');
                            it = source[Symbol.iterator]();

                            hasNext = function hasNext() {
                                var next = it.next();
                                if (!next.done) {
                                    var key = keySelector(next.value);
                                    var element = elementSelector(next.value);
                                    var trueKey = Enumerable.where(iterators.keys(), equalityPredicate(key, comparer)).firstOrDefault(noneKey);
                                    if (trueKey === noneKey) {
                                        iterators.set(key, []);
                                        groupings.push(new IGrouping(key, _defineProperty({}, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
                                            var array;
                                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                                while (1) {
                                                    switch (_context.prev = _context.next) {
                                                        case 0:
                                                            array = iterators.get(key);

                                                        case 1:
                                                            if (!(array.length > 0 || hasNext())) {
                                                                _context.next = 7;
                                                                break;
                                                            }

                                                            if (!(array.length > 0)) {
                                                                _context.next = 5;
                                                                break;
                                                            }

                                                            _context.next = 5;
                                                            return array.shift();

                                                        case 5:
                                                            _context.next = 1;
                                                            break;

                                                        case 7:
                                                        case 'end':
                                                            return _context.stop();
                                                    }
                                                }
                                            }, _callee, this);
                                        }))));
                                    }
                                    iterators.get(key).push(element);
                                }
                                return !next.done;
                            };

                        case 5:
                            if (!(groupings.length > 0 || hasNext())) {
                                _context2.next = 11;
                                break;
                            }

                            if (!(groupings.length > 0)) {
                                _context2.next = 9;
                                break;
                            }

                            _context2.next = 9;
                            return resultSelector(Enumerable.first(groupings).key, groupings.shift());

                        case 9:
                            _context2.next = 5;
                            break;

                        case 11:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));
        return _this;
    }

    return GroupingEnumerable;
}(IEnumerable);

;

module.exports = GroupingEnumerable;