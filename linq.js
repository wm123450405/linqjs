/**

author:wm
email:491029934@qq.com

deal javascript array or string as sql
use linq and lambda in javascript

http://github.com/wm123450405/linqjs

select * from _$0 => from x in _$0 select x;
select _$0.col from _$0 => from x in _$0 select x.col;
select count(1) from _$0 => from x in _$0 select count(1);
*/
(function Linq() {
	var sp = String.prototype;
	var op = Object.prototype;
	var ap = Array.prototype;
	var np = Number.prototype;
	var fp = Function.prototype;

	var st = 'string';
	var nt = 'number';
	var ot = 'object';
	var bt = 'boolean';
	var ft = 'function';
	var ut = 'undefined';

	var keywords = ['select', 'where', 'in', 'on', 'key', 'join', 'order', 'group', 'by', 'length', 'max', 'min', 'count', 'sum', 'avg', 'from', 'value', 'prev', 'next', 'index'];
	var functions = ['cast', 'select', 'forEach', 'single', 'any', 'all', 'count', 'first', 'concat', 'union', 'exists', 'empty', 'except', 'intersect', 'last', 'reverse', 'sequenceEqual', 'findFirst', 'findFirstIndex', 'findLast', 'findLastIndex', 'skip', 'skipWhile', 'take', 'takeWhile', 'where', 'zip', 'sum', 'max', 'min', 'avgrage', 'aggregate', 'orderBy', 'orderByDescending', 'groupBy', 'joinBy', 'groupJoin', 'defaultIfEmpty', 'selectMany', 'toLookup', 'thenBy', 'thenByDescending', 'query', 'range', 'repeat', 'replace', 'an'];

	var aggfuns = [{
		name: 'max',
		fun: 'maxLazy'
	}, {
		name: 'min',
		fun: 'minLazy'
	}, {
		name: 'count',
		fun: 'countLazy'
	}, {
		name: 'avg',
		fun: 'averageLazy'
	}, {
		name: 'sum',
		fun: 'sumLazy'
	}, {
		name: 'agg',
		fun: 'aggregateLazy',
		params: ['seed']
	}];

	var joinfuns = [{
		name: 'default',
		fun: 'joinByLazy'
	}, {
		name: 'inner',
		fun: 'joinByLazy'
	}];

	var orderfuns = [{
		name: 'order',
		asc: 'orderByLazy',
		desc: 'orderByDescendingLazy',
		subasc: 'thenByLazy',
		subdesc: 'thenByDescendingLazy'
	}]

	var groupfuns = [{
		name: 'near',
		fun: 'nearByLazy'
	}, {
		name: 'group',
		fun: 'groupByLazy'
	}];

	var byfuns = ['group', 'near', 'order'];

	var controlkeys = ['from', 'in', 'select', 'where', 'on', 'having'];

	function funname(fun) {
		return fun.name;
	}

	var __define = Object.defineProperty || function(obj, name, descriptor) {
		obj[name] = descriptor.value;
	};
	var define = function(obj, name, value, full) {
		if (an(obj, Array) && !full) {
			for (var i = 0; i < obj.length; i++) {
				define(obj[i], name, value);
			}
			return;
		}
		__define(obj, name, {
			value: value,
			enumable: false,
			writable: true,
			configurable: true
		});
	};

	var _define = function(obj, name, value) {
		__define(obj, name, {
			value: value,
			enumable: false,
			writable: false,
			configurable: false
		});
	};

	function an(element) {
		for (var i = 1; i < arguments.length; i++) {
			if (typeof(arguments[i]) === 'string') {
				if (typeof(element) === arguments[i]) {
					return true;
				}
			} else if (element instanceof arguments[i]) {
				return true;
			}
		}
		return false;
	}

	function toLinqFun(fun) {
		var index = -1;
		if (an(fun, st) && (index = fun.indexOf('=>')) != -1) {
			var args = fun.substring(0, index).replace(/\s/g, '') || Array.range(1, fun.select(/_$(\d+)/g, 1).cast(parseInt).max() || 1).select(function(x) {
				return '_$' + x;
			}).join(',');
			var funBody = fun.substring(index + 2).trim();
			if (funBody.startsWith('new')) {
				funBody = 'return' + funBody.substring(3);
			} else if (funBody.startsWith('{') && funBody.endsWith('}')) {
				funBody = funBody.substring(1, funBody.length - 1);
			} else {
				funBody = 'return ' + funBody;
			}
			fun = new Function(args, funBody);
		}
		return fun;
	}

	function fieldFun(fun) {
		fun = toLinqFun(fun || function(o) {
			return o;
		});
		if (an(fun, st)) {
			if (fun.indexOf(',') != -1) {
				fun = fun.split(',').select(function(f) {
					return f.trim()
				});
				return function(o) {
					var result = {};
					for (var i = 0; i < fun.length; i++) {
						result[fun[i]] = o[fun[i]];
					}
					return result;
				};
			} else {
				return function(o) {
					return o[fun];
				};
			}
		} else {
			return fun;
		}
	}

	function exists(arg) {
		return (arg === 0 || arg === false || arg === '' || arg) ? true : false;
	}

	function fieldComparer(fun) {
		fun = toLinqFun(fun || function(a, b) {
			return (a == b || (exists(a) && exists(b) && a.valueOf() == b.valueOf())) ? 0 : a > b ? 1 : -1;
		});
		if (an(fun, st)) {
			if (fun == 'key') {
				return function(a, b) {
					if (a == b) {
						return true;
					} else if (exists(a) && exists(b)) {
						if (a.valueOf() == b.valueOf()) {
							return true;
						}
						a = a.key;
						b = b.key;
						if (a == b) {
							return true;
						} else if (exists(a) && exists(b)) {
							a = a.valueOf();
							b = b.valueOf();
							if (a == b) {
								return true;
							}
							if (an(a, ot) && an(b, ot)) {
								var keyCount = 0;
								for (var key in a) {
									if (key in b) {
										if (a[key] != b[key]) {
											return false;
										}
									} else {
										return false;
									}
									keyCount++;
								}
								for (var key in b) {
									keyCount--;
									if (keyCount < 0) {
										return false;
									}
								}
								return true;
							} else {
								return false;
							}
						} else {
							return false;
						}
					} else {
						return false;
					}
				};
			} else {
				fun = fun.split(',');
				return function(a, b) {
					if (a == b) {
						return true;
					}
					if (exists(a) && exists(b)) {
						if (a.valueOf() == b.valueOf()) {
							return true;
						} else {
							if (fun.exists(function(key) {
									return a[key] != b[key];
								})) {
								return false;
							} else {
								return true;
							}
						}
					} else {
						return false;
					}
				};
			}
		} else {
			return fun;
		}
	}

	var sort = ap.sort;
	define(ap, 'sort', function() {
		sort.apply(this, arguments);
		return this;
	});

	var slice = ap.slice;
	define(ap, 'slice', function() {
		var result = slice.apply(this, arguments);
		define(result, 'join', this.join || ap.join, true);
		return result;
	});
	define(sp, 'slice', sp.slice || function() {
		var result = slice.apply(this, arguments);
		define(result, 'join', this.join || function(split) {
			return ap.join.call(this, split || '');
		}, true);
		return result;
	});

	var split = sp.split;
	define(sp, 'split', function(s) {
		if (an(s, Function)) {
			var result = ''.empty();
			var length = -1;
			var index = 0;
			for (var i = 0; i < this.length; i++) {
				length = s.call(this, this[i], i, this[i - 1], this[i + 1]);
				if (length > 0) {
					result.push(this.slice(index, i));
					i += length;
					index = i;
				}
			}
			if (index < this.length) {
				result.push(this.slice(index));
			}
			return result;
		} else {
			return split.apply(this, arguments);
		}
	});

	define(sp, 'trim', function() {
		return this.replace(/^[\s\x00]+|[\s\x00]+$/g, '');
	});
	define(ap, 'trim', function() {
		return this.skipWhile(function(e) {
			return !exists(e);
		}).skipRightWhile(function(e) {
			return !exists(e);
		});
	});
	define(sp, 'ltrim', function() {
		return this.replace(/^[\s\x00]+/g, '');
	});
	define(ap, 'ltrim', function() {
		return this.skipWhile(function(e) {
			return !exists(e);
		});
	});
	define(sp, 'rtrim', function() {
		return this.replace(/[\s\x00]+$/g, '');
	});
	define(ap, 'rtrim', function() {
		return this.skipRightWhile(function(e) {
			return !exists(e);
		});
	});
	define(sp, 'leftPad', function(length, ch) {
		ch = ch || ' ';
		return String.repeat(ch, Math.max(0, length - this.length)) + this;
	});
	define(ap, 'leftPad', function(length, element) {
		return this.empty().concat(Array.repeat(element, Math.max(0, length - this.length))).concat(this);
	});
	define(np, 'leftPad', function(fixed, length) {
		var result;
		if (an(length, ut)) {
			length = fixed;
			result = this.toString();
		} else {
			result = this.toFixed(fixed);
		}
		return result.leftPad(length, ' ');
	});
	define(sp, 'rightPad', function(length, ch) {
		ch = ch || ' ';
		return this + String.repeat(ch, Math.max(0, length - this.length));
	});
	define(ap, 'rightPad', function(length, element) {
		return this.empty().concat(this).concat(Array.repeat(element, Math.max(0, length - this.length)));
	});
	define(np, 'rightPad', function(fixed, length) {
		var result;
		if (an(length, ut)) {
			length = fixed;
			fixed = 0;
			result = this.toString();
		} else {
			result = this.toFixed(fixed)
		}
		if (fixed == 0) {
			if (result.length < length) {
				result += result.exists('.') ? '' : '.';
				return result.rightPad(length, '0');
			} else {
				return result;
			}
		} else {
			return result.rightPad(length, '0');
		}
	});
	define(np, 'format', function(fixed) {
		var result;
		if (an(fixed, ut)) {
			result = '' + this;
		} else {
			result = this.toFixed(fixed);
		};
		var pointIndex = result.indexOf('.');
		if (pointIndex == -1) {
			return result.brokeRight(3).join(',');
		} else {
			return result.substring(0, pointIndex).brokeRight(3).join(',') + result.substring(pointIndex);
		}
	});

	define(sp, 'splice', function(index, length) {
		return this.substring(0, index) + ap.slice.call(arguments, 2).join('') + this.substring(index + length);
	});

	var random = Math.random;
	Math.random = function(start, end) {
		if (arguments.length == 0) {
			return random();
		}
		if (arguments.length == 1) {
			end = start;
			start = 0;
		}
		return random() * (end - start) + start;
	};
	Math.rand = Math.randomInt = function(start, end) {
		if (arguments.length == 0) {
			return parseInt(('' + random()).substring(2));
		}
		return Math.floor(Math.random.apply(this, arguments));
	};

	define(sp, 'code', function() {
		return this.charCodeAt(0);
	});
	define(sp, 'codes', function() {
		var result = new Array(this.length);
		for (var i = 0; i < this.length; i++) {
			result[i] = this[i].charCodeAt(0);
		}
		return result;
	});

	define([sp, np], 'char', function() {
		return String.fromCharCode(this);
	});
	define([sp, np], 'chars', function() {
		return String.fromCharCode(this);
	});
	define(ap, 'chars', function() {
		return String.fromCharCode.apply(this, this);
	});

	define([sp, np], 'loop', function(start, fun) {
		if (arguments.length == 1) {
			fun = start;
			start = 0;
		}
		start = start || 0;
		fun = toLinqFun(fun);
		var count = parseInt(this);
		for (var i = 0, n = start; i < count; i++, n++) {
			fun.call(this, i, n);
		}
	});

	define([sp, ap], 'random', function(count) {
		count = count || 1;
		if (count == 1) {
			return this[Math.randomInt(0, this.length)];
		} else {
			return this.shuffle().slice(0, count);
		}
	});


	/**
		cast each element with fun
		@params fun function(element)
	*/
	define([sp, ap], 'cast', function(fun) {
		var result = this.empty(this.length);
		for (var i = 0; i < this.length; i++) {
			result[i] = fun.call(this, this[i]);
		}
		return result;
	});
	/**
		loop each element convert with fun
		@params fun function(element) or string or RegExp
			if fun is a function: return cast(fun)
			if fun is a string: return a list of property like fun in each element
			if fun is a RegExp: return a list of search in this string with fun
		@params index int
			if fun is a RegExp, get search result with index in regex groups
	*/
	define(sp, 'select', function(fun, index) {
		if (an(fun, RegExp)) {
			index = index || 0;
			var result = [];
			this.replace(fun, function(w) {
				result.push(arguments[index]);
				return w;
			});
			return result;
		} else {
			return ap.select.call(this, fun);
		}
	});
	define(ap, 'select', function(fun) {
		var result = this.empty(this.length);
		fun = fieldFun(fun);
		for (var i = 0; i < this.length; i++) {
			result[i] = fun.call(this, this[i], i, this[i - 1], this[i + 1]);
		}
		return result;
	});
	/*
	define(ap, 'replace', function(fun) {
		fun = toLinqFun(fun);
		for (var i = 0; i < this.length; i++) {
			this[i] = fun.call(this, this[i], i, this[i - 1], this[i + 1]);
		}
		return this;
	});
*/
	define([sp, ap], 'forEach', function(fun) {
		fun = toLinqFun(fun);
		for (var i = 0; i < this.length; i++) {
			if (fun.call(this, this[i], i, this[i - 1], this[i + 1]) === false) {
				return this;
			}
		}
		return this;
	});
	define([sp, ap], 'single', function(fun) {
		if (fun) {
			fun = toLinqFun(fun);
			for (var i = 0; i < this.length; i++) {
				if (fun.call(this, this[i], i, this[i - 1], this[i + 1])) {
					return this[i];
				}
			}
			return null;
		} else {
			return this.first();
		}
	});
	define([sp, ap], 'any', function(fun) {
		if (fun) {
			fun = toLinqFun(fun);
			for (var i = 0; i < this.length; i++) {
				if (fun.call(this, this[i], i, this[i - 1], this[i + 1])) {
					return true;
				}
			}
			return false;
		} else {
			return this.length > 0;
		}
	});
	define([sp, ap], 'all', function(fun) {
		fun = toLinqFun(fun);
		for (var i = 0; i < this.length; i++) {
			if (!fun.call(this, this[i], i, this[i - 1], this[i + 1])) {
				return false;
			}
		}
		return true;
	});
	define([sp, ap], 'count', function(fun) {
		fun = toLinqFun(fun);
		var count = 0;
		if (an(fun, ut)) {
			return this.length;
		} else if (an(fun, Function)) {
			for (var i = 0; i < this.length; i++) {
				if (fun.call(this, this[i], i, this[i - 1], this[i + 1])) {
					count++;
				}
			}
		} else {
			for (var i = 0; i < this.length; i++) {
				if (this[i] == fun || (exists(this[i]) && exists(fun) && this[i].valueOf() == fun.valueOf())) {
					count++;
				}
			}
		}
		return count;
	});
	define([sp, ap], 'first', function() {
		return this.length > 0 ? this[0] : null;
	});
	define([sp, ap], 'concat', function(other) {
		var result = this.empty(this.length + other.length);
		var index = 0;
		for (var i = 0; i < this.length; i++, index++) {
			result[index] = this[i];
		}
		for (var i = 0; i < other.length; i++, index++) {
			result[index] = other[i];
		}
		return result;
	});
	define([sp, ap], 'union', function(other, fun) {
		var result = this.empty();
		for (var i = 0; i < this.length; i++) {
			if (!result.exists(this[i], fun)) {
				result.push(this[i]);
			}
		}
		for (var i = 0; i < other.length; i++) {
			if (!result.exists(other[i], fun)) {
				result.push(other[i]);
			}
		}
		return result;
	});
	define([sp, ap], 'exists', function(element, fun) {
		var result = this.findFirstIndex(element, fun) != -1;
		if (!result && (an(element, Array))) {
			for (var i = 0; i < element.length; i++) {
				if (this.findFirstIndex(element, fun) != -1) {
					return true;
				}
			}
			return false;
		} else {
			return result;
		}
	});
	define([sp, ap], 'existsAll', function(other, fun) {
		for (var i = 0; i < other.length; i++) {
			if (!this.exists(other[i])) {
				return false;
			}
		}
		return true;
	});
	define([sp, ap], 'distinct', function(fun) {
		var result = this.empty();
		for (var i = 0; i < this.length; i++) {
			if (!result.exists(this[i], fun)) {
				result.push(this[i]);
			}
		}
		return result;
	});
	define(sp, 'empty', function(length) {
		var a = new Array(length || 0);
		define(a, 'join', function(split) {
			return ap.join.call(this, split || '');
		}, true);
		return a;
	});
	define(ap, 'empty', function(length) {
		var a = new Array(length || 0);
		define(a, 'join', this.join, true);
		return a;
	});
	define([sp, ap], 'except', function(other, fun) {
		var result = this.empty();
		for (var i = 0; i < this.length; i++) {
			if (!other.exists(this[i], fun)) {
				result.push(this[i]);
			}
		}
		return result;
	});
	define([sp, ap], 'intersect', function(other, fun) {
		var result = this.empty();
		for (var i = 0; i < this.length; i++) {
			if (other.exists(this[i], fun)) {
				result.push(this[i]);
			}
		}
		return result;
	});
	define([sp, ap], 'last', function() {
		return this.length > 0 ? this[this.length - 1] : null;
	});
	define(ap, 'reverse', function() {
		var result = this.empty(this.length);
		for (var i = this.length - 1, j = 0; i >= 0; i--, j++) {
			result[j] = this[i];
		}
		return result;
	});
	define(sp, 'reverse', function() {
		var result = '';
		for (var i = this.length - 1; i >= 0; i--) {
			result += this[i];
		}
		return result;
	});
	define(ap, 'shuffle', function(start, len) {
		start = start || 0;
		var end = len ? Math.min(this.length, start + len) : this.length;
		var index, temp;
		var result = this.slice(0);
		for (var i = start; i < end; i++) {
			index = Math.randomInt(start, end);
			if (index != i) {
				temp = result[i];
				result[i] = result[index];
				result[index] = temp;
			}
		};
		return result;
	});
	define(sp, 'shuffle', function(start, len) {
		start = start || 0;
		var end = len ? Math.min(this.length, start + len) : this.length;
		len = end - start;
		var index, temp;
		var result = this.substring(start, end).toArray();
		for (var i = start; i < end; i++) {
			index = Math.randomInt(len);
			if (index != i) {
				temp = result[i];
				result[i] = result[index];
				result[index] = temp;
			}
		};
		return this.substring(0, start) + result.join('') + this.substring(end);
	});
	define([sp, ap], 'sequenceEqual', function(other, fun, start, len) {
		if (this == other) {
			return true;
		}
		if (!isNaN(fun)) {
			len = start;
			start = fun;
			fun = null;
		}
		start = start || 0;
		end = len ? Math.min(this.length, start + len) : this.length;
		if ((this.length < end || other.length < end || !len) && this.length != other.length) {
			return false;
		}
		fun = fieldComparer(fun);
		var result;
		for (var i = start; i < end; i++) {
			result = fun.call(this, this[i], other[i]);
			if (!(result === true || result === 0)) {
				return false;
			}
		}
		return true;
	});
	define([sp, ap], 'findFirst', function(element, index, fun) {
		return this[this.findFirstIndex(element, index, fun)];
	});
	define([sp, ap], 'findFirstIndex', function(element, index, fun) {
		var count = parseInt(index) || 0;
		if (fun || (exists(index) && isNaN(index))) {
			fun = fieldComparer(fun || index);
			var result;
			for (var i = 0; i < this.length; i++) {
				result = fun.call(this, this[i], element);
				if (result === true || result === 0) {
					if (count == 0) {
						return i;
					} else {
						count--;
					}
				}
			}
		} else {
			element = toLinqFun(element);
			if (an(element, Function)) {
				fun = element;
				var result;
				for (var i = 0; i < this.length; i++) {
					result = fun.call(this, this[i], i, this[i - 1], this[i + 1]);
					if (result === true || result === 0) {
						if (count == 0) {
							return i;
						} else {
							count--;
						}
					}
				}
			} else {
				for (var i = 0; i < this.length; i++) {
					if (this[i] == element || (exists(this[i]) && exists(element) && this[i].valueOf() == element.valueOf())) {
						if (count == 0) {
							return i;
						} else {
							count--;
						}
					}
				}
			}
		}
		return -1;
	});
	define([sp, ap], 'findLast', function(element, index, fun) {
		return this[this.findLastIndex(element, index, fun)];
	});
	define([sp, ap], 'findLastIndex', function(element, index, fun) {
		var count = parseInt(index) || 0;
		if (fun || (exists(index) && isNaN(index))) {
			fun = fieldComparer(fun || index);
			var result;
			for (var i = this.length - 1; i >= 0; i--) {
				result = fun.call(this, this[i], element);
				if (result === true || result === 0) {
					if (count == 0) {
						return i;
					} else {
						count--;
					}
				}
			}
		} else {
			element = toLinqFun(element);
			if (an(element, Function)) {
				fun = element;
				var result;
				for (var i = this.length - 1; i >= 0; i--) {
					result = fun.call(this, this[i], i, this[i - 1], this[i + 1]);
					if (result === true || result === 0) {
						if (count == 0) {
							return i;
						} else {
							count--;
						}
					}
				}
			} else {
				for (var i = this.length - 1; i >= 0; i--) {
					if (this[i] == element || (exists(this[i]) && exists(element) && this[i].valueOf() == element.valueOf())) {
						if (count == 0) {
							return i;
						} else {
							count--;
						}
					}
				}
			}
		}
		return -1;
	});
	define([sp, ap], 'limit', function(start, count) {
		return this.slice(start, start + count);
	});
	define([sp, ap], 'skip', function(count) {
		return this.slice(count);
	});
	define([sp, ap], 'skipRight', function(count) {
		return this.slice(0, -count);
	});
	define([sp, ap], 'skipWhile', function(fun) {
		fun = toLinqFun(fun);
		if (an(fun, Function)) {
			var result;
			for (var i = 0; i < this.length; i++) {
				result = fun.call(this, this[i], i, this[i - 1], this[i + 1]);
				if (result !== true && result !== 0) {
					return this.slice(i);
				}
			}
		} else {
			var result;
			for (var i = 0; i < this.length; i++) {
				if (!(result == this[i] || (exists(this[i]) && exists(result) && this[i].valueOf() == result.valueOf()))) {
					return this.slice(i);
				}
			}
		}
	});
	define([sp, ap], 'skipRightWhile', function(fun) {
		fun = toLinqFun(fun);
		if (an(fun, Function)) {
			var result;
			for (var i = this.length - 1; i >= 0; i--) {
				result = fun.call(this, this[i], i, this[i - 1], this[i + 1]);
				if (result !== true && result !== 0) {
					return this.slice(0, i + 1);
				}
			}
		} else {
			var result;
			for (var i = this.length - 1; i >= 0; i--) {
				if (!(result == this[i] || (exists(this[i]) && exists(result) && this[i].valueOf() == result.valueOf()))) {
					return this.slice(0, i + 1);
				}
			}
		}
	});
	define([sp, ap], 'take', function(count) {
		return this.slice(0, count);
	});
	define([sp, ap], 'takeRight', function(count) {
		return this.slice(-count);
	});
	define([sp, ap], 'takeWhile', function(fun) {
		fun = toLinqFun(fun);
		if (an(fun, Function)) {
			var result;
			for (var i = 0; i < this.length; i++) {
				result = fun.call(this, this[i], i, this[i - 1], this[i + 1]);
				if (result !== true && result !== 0) {
					return this.slice(0, i);
				}
			}
		} else {
			var result;
			for (var i = 0; i < this.length; i++) {
				if (!(result == this[i] || (exists(this[i]) && exists(result) && this[i].valueOf() == result.valueOf()))) {
					return this.slice(0, i);
				}
			}
		}
	});
	define([sp, ap], 'takeRightWhile', function(fun) {
		fun = toLinqFun(fun);
		if (an(fun, Function)) {
			var result;
			for (var i = this.length - 1; i >= 0; i--) {
				result = fun.call(this, this[i], i, this[i - 1], this[i + 1]);
				if (result !== true && result !== 0) {
					return this.slice(i + 1);
				}
			}
		} else {
			var result;
			for (var i = this.length - 1; i >= 0; i--) {
				if (!(result == this[i] || (exists(this[i]) && exists(result) && this[i].valueOf() == result.valueOf()))) {
					return this.slice(i + 1);
				}
			}
		}
	});
	define([sp, ap], 'wipe', function(fun, count) {
		if (arguments.length > 1) {
			var elements = ap.slice.call(arguments, 0);
			return this.except(elements);
		} else if (an(fun, Array) && !(an(fun, Grouping, Joins))) {
			return this.except(fun);
		} else {
			fun = toLinqFun(fun);
		}
		count = an(count, ut) ? -1 : count;
		var result = this.empty();
		if (an(fun, Function)) {
			var compareResult;
			for (var i = 0; i < this.length; i++) {
				if (count == 0) {
					result.push(this[i]);
				} else {
					compareResult = fun.call(this, this[i], i, this[i - 1], this[i + 1]);
					if (compareResult !== true && compareResult !== 0) {
						result.push(this[i]);
					} else {
						count--;
					}
				}
			}
		} else {
			for (var i = 0; i < this.length; i++) {
				if (count == 0 || !(this[i] == fun || (exists(this[i]) && exists(fun) && this[i].valueOf() == fun.valueOf()))) {
					result.push(this[i]);
				} else {
					count--;
				}
			}
		}
		return result;
	});
	define([sp, ap], 'where', function(fun, count) {
		if (arguments.length > 1) {
			var elements = ap.slice.call(arguments, 0);
			return this.intersect(elements);
		} else if (an(fun, Array) && !(an(fun, Grouping, Joins))) {
			return this.intersect(fun);
		} else {
			fun = toLinqFun(fun);
		}
		count = an(count, ut) ? -1 : count;
		var result = this.empty();
		if (an(fun, Function)) {
			var compareResult;
			for (var i = 0; i < this.length; i++) {
				if (count == 0) {
					result.push(this[i]);
				} else {
					compareResult = fun.call(this, this[i], i, this[i - 1], this[i + 1]);
					if (compareResult === true || compareResult === 0) {
						result.push(this[i]);
					} else {
						count--;
					}
				}
			}
		} else {
			for (var i = 0; i < this.length; i++) {
				if (count == 0 || this[i] == fun || (exists(this[i]) && exists(fun) && this[i].valueOf() == fun.valueOf())) {
					result.push(this[i]);
				} else {
					count--;
				}
			}
		}
		return result;
	});
	define([sp, ap], 'zip', function(other, fun) {
		fun = toLinqFun(fun);
		var result = this.empty(Math.min(this.length, other.length));
		for (var i = 0; i < this.length && i < other.length; i++) {
			result[i] = fun.call(this, this[i], other[i], i);
		}
		return result;
	});
	define([sp, ap], 'sum', function(fun) {
		var sum = 0;
		fun = fieldFun(fun);
		for (var i = 0; i < this.length; i++) {

			var value = parseFloat(fun.call(this, this[i], i, this[i - 1], this[i + 1]));
			//console.log(value);
			sum += value;
			//sum += parseFloat(fun.call(this, this[i], i, this[i - 1], this[i + 1]));
		}
		return sum;
	});
	define([sp, ap], 'max', function(fun, comparer) {
		if (!this.length) {
			return null;
		}
		fun = fieldFun(fun);
		comparer = fieldComparer(comparer);
		var max = fun.call(this, this[0], 0, null, this[1]);
		var result, value;
		for (var i = 1; i < this.length; i++) {
			value = fun.call(this, this[i], i, this[i - 1], this[i + 1]);
			result = comparer.call(this, value, max);
			if (result > 0) {
				max = value;
			}
		}
		return max;
	});
	define([sp, ap], 'min', function(fun, comparer) {
		if (!this.length) {
			return null;
		}
		fun = fieldFun(fun);
		comparer = fieldComparer(comparer);
		var min = fun.call(this, this[0], 0, null, this[1]);
		var result, value;
		for (var i = 1; i < this.length; i++) {
			value = fun.call(this, this[i], i, this[i - 1], this[i + 1]);
			result = comparer.call(this, value, min);
			if (result < 0) {
				min = value;
			}
		}
		return min;
	});
	define([sp, ap], 'average', function(fun) {
		if (!this.length) {
			return null;
		}
		return this.sum(fun) / this.length;
	});
	define([sp, ap], 'aggregate', function(fun, seed, resultSelector) {
		if (!this.length) {
			return seed;
		}
		if (arguments.length == 1) {
			fun = seed;
			seed = null;
		}
		fun = toLinqFun(fun);
		var result = seed;
		for (var i = 0; i < this.length; i++) {
			result = fun.call(this, this[i], result, i, this[i - 1], this[i + 1]);
		}
		if (resultSelector) {
			return result.select(resultSelector);
		} else {
			return result;
		}
	});
	define([sp, ap], 'orderBy', function(fun, comparer) {
		return new OrderByArray(this, [fieldFun(fun)], [fieldComparer(comparer)]);
	});
	define([sp, ap], 'orderByDescending', function(fun, comparer) {
		return new OrderByArray(this, [fieldFun(fun)], [function(a, b) {
			return -(fieldComparer(comparer))(a, b);
		}]);
	});
	define([sp, ap], 'broke', function(count) {
		var result = this.empty();
		for (var i = 0; i < this.length; i += count) {
			result.push(this.slice(i, Math.min(i + count, this.length)));
		}
		return result;
	});
	define([sp, ap], 'brokeRight', function(count) {
		var result = this.empty();
		for (var i = this.length - count; i > -count; i -= count) {
			result.unshift(this.slice(Math.max(0, i), i + count));
		}
		return result;
	});
	define([sp, ap], 'nearBy', function(keySelector, elementSelector, resultSelector, comparer) {
		keySelector = fieldFun(keySelector);
		elementSelector = fieldFun(elementSelector);
		comparer = fieldComparer(comparer || 'key');
		var result = this.empty();
		var key, element, compareResult;
		for (var i = 0; i < this.length; i++) {
			key = keySelector.call(this, this[i], i, this[i - 1], this[i + 1]);
			element = elementSelector.call(this, this[i], i, this[i - 1], this[i + 1]);

			compareResult = comparer.call(this, {
				key: key
			}, result.last());
			if (compareResult !== 0 && compareResult !== true) {
				result.push(new Grouping(key));
			}
			result.last().push(element);
		}
		/*
		if (!result.length) {
			result = [new Grouping(key)];
		}
		*/
		if (resultSelector) {
			return result.select(resultSelector);
		} else {
			return result;
		}
	});
	define([sp, ap], 'groupBy', function(keySelector, elementSelector, resultSelector, comparer) {
		keySelector = fieldFun(keySelector);
		elementSelector = fieldFun(elementSelector);
		comparer = fieldComparer(comparer || 'key');
		var result = this.empty();
		var key, element, index;
		for (var i = 0; i < this.length; i++) {
			key = keySelector.call(this, this[i], i, this[i - 1], this[i + 1]);
			element = elementSelector.call(this, this[i], i, this[i - 1], this[i + 1]);
			index = result.findFirstIndex({
				key: key
			}, comparer);
			if (index == -1) {
				result.push(new Grouping(key));
				index = result.length - 1;
			}
			result[index].push(element);
		}
		/*
		if (!result.length) {
			result = [new Grouping(key)];
		}
		*/
		if (resultSelector) {
			return result.select(resultSelector);
		} else {
			return result;
		}
	});
	define([sp, ap], 'joinBy', function(other, thisKeySelector, otherKeySelector, resultSelector, comparer) {
		thisKeySelector = fieldFun(thisKeySelector);
		otherKeySelector = fieldFun(otherKeySelector);
		resultSelector = toLinqFun(resultSelector);
		comparer = fieldComparer(comparer || 'key');
		var result = this.empty();
		var key, compareResult;
		var thisSelect = this.select(function(o, i, p, n) {
			return {
				key: thisKeySelector.call(this, o, i, p, n),
				value: o
			};
		});
		var otherSelect = other.select(function(o, i, p, n) {
			return {
				key: otherKeySelector.call(this, o, i, p, n),
				value: o
			};
		});
		for (var i = 0; i < thisSelect.length; i++) {
			for (var j = 0; j < otherSelect.length; j++) {
				compareResult = comparer.call(thisSelect, thisSelect[i].key, otherSelect[j].key, {
					index: i,
					prev: i == 0 ? null : thisSelect[i - 1].key,
					next: i == thisSelect.length - 1 ? null : thisSelect[i + 1].key
				}, {
					index: j,
					prev: j == 0 ? null : otherSelect[j - 1].key,
					next: j == otherSelect.length - 1 ? null : otherSelect[j + 1].key
				});
				if (compareResult === true || compareResult === 0) {
					result.push(resultSelector.call(thisSelect, thisSelect[i].value, otherSelect[j].value, {
						index: i,
						prev: i == 0 ? null : thisSelect[i - 1].value,
						next: i == thisSelect.length - 1 ? null : thisSelect[i + 1].value
					}, {
						index: j,
						prev: j == 0 ? null : otherSelect[j - 1].value,
						next: j == otherSelect.length - 1 ? null : otherSelect[j + 1].value
					}));
				}
			}
		}
		return result;
	});
	define([sp, ap], 'groupJoin', function(other, thisKeySelector, otherKeySelector, resultSelector, comparer) {
		thisKeySelector = fieldFun(thisKeySelector);
		otherKeySelector = fieldFun(otherKeySelector);
		resultSelector = toLinqFun(resultSelector);
		comparer = fieldComparer(comparer || 'key');
		var result = this.empty();
		var key, compareResult;
		var thisSelect = this.select(function(o, i, p, n) {
			var key = Object.valueOf(thisKeySelector.call(this, o, i, p, n));
			key.index = i;
			key.prev = p;
			key.next = n;
			return {
				key: key,
				value: o
			};
		});
		var otherSelect = other.select(function(o, i, p, n) {
			var key = Object.valueOf(otherKeySelector.call(this, o, i, p, n));
			key.index = i;
			key.prev = p;
			key.next = n;
			return {
				key: key,
				value: o
			};
		});
		for (var i = 0; i < thisSelect.length; i++) {
			result.push(resultSelector.call(thisSelect, thisSelect[i].value, otherSelect.select(function(o) {
				return comparer.call(thisSelect, thisSelect[i], o);
			})));
		}
		return result;
	});
	define(sp, 'defaultIfEmpty', function(defaultValue) {
		var result;
		if (!this.length) {
			result = this.empty();
			result.push(defaultValue || '');
		} else {
			result = this.slice(0);
		}
		return result;
	});
	define(ap, 'defaultIfEmpty', function(defaultValue) {
		var result;
		if (!this.length) {
			result = this.empty();
			result.push(defaultValue || null);
		} else {
			result = this.slice(0);
		}
		return result;
	});
	define([sp, ap], 'selectMany', function(collectionSelector, resultSelector) {
		collectionSelector = fieldFun(collectionSelector);
		resultSelector = toLinqFun(resultSelector || function(o, v) {
			return v;
		});
		var result = this.empty();
		var elements;
		for (var i = 0; i < this.length; i++) {
			elements = collectionSelector.call(this, this[i], i, this[i - 1], this[i + 1]);
			for (var j = 0; j < elements.length; j++) {
				result.push(resultSelector.call(this, this[i], elements[j]));
			}
		}
		return result;
	});
	define([sp, ap], 'toLookup', function(keySelector, elementSelector, comparer) {
		keySelector = fieldFun(keySelector);
		elementSelector = fieldFun(elementSelector);
		comparer = fieldComparer(comparer || 'key');
		var result = this.empty();
		var key, element, index;
		for (var i = 0; i < this.length; i++) {
			key = keySelector.call(this, this[i]);
			element = elementSelector.call(this, this[i], i, this[i - 1], this[i + 1]);
			index = result.findFirstIndex({
				key: key
			}, comparer);
			if (index == -1) {
				result.push(new Grouping(key));
				index = result.length - 1;
			}
			result[index].push(element);
		}
		if (!result.length) {
			result = [new Grouping(key)];
		}
		return result;
	});
	define(sp, 'quote', function() {
		return '"' + this.replace(/([\'\"\\])/g, '\\$1').replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/\t/g, '\\t') + '"';
	});
	define(op, 'equals', function(other, depth) {
		if (this == other) {
			return true;
		} else if (!exists(other)) {
			return false;
		} else {
			other = other.valueOf();
			var thus = this.valueOf();
			if (other == thus) {
				return true;
			} else if (an(other, ot) && an(thus, ot)) {
				depth = depth || 0;
				if (depth) {
					var keyCount = 0;
					for (var key in thus) {
						if (key in other) {
							var value = thus[key];
							if (exists(value)) {
								if (!value.equals(other[key], depth - 1)) {
									return false;
								}
							} else {
								if (value != other[key]) {
									return false;
								}
							}
						} else {
							return false;
						}
						keyCount++;
					}
					for (var key in other) {
						keyCount--;
						if (keyCount < 0) {
							return false;
						}
					}
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
		}
	});

	Array.range = function(start, len) {
		var result = new Array(len);
		for (var i = 0; i < len; i++, start++) {
			result[i] = start;
		}
		return result;
	};
	Array.rangeCharCode = function(startChar, endChar) {
		return Array.rangeBetween(startChar.charCodeAt(0), endChar.charCodeAt(0));
	};
	Array.rangeChar = function(startChar, endChar) {
		return Array.rangeBetween(startChar.charCodeAt(0), endChar.charCodeAt(0)).cast(String.fromCharCode);
	};
	Array.rangeBetween = function(start, end) {
		if (start > end) {
			var result = new Array(start - end + 1);
			for (var i = 0; i < result.length; i++, start--) {
				result[i] = start;
			}
			return result;
		} else {
			return Array.range(start, end - start + 1);
		}
	}
	Array.repeat = function(element, count) {
		var result = new Array(count);
		for (var i = 0; i < count; i++) {
			result[i] = element;
		}
		return result;
	};
	String.repeat = function(word, count) {
		var result = '';
		for (var i = 0; i < count; i++) {
			result += word;
		}
		return result;
	};
	define(op, 'repeat', function(count) {
		if (an(this, String, st)) {
			return String.repeat(this, count);
		} else {
			return Array.repeat(this, count);
		}
	});
	define(op, 'toArray', function() {
		if (an(this, Array)) {
			return this;
		} else if (an(this, String, st)) {
			var result = this.split('');
			define(result, 'join', this.join || function(split) {
				return ap.join.call(this, split || '');
			}, true);
			return result;
		} else if (an(this, Function)) {
			var result = [];
			var isBreak = false;
			var _yieldreturn = window.yieldreturn;
			var _yieldbreak = window.yieldbreak;
			define(this, 'yieldreturn', window.yieldreturn = function(value) {
				if (!isBreak) {
					result.push(value);
				}
			});
			define(this, 'yieldbreak', window.yieldbreak = function(value) {
				isBreak = true;
			});
			this.apply(this, arguments);
			if (an(_yieldreturn, 'undefined')) {
				delete window.yieldreturn;
			} else {
				window.yieldreturn = _yieldreturn;
			}
			if (an(_yieldbreak, 'undefined')) {
				delete window.yieldbreak;
			} else {
				window.yieldbreak = _yieldbreak;
			}
			return result;
		} else {
			var result = [];
			for (var name in this) {
				result.push({
					key: name,
					value: this[name]
				});
			}
			return result;
		}
	});
	_define(op, '_keyCount', function() {
		var count = 0;
		for (var name in this) {
			count++;
		}
		return count;
	});

	define([np, sp], 'isBetween', function(min, max) {
		return typeof(this.valueOf()) === typeof(min) && typeof(this.valueOf()) === typeof(max) && !(this > max || this < min);
	});

	var timer = {};

	Date.start = function(tmr) {
		tmr = tmr || 0;
		timer[tmr] = new Date();
	};
	Date.tick = function(tmr) {
		tmr = tmr || 0;
		return timer[tmr] ? new Date() - timer[tmr] : 0;
	};
	Date.reset = function(tmr) {
		tmr = tmr || 0;
		var tick = Date.tick(tmr);
		timer[tmr] = new Date();
		return tick;
	}

	Object.valueOf = function(value) {
		return value === "" || value === 0 || value === false ? new Object(value) : new Object(value || {});
	};
	Object.clone = function(value) {
		if (an(value, Array)) {
			return value.slice(0);
		} else if (an(value, ot)) {
			/*
			if (an(value,String) || an(value,Boolean) || an(value,Number)) {
				var result = Object.valueOf(value.valueOf());
				//result.__proto__ = value;
				for (var name in value) {
					result[name] = value[name];
				}
				return result;
			} else {
				return Object.create(value);
			}*/
			var result = an(value, String, Boolean, Number) ? Object.valueOf(value.valueOf()) : {};
			for (var name in value) {
				result[name] = value[name];
			}
			return result;
		} else {
			return value;
		}
	}

	Object.an = function(element) {
		for (var i = 1; i < arguments.length; i++) {
			if (typeof(arguments[i]) === 'string') {
				if (typeof(element) === arguments[i]) {
					return true;
				}
			} else if (element instanceof arguments[i]) {
				return true;
			}
		}
		return false;
	}

	define(op, 'an', function() {
		for (var i = 0; i < arguments.length; i++) {
			if (typeof(arguments[i]) === 'string') {
				if (typeof(this) === arguments[i]) {
					return true;
				}
			} else if (this instanceof arguments[i]) {
				return true;
			}
		}
		return false;
	});

	define(op, 'log', function() {
		window.console && console.log && console.log(this.valueOf());
		return this;
	});

	var OrderByArray = function(origin, funs, compares) {
		origin = origin || this.empty();
		for (var i = 0; i < origin.length; i++) {
			this.push(origin[i]);
		}

		this.sort(function(a, b) {
			var result = 0;
			for (var i = 0; i < compares.length; i++) {
				result = compares[i].call(this, funs[i].call(this, a), funs[i].call(this, b));
				if (result !== 0 && result !== true) {
					return result;
				}
			}
			return 0;
		});

		define(this, 'compares', compares, true);
		define(this, 'funs', funs, true);
	};
	OrderByArray.prototype = Object.create(ap);

	define(OrderByArray.prototype, 'thenBy', function(fun, comparer) {
		this.funs.push(fieldFun(fun));
		this.compares.push(fieldComparer(comparer));
		return new OrderByArray(this, this.funs, this.compares);
	}, true);
	define(OrderByArray.prototype, 'thenByDescending', function(fun, comparer) {
		this.funs.push(fieldFun(fun));
		this.compares.push(function(a, b) {
			return -(fieldComparer(comparer))(a, b);
		});
		return new OrderByArray(this, this.funs, this.compares);
	}, true);

	var Grouping = function(key) {
		this.key = key;
	};
	Grouping.prototype = Object.create(ap);

	define(Grouping.prototype, 'push', function() {
		ap.push.apply(this, arguments);
		for (var name in this[0]) {
			if (name == 'key' || name == 'length' || !isNaN(name)) {
				continue;
			}
			this[name] = this[0][name];
		}
	}, true);
	define(Grouping.prototype, 'toArray', function() {
		var result = [];
		for (var name in this) {
			if (name == 'length' || !isNaN(name)) {
				continue;
			}
			result.push({
				key: name,
				value: this[name]
			})
		}
		return result;
	}, true);

	var Joins = function(element) {
		this.push(element);
	};
	Joins.prototype = Object.create(ap);

	function Query(out) {
		var controls = {};
		var out = out;
		var indexes = [];
		var totalIndexes = {};

		this.parent = function() {
			return out;
		};
		this.index = function() {
			return indexes.length + 1;
		};
		this.indexOf = function(command, i) {
			return indexes.findFirstIndex(command, i);
		};

		this.exec = function(command, value) {
			indexes.push(command);
			controls[command] = controls[command] || [];
			controls[command].push(value);
		};

		this.get = function(command) {
			return controls[command] || [];
		};

		this.setTotalIndex = function(command, index, totalIndex) {
			totalIndexes[command] = totalIndexes[command] || [];
			totalIndexes[command][index] = totalIndex;
		}
		this.getTotalIndex = function(command, index) {
			return totalIndexes[command][index];
		}

		this.query = function(thus, set, joins, needFirst, replaceParam) {
			function addJoin(name) {
				name = name.trim();
				joins.push(name);
				set += 'var ' + name + '=_$["' + name + '"];';
			}

			function getfun(funbody, join) {
				var others = ap.slice.call(arguments, join === true ? 2 : 1).aggregate(function(n, s) {
					return s + ',' + n;
				}, '');
				var full = joins.aggregate(function(n, s) {
					return s + ',' + n;
				}, '') + others;
				return 'function(_$' + others + ',' + (join === true ? 'left,right' : 'index,prev,next') + '){' + set + 'return (function(_$' + full + '){' + funbody + '})(_$' + full + ');}';
			}

			function replace(str, needFirst) {
				if (an(str, Query)) {
					return '(' + str.query(null, set, joins.slice(0), needFirst, replaceParam) + ')';
				} else {
					return str;
				}
			}

			function breakExps(str) {
				return str.split(function(s, i) {
					return s == ',' ? this.slice(i).sum(function(e) {
						return e == '(' ? 1 : e == ')' ? -1 : 0;
					}) != 0 ? 0 : 1 : 0;
				});
			}

			function getName(str, i) {
				var name = str.split(function(s, i) {
					return s == '.' ? this.slice(i).sum(function(e) {
						return e == '(' ? 1 : e == ')' ? -1 : 0;
					}) != 0 ? 0 : 1 : 0;
				}).last();
				if (name == str) {
					name = name.trim();
					if ((!an(i, ut) && /[^_0-9a-zA-Z\$]/g.test(name)) || keywords.exists(name)) {
						return '_$$$' + i;
					} else {
						return name;
					}
				} else {
					name = name.replace(/[^_0-9a-zA-Z\$]/g, '');
					if (isNaN(name) && !keywords.exists(name)) {
						return name;
					} else {
						return '_$$$' + i;
					}
				}
			}

			var t = this;
			var str = '';
			var result;
			thus = thus;
			set = set || '';
			joins = joins || [];
			var from = this.get('from').join(' ') || '_$';
			if (this.get('in').length > 0) {
				if (thus) {
					result = replace(this.get('in')[0]);
				} else {
					var param = replace(this.get('in')[0]);
					//var index = replaceParam.findFirstIndex(param);
					//if (index == -1) {
					result = '_$' + replaceParam.length;
					replaceParam.push(param);
					//} else {
					//	result = '_$' + index;
					//}
				}
			} else {
				result = thus || '_$';
				this.get('in').push('_$' + from);
			}
			if (from == '_$' && !thus) {
				return this.get('select').select(function(v) {
					return (an(v, st)) ? v.replace(/(^|\s)_\$\._\$\$(\d+)($|\s)/g, function(v, l, i, r) {
						var index = parseInt(i);
						var command = indexes[index];
						index = indexes.count(function(e, i) {
							return e == command && i < index;
						});
						return l + '_$._$$' + t.getTotalIndex(command, index) + r;
					}) : v;
				}).aggregate(function(n, s) {
					return s + ' ' + replace(n, true);
				}, '');
			}
			if (from != '_$') {
				result += '.selectLazy(function(_$){return {' + from + ':_$' + (thus == null && needFirst ? (set.replace(/var\s+(.+?)\s*\=\s*_\$\[\"\1\"\];/g, ',$1:$1')) : '') + '}})';
				addJoin(from);
			}

			var join = this.get('join');
			if (join.length > 0 && this.get('in').length > 1 && this.get('on').length > 0) {
				for (var i = 0; i < join.length && i < this.get('in').length - 1 && this.get('on').length; i++) {
					result += '.' + joinfuns.single(function(fun) {
						return fun.name == t.get('joinType')[i]
					}).fun + '(' + replace(this.get('in')[i + 1]) + ', null, null, ' + getfun('_$$={};' + set.replace(/_\$\[\"(.+?)\"\]/g, '$1').replace(/var\s/g, '_$$$$.') + '_$$.' + join[i] + '=' + join[i] + ';return _$$;', true, join[i]) + ', ' + getfun('return ' + replace(this.get('on')[i]), true, join[i]) + ')';
					addJoin(join[i]);
				}
			}

			if (this.get('where').length > 0) {
				result += '.whereLazy(' + getfun('return ' + this.get('where').aggregate(function(n, s) {
					return s + ' ' + replace(n, true)
				}, '')) + ')';
			}

			function needGroup(e, i) {
				if (an(e, Query)) {
					if ((e.get('from').join(' ') || '_$') == '_$') {
						if (aggfuns.exists(function(c) {
								return e.get(c.name).length > 0;
							})) {
							return true;
						}
						e.get('select').forEach(needGroup);
					}
				}
				return false;
			}

			if (groupfuns.select(funname).exists(function(name) {
					return t.get(name).length > 0
				})) {
				groupfuns.forEach(function(fun) {
					if (t.get(fun.name).length > 0) {
						var groups = [];
						groups = breakExps(t.get(fun.name).aggregate(function(n, s, i) {
							return s + ' ' + replace(n, true);
						}, ''));

						function groupin(i) {
							i = i || 0;
							return '.' + fun.fun + '(' + getfun('return {' + groups.slice(0, i + 1).aggregate(function(n, s, i) {
								return s + (i == 0 ? '' : ',') + '\"' + getName(n, i) + '\": ' + n;
							}, '') + '}') + ')' + (i == groups.length - 1 ? '' : (
								'.selectManyLazy(' + getfun('return _$' + groupin(i + 1)) + ')'
							));
						}
						result += groupin();
					}
				});
			} else if (aggfuns.select(funname).exists(function(name) {
					return t.get(name).length > 0
				}) || this.get('select').concat(this.get('having')).exists(needGroup)) {
				result += '.groupByLazy(' + getfun('return 0') + ')';
			}

			function groupfun(query, name, funName, funParams) {
				query.get(name).forEach(function(e, i) {
					var params = replace(e).replace(/^[\s\x00]*\(?|\)?[\s\x00]*$/g, '');
					params = params.split(function(ch, i, prev, next) {
						if (ch == ',') {
							var before = params.slice(0, i);
							return before.count('{') == before.count('}') && before.count('[') == before.count(']') && before.count('(') == before.count(')');
						} else {
							return false;
						}
					})
					if (query == t) {
						result += '.selectLazy(function(_$){_$._$$' + query.indexOf(name, i) + '=_$.' + funName + '(' + getfun.apply(this, ['return ' + params[0]].concat(funParams)) + params.slice(1).aggregate(function(n, s, i) {
							return s + ',' + n;
						}, '') + ');return _$;})';
					} else {
						indexes.push(name);
						query.setTotalIndex(name, i, t.index());
						result += '.selectLazy(function(_$){_$._$$' + t.index() + '=_$.' + funName + '(' + getfun.apply(this, ['return ' + params[0]].concat(funParams)) + params.slice(1).aggregate(function(n, s, i) {
							return s + ',' + n;
						}, '') + ');return _$;})';
					}
				});
			}

			function selectin(e, i) {
				if (an(e, Query)) {
					if ((e.get('from').join(' ') || '_$') == '_$') {
						aggfuns.forEach(function(c) {
							groupfun(e, c.name, c.fun || c.name, c.params || []);
						})
						e.get('select').forEach(selectin);
					}
				}
			}

			this.get('select').concat(this.get('having')).forEach(selectin);

			aggfuns.forEach(function(c) {
				groupfun(t, c.name, c.fun || c.name, c.params || []);
			});

			if (this.get('having').length > 0) {
				result += '.whereLazy(' + getfun('return ' + this.get('having').aggregate(function(n, s) {
					return s + ' ' + replace(n, true)
				}, '')) + ')';
			}

			var name, hasAs = false;
			var select = this.get('select');
			if (select.length > 0) {
				select = breakExps(select.aggregate(function(n, s) {
					return s + ' ' + replace(n, true)
				}, ''));
				result += '.selectLazy(' + getfun('var _$$={};' + select.aggregate(function(n, s, i) {
					var lastIndex = n.lastIndexOf(' as ');
					name = '_$$$' + i;
					if (lastIndex != -1 && lastIndex != n.length) {
						name = n.substring(lastIndex + 4).replace(/\./g, '');
						n = n.substring(0, lastIndex);
						hasAs = true;
					} else {
						name = getName(n, i);
					}
					return s + '_$$["' + name.trim() + '"]=' + n + ';';
				}, '') + from + '=Object.valueOf(' + from + ');' + select.aggregate(function(n, s, i) {
					var lastIndex = n.lastIndexOf(' as ');
					name = '_$$$' + i;
					if (lastIndex != -1 && lastIndex != n.length) {
						name = n.substring(lastIndex + 4).replace(/\./g, '');
						n = n.substring(0, lastIndex);
						hasAs = true;
					} else {
						name = getName(n, i);
					}
					return s + from + '["' + name.trim() + '"]=_$$["' + name.trim() + '"];';
				}, '') + '_$.' + from + '=' + from + ';return _$;') + ')';
			}

			if (orderfuns.select(funname).exists(function(name) {
					return t.get(name).length > 0
				})) {
				orderfuns.forEach(function(fun) {
					breakExps(t.get(fun.name).aggregate(function(n, s) {
						return s + ' ' + replace(n, true)
					}, '')).forEach(function(e, i) {
						if (/desc\s*$/g.test(e)) {
							result += '.' + (i == 0 ? fun.desc : fun.subdesc) + '(' + getfun('return ' + replace(e.replace(/desc\s*$/g, ''))) + ')';
						} else {
							result += '.' + (i == 0 ? fun.asc : fun.subasc) + '(' + getfun('return ' + replace(e)) + ')';
						}
					});
				});
			}

			result += '.selectLazy(function(_$){return _$.' + from + (select.length == 1 && !hasAs ? '["' + name + '"]' : '') + (select.length == 1 && thus ? '.valueOf()' : '') + '})';
			if (needFirst) {
				result += '.firstLazy()';
			}
			return result;
		}
	}

	var queryCompilers = {};

	define(ap, 'query', function(queryStr) {
		var args = ap.slice.call(arguments, 1);
		args.unshift(this);
		return sp.query.apply(queryStr, args);
	});
	define(sp, 'query', function(array) {
		var replaceParam = [];
		var index = arguments.length != 0 ? arguments.length - 1 : 0;
		//[,\:\?\(\)]|={2,3}|!==|(?(?<{1,2}|>{1,3}|\|{1,2}|&{1,2}|[%\!\+\-\*\/\^])=?)|=
		var queryStr = this.replace(/([,\:\?\(\)]|={2,3}|!==|(?:(?:<{1,2}|>{1,3}|\|{1,2}|&{1,2}|[%\!\+\-\*\/\^])=?)|=)\s*(\/(([^\\]|\\.)*?)\/)([igm]*)\s*([,\:\?\(\)\.]|={2,3}|!==|(?:(?:<{1,2}|>{1,3}|\|{1,2}|&{1,2}|[%\!\+\-\*\/\^])=?)|=)/g, function(str, g1, g2, g3, g4, g5, g6) {
			//console.log(str, arguments);
			replaceParam.push(new RegExp(g3, g5));
			return g1 + ' _$' + (++index) + ' ' + g6;
		});
		var queryStr = queryStr.replace(/\'[^\']*\'|\"[^\"]*\"/g, function(str) {
			replaceParam.push(str.replace(/^[\'\"]|[\'\"]$/g, ''));
			return '_$' + (++index);
		});
		queryStr = queryStr.trim().replace(/([,\:\?\(\)]|={2,3}|!==|(?:(?:<{1,2}|>{1,3}|\|{1,2}|&{1,2}|[%\!\+\-\*\/\^])=?)|=)/g, ' $1 ').replace(/[\s\x00]+/g, ' ');

		var result = queryCompilers[queryStr];

		replaceParam = ap.slice.call(arguments, 0).defaultIfEmpty().concat(replaceParam);
		var replaceLength = replaceParam.length;

		if (!result) {
			//console.log(queryStr);
			var queryArray = queryStr.split(' ');

			var oldWord, oldWordLower, currentCommand, currentCommandStack = [],
				queryer = new Query(),
				words = [],
				isend;

			function add() {
				if (words.length == 0) {
					return;
				}
				var word = words.join(' ');
				queryer.exec(currentCommand, word.replace(/this/g, '_$$0'));
			}

			for (var i = 0; i < queryArray.length; i++) {
				var word = queryArray[i];
				var wordLower = word.toLowerCase();
				isend = true;
				if (controlkeys.exists(wordLower)) {
					add();
					currentCommand = wordLower;
				} else if (aggfuns.select(funname).exists(wordLower)) { //group function
					words.push('_$._$$' + queryer.index());
					add();
					currentCommandStack.push(currentCommand);
					currentCommand = wordLower;
				} else if (byfuns.exists(wordLower)) {
					add();
				} else if (wordLower == 'by') {
					add();
					if (byfuns.exists(oldWordLower)) {
						currentCommand = oldWordLower;
					}
				} else if (wordLower == 'join') {
					add();
					currentCommand = wordLower;
					if (joinfuns.select(funname).exists(oldWordLower)) {
						queryer.exec('joinType', oldWordLower);
					} else {
						queryer.exec('joinType', 'default');
					}
				} else if (word == '(') {
					if ((currentCommand == 'in' || currentCommand == 'on') && words.length > 0) {
						isend = false;
						words.push(word);
					} else {
						add();
						queryer = new Query(queryer);
						currentCommandStack.push(currentCommand);
						currentCommand = 'select';
					}
				} else if (word == ')') {
					if ((currentCommand == 'in' || currentCommand == 'on') && words.count(function(e) {
							return e == '(';
						}) > words.count(function(e) {
							return e == ')';
						})) {
						isend = false;
						words.push(word);
					} else {
						add();
						var inselect = queryer;
						queryer = queryer.parent();
						currentCommand = currentCommandStack.pop();
						queryer.exec(currentCommand, inselect);
						if (aggfuns.select(funname).exists(currentCommand)) {
							currentCommand = currentCommandStack.pop();
						}
					}
				} else {
					isend = false;
					words.push(word);
				}
				if (isend) {
					words = [];
				}
				oldWord = word;
				oldWordLower = wordLower;
			}
			add();
			result = queryer.query(array, null, null, null, replaceParam);
			queryCompilers[queryStr] = {
				code: result,
				otherParams: replaceParam.slice(replaceLength)
			}
		} else {
			replaceParam = replaceParam.concat(result.otherParams);
			result = result.code;
		}

		result = replaceParam.aggregate(function(n, s, i) {
			return s + 'var _$' + i + '=' + (i >= replaceLength ? n + '.toArray()' : ((an(n, ut) ? 'null' : an(n, st) ? n.quote() : an(n, Number) ? n : an(n, RegExp) ? n.toString() : JSON.stringify(n)))) + ';';
		}, '') + result + '.toArray()';
		console.log(result);
		//var noLazy = result.replace(/Lazy\(/g, '(');
		//console.log(noLazy);

		//Date.start();
		result = eval(result);
		//console.log('Lazy  :', Date.reset(), result);
		//result = eval(noLazy)
		//console.log('NoLazy:', Date.reset(), result);
		return result;
	});
	define(ap, 'multiQuery', function() {
		var result = new Array(this.length);
		for (var i = 0; i < this.length; i++) {
			result[i] = this[i].query.apply(this[i], arguments);
		}
		return result;
	});
	define(ap, 'beginMultiQuery', function(callback, delay) {
		var thus = this;
		var args = isNaN(delay) ? ap.slice.call(arguments, 1) : ap.slice.call(arguments, 2);
		delay = isNaN(delay) ? 0 : delay;
		var result = new Array(this.length);
		var index = 0;
		var error = [];
		var async = setTimeout((function(thus) {
			return function() {
				async = setInterval((function() {
					return function() {
						try {
							//Date.start('tmr' + index);
							result[index] = thus[index].query.apply(thus[index], args);
							//console.log(index, Date.tick('tmr' + index));
						} catch (e) {
							result[index] = [];
							error.push(e);
						}
						index++;
						if (index == thus.length) {
							clearInterval(async);
							callback.call(result, result, error);
						}
					}
				})());
				define(thus, 'endMultiQuery', function() {
					clearInterval(async);
					return this;
				}, true);
			};
		})(this), delay);
		define(this, 'endMultiQuery', function() {
			clearTimeout(async);
			return this;
		}, true);
		return this;
	});
	define(ap, 'endMultiQuery', function() {
		return this;
	});
	define(sp, 'beginQuery', function(callback, delay) {
		var thus = this;
		var args = isNaN(delay) ? ap.slice.call(arguments, 1) : ap.slice.call(arguments, 2);
		delay = isNaN(delay) ? 0 : delay;
		var async = setTimeout((function() {
			return function() {
				var result = thus.query.apply(thus, args);
				clearTimeout(async);
				callback.call(result, result);
			};
		})(), delay);
		define(this, 'endQuery', function() {
			clearTimeout(async);
			return this;
		}, true);
		return this;
	});
	define(sp, 'endQuery', function() {
		return this;
	});

	//Lazy
	define(ap, '$index', 0);
	define(ap, '$tryNext', function(pre) {
		if (this.$index < this.length) {
			if (pre) {
				return this[this.$index];
			} else {
				this.$index = this.$index + 1;
				return this[this.$index - 1];
			}
		} else {
			throw null;
		}
	});
	define(ap, 'hasNext', function() {
		return this.$index < this.length;
	});
	define(ap, 'moveNext', function() {
		if (this.hasNext()) {
			return this.tryNext().current;
		} else {
			return null;
		}
	});
	define(ap, 'tryNext', (function() {
		var element = {};
		return function() {
			if (this.$index < this.length) {
				element.current = this[this.$index];
				element.index = this.$index;
				element.prev = this[this.$index - 1];
				element.next = this[this.$index + 1];
				this.$index = this.$index + 1;
				return element;
			} else {
				throw null;
			}
		};
	})());
	define([sp, fp], 'selectLazy', function(fun) {
		return this.toArray().selectLazy(fun);
	});
	define(ap, 'selectLazy', function(fun) {
		this.$index = 0;
		var thus = this;
		fun = fieldFun(fun);
		return new Enumerator(function() {
			var element = thus.tryNext();
			//console.log(fun(element.current, element.index, element.prev, element.next));
			return fun(element.current, element.index, element.prev, element.next);
		});
	});
	define([sp, fp], 'whereLazy', function(fun) {
		return this.toArray().whereLazy(fun);
	});
	define(ap, 'whereLazy', function(fun) {
		this.$index = 0;
		var thus = this;
		fun = toLinqFun(fun);
		return new Enumerator(function() {
			var result, element;
			do {
				element = thus.tryNext();
				result = fun(element.current, element.index, element.prev, element.next);
			} while (result !== true && result !== 0);
			return element.current;
		});
	});
	define([sp, fp], 'orderByLazy', function(keySelector, comparer) {
		return this.toArray().orderByLazy(keySelector, comparer);
	});
	define(ap, 'orderByLazy', function(keySelector, comparer) {
		this.$index = 0;
		var thus = this;
		keySelector = fieldFun(keySelector);
		comparer = fieldComparer(comparer);
		return new OrderedEnumerator(function() {
			return thus.tryNext();
		}, function(a, b) {
			return comparer.call(thus, keySelector.call(thus, a), keySelector.call(thus, b));
		});
	});
	define([sp, fp], 'orderByDescendingLazy', function(keySelector, comparer) {
		return this.toArray().orderByDescendingLazy(keySelector, comparer);
	});
	define(ap, 'orderByDescendingLazy', function(keySelector, comparer) {
		this.$index = 0;
		var thus = this;
		keySelector = fieldFun(keySelector);
		comparer = fieldComparer(comparer);
		return new OrderedEnumerator(function() {
			return thus.tryNext();
		}, function(a, b) {
			return -comparer.call(thus, keySelector.call(thus, a), keySelector.call(thus, b));
		});
	});
	define([sp, fp], 'groupByLazy', function(keySelector, elementSelector, resultSelector, comparer) {
		return this.toArray().groupByLazy(keySelector, elementSelector, resultSelector, comparer);
	});
	define(ap, 'groupByLazy', function(keySelector, elementSelector, resultSelector, comparer) {
		this.$index = 0;
		var thus = this;
		keySelector = fieldFun(keySelector);
		elementSelector = fieldFun(elementSelector);
		comparer = fieldComparer(comparer || 'key');
		return new GroupedEnumerator(function() {
			return thus.tryNext();
		}, keySelector, elementSelector, resultSelector, comparer);
	});
	define([sp, fp], 'nearByLazy', function(keySelector, elementSelector, resultSelector, comparer) {
		return this.toArray().nearByLazy(keySelector, elementSelector, resultSelector, comparer);
	});
	define(ap, 'nearByLazy', function(keySelector, elementSelector, resultSelector, comparer) {
		this.$index = 0;
		var thus = this;
		keySelector = fieldFun(keySelector);
		elementSelector = fieldFun(elementSelector);
		comparer = fieldComparer(comparer || 'key');
		return new NearedEnumerator(function() {
			return thus.tryNext();
		}, keySelector, elementSelector, resultSelector, comparer);
	});
	define([sp, fp], 'firstLazy', function() {
		return this.toArray().firstLazy();
	});
	define(ap, 'firstLazy', function() {
		this.$index = 0;
		if (this.hasNext()) {
			return this.moveNext();
		} else {
			return null;
		}
	});
	define([sp, fp], 'countLazy', function(fun) {
		return this.toArray().countLazy(fun);
	});
	define(ap, 'countLazy', function(fun) {
		fun = toLinqFun(fun);
		var count = 0;
		var i = 0,
			element, result;
		if (an(fun, Function)) {
			if (this.length) {
				for (i = 0; i < this.length; i++) {
					if (fun.call(this, this[i], i, this[i - 1], this[i + 1])) {
						count++;
					}
				}
			} else {
				try {
					while (true) {
						element = this.tryNext();
						if (fun.call(this, element.current, element.index, element.prev, element.next)) {
							count++;
						}
					}
				} catch (e) {
					if (e) {
						throw e;
					}
				}
			}
		} else {
			if (this.length) {
				for (i = 0; i < this.length; i++) {
					if (this[i] == fun || (exists(this[i]) && exists(fun) && this[i].valueOf() == fun.valueOf())) {
						count++;
					}
				}
			} else {
				try {
					while (true) {
						element = this.tryNext().current;
						if (element == fun || (exists(element) && exists(fun) && element.valueOf() == fun.valueOf())) {
							count++;
						}
					}
				} catch (e) {
					if (e) {
						throw e;
					}
				}
			}
		}
		return count;
	});
	define([sp, fp], 'sumLazy', function(fun) {
		return this.toArray().sumLazy(fun);
	});
	define(ap, 'sumLazy', function(fun) {
		fun = fieldFun(fun);
		var sum = 0;
		var i = 0,
			element;
		if (this.length) {
			for (; i < this.length; i++) {
				sum += fun.call(this, this[i], i, this[i - 1], this[i + 1]);
			}
		} else {
			try {
				while (true) {
					element = this.tryNext();
					sum += fun.call(this, element.current, element.index, element.prev, element.next);
				}
			} catch (e) {
				if (e) {
					throw e;
				}
			}
		}
		return sum;
	}, true);
	define([sp, fp], 'maxLazy', function(fun, comparer) {
		return this.toArray().maxLazy(fun, comparer);
	});
	define(ap, 'maxLazy', function(fun, comparer) {
		fun = fieldFun(fun);
		comparer = fieldComparer(comparer);
		var max = null;
		var i = 0,
			element, value, result;
		if (this.length) {
			max = fun.call(this, this[0], 0, null, this[1]);
			for (i = 1; i < this.length; i++) {
				value = fun.call(this, this[i], i, this[i - 1], this[i + 1]);
				result = comparer.call(this, value, max);
				if (result > 0) {
					max = value;
				}
			}
		} else {
			try {
				while (true) {
					element = this.tryNext();
					if (i == 0) {
						max = fun.call(this, element.current, element.index, element.prev, element.next);
					} else {
						value = fun.call(this, element.current, element.index, element.prev, element.next);
						result = comparer.call(this, value, max);
						if (result > 0) {
							max = value;
						}
					}
				}
			} catch (e) {
				if (e) {
					throw e;
				}
			}
		}
		return max;
	});
	define([sp, fp], 'minLazy', function(fun, comparer) {
		return this.toArray().minLazy(fun, comparer);
	});
	define(ap, 'minLazy', function(fun, comparer) {
		fun = fieldFun(fun);
		comparer = fieldComparer(comparer);
		var min = null;
		var i = 0,
			element, value, result;
		if (this.length) {
			min = fun.call(this, this[0], 0, null, this[1]);
			for (i = 1; i < this.length; i++) {
				value = fun.call(this, this[i], i, this[i - 1], this[i + 1]);
				result = comparer.call(this, value, min);
				if (result < 0) {
					min = value;
				}
			}
		} else {
			try {
				while (true) {
					element = this.tryNext();
					if (i == 0) {
						min = fun.call(this, element.current, element.index, element.prev, element.next);
					} else {
						value = fun.call(this, element.current, element.index, element.prev, element.next);
						result = comparer.call(this, value, min);
						if (result < 0) {
							min = value;
						}
					}
				}
			} catch (e) {
				if (e) {
					throw e;
				}
			}
		}
		return min;
	});
	define([sp, fp], 'aggregateLazy', function(fun, seed, resultSelector) {
		return this.toArray().aggregateLazy(fun, seed, resultSelector);
	});
	define(ap, 'aggregateLazy', function(fun, seed, resultSelector) {
		if (arguments.length == 1) {
			fun = seed;
			seed = null;
		}
		fun = toLinqFun(fun);
		var result = seed;
		if (this.length) {
			for (var i = 0; i < this.length; i++) {
				result = fun.call(this, this[i], result, i, this[i - 1], this[i + 1]);
			}
		} else {
			try {
				while (true) {
					element = this.tryNext();
					result = fun.call(this, element.current, result, element.index, element.prev, element.next);
				}
			} catch (e) {
				if (e) {
					throw e;
				}
			}
		}
		if (resultSelector) {
			return result.select(resultSelector);
		} else {
			return result;
		}
	});
	define([sp, fp], 'selectManyLazy', function(collectionSelector, resultSelector) {
		return this.toArray().selectManyLazy(collectionSelector, resultSelector);
	});
	define(ap, 'selectManyLazy', function(collectionSelector, resultSelector) {
		this.$index = 0;
		var thus = this;
		var collection;
		collectionSelector = fieldFun(collectionSelector);
		resultSelector = toLinqFun(resultSelector || function(o, v) {
			return v;
		});
		return new Enumerator(function() {
			do {
				if (collection) {
					if (collection.hasNext()) {
						return resultSelector.call(this, collection, collection.moveNext());
					}
				}
				collection = thus.tryNext();
				collection = collectionSelector.call(thus, collection.current, collection.index, collection.prev, collection.next);
			} while (true);
		});
	});
	define([sp, fp], 'joinByLazy', function(other, thisKeySelector, otherKeySelector, resultSelector, comparer) {
		return this.toArray().joinByLazy(other, thisKeySelector, otherKeySelector, resultSelector, comparer);
	});
	define(ap, 'joinByLazy', function(other, thisKeySelector, otherKeySelector, resultSelector, comparer) {
		this.$index = 0;
		var thus = this;
		var thusCurrent;
		var thusKey, otherKey;
		var otherCollection = [];
		var otherKeyCollection = [];
		var otherIndex = -1;
		var first = true;
		var right = {};
		thisKeySelector = fieldFun(thisKeySelector);
		otherKeySelector = fieldFun(otherKeySelector);
		resultSelector = toLinqFun(resultSelector);
		comparer = fieldComparer(comparer || 'key');
		if (an(other, String, st)) {
			other = other.toArray();
		}
		return new Enumerator(function() {
			var result, otherCurrent;
			do {
				if (!first) {
					try {
						if (otherIndex == -1) {
							while (true) {
								otherCurrent = other.tryNext();
								otherCollection.push(otherCurrent.current);
								otherKey = otherKeySelector.call(other, otherCurrent.current, otherCurrent.index, otherCurrent.prev, otherCurrent.next);
								otherKeyCollection.push(otherKey);
								result = comparer.call(thus, thusKey, otherKey, thusCurrent, otherCurrent);
								if (result === true || result === 0) {
									return resultSelector.call(thus, thusCurrent.current, otherCurrent.current, thusCurrent, otherCurrent);
								}
							}
						}
					} catch (e) {
						if (e) {
							throw e;
						}

					}
					if (otherIndex == -1) {
						otherIndex = 0;
					} else {
						result = false;
						for (; otherIndex < otherCollection.length; otherIndex++) {
							right.current = otherCollection[otherIndex];
							right.index = otherIndex;
							right.prev = otherCollection[otherIndex - 1];
							right.next = otherCollection[otherIndex + 1];
							result = comparer.call(thus, thusKey, right.current, thusCurrent, right);
							if (result === true || result === 0) {
								otherIndex++;
								return resultSelector.call(thus, thusCurrent.current, right.current, thusCurrent, right);
							}
						}
						otherIndex = 0;
					}
				}
				thusCurrent = thus.tryNext();
				thusKey = thisKeySelector.call(thus, thusCurrent.current, thusCurrent.index, thusCurrent.prev, thusCurrent.next);
				first = false;
			} while (true);
		});
	});
	define([sp, fp], 'limitLazy', function(start, count) {
		return this.toArray().limitLazy(start, count);
	});
	define(ap, 'limitLazy', function(start, count) {
		this.$index = 0;
		var thus = this;
		var index = 0;
		return new Enumerator(function() {
			do {
				index++;
				if (index > start + count) {
					break;
				} else if (index > start) {
					return thus.tryNext().current;
				} else {
					thus.tryNext();
				}
			} while (true);
			throw null;
		});
	});

	function defineProxy(obj, property, getFun, setFun) {
		Object.defineProperty(obj, property, {
			get: getFun,
			set: setFun,
			enumable: findLastIndex,
			configurable: true
		});
	}

	var Enumerator = function(tryNext) {
		/*
		var index, prev, next, current;
		var element = {};
		define(element, 'addProperty', function(name){
			defineProxy(this, name, null, null);
		}, true);
		*/
		define(this, '$index', 0, true);
		define(this, '$next', 0, true);
		define(this, '$nextElement', null, true);
		define(this, '$element', {}, true);
		define(this, '$tryNext', tryNext, true);
	};

	Enumerator.prototype = Object.create(ap);
	define(Enumerator.prototype, 'hasNext', function() {
		if (this.$next != this.$index) {
			if (this.$next < 0) {
				return false;
			} else {
				return true;
			}
		} else {
			try {
				this.$next++;
				this.$nextElement = this.$tryNext();
				return true;
			} catch (e) {
				if (e) {
					throw (e);
				}
				this.$next = -1;
				return false;
			}
		}
	}, true);
	define(Enumerator.prototype, 'moveNext', function() {
		if (this.hasNext()) {
			this.$index = this.$next;
			return this.$nextElement;
		} else {
			return null;
		}
	}, true);
	define(Enumerator.prototype, 'toArray', function() {
		var result = this.empty();
		while (this.hasNext()) {
			result.push(this.moveNext());
		}
		return result;
	}, true);
	define(Enumerator.prototype, '$toArray', function() {
		var result = this.empty();
		try {
			do {
				result.push(this.$tryNext());
			} while (true);
		} catch (e) {
			if (e) {
				throw (e);
			}
		}
		return result;
	}, true);
	define(Enumerator.prototype, 'tryNext', function() {
		//console.log('start', this.$index, this.$next);
		if (this.$next == 0) {
			if (this.hasNext()) {
				this.$element.current = this.moveNext();
				this.$element.next = this.moveNext();
				this.$element.index = 0;
			} else {
				throw null;
			}
		} else if (this.$next > 0) {
			this.$element.index = this.$next - 1;
			this.$element.prev = this.$element.current;
			this.$element.current = this.$element.next;
			this.$element.next = this.moveNext();
		} else {
			throw null;
		}
		//console.log('end', this.$index, this.$next);
		return this.$element;
	}, true);

	var OrderedEnumerator = function(tryNext, comparer) {
		Enumerator.call(this, tryNext);
		define(this, 'comparer', comparer, true);

		var ordered;

		define(this, 'hasNext', function() {
			if (!ordered) {
				var array = this.empty();
				var current, next, i = 0,
					result;
				try {
					do {
						next = this.$tryNext().current;
						if (i != 0) {
							result = comparer.call(this, current, next);
							if (result > 0) {
								array.push(current);
								current = next;
							} else {
								array.push(next);
							}
						} else {
							current = next;
						}
						i++
					} while (true);
				} catch (e) {
					if (e) {
						throw e;
					}
				}
				if (i != 0) {
					array.unshift(current);
				}
				array.sort(comparer);
				ordered = array;
			}
			return ordered.hasNext();
		}, true);

		define(this, 'moveNext', function() {
			if (this.hasNext()) {
				return ordered.moveNext();
			} else {
				return null;
			}
		}, true);
	};

	OrderedEnumerator.prototype = Object.create(Enumerator.prototype);
	define(OrderedEnumerator.prototype, 'thenByLazy', function(keySelector, comparer) {
		var thus = this;
		keySelector = fieldFun(keySelector);
		comparer = fieldComparer(comparer);
		return new OrderedEnumerator(this.$tryNext, function(a, b) {
			var result = thus.comparer(a, b);
			if (result === true || result == 0) {
				return comparer.call(thus, keySelector.call(thus, a), keySelector.call(thus, b));
			} else {
				return result;
			}
		});
	}, true);
	define(OrderedEnumerator.prototype, 'thenByDescendingLazy', function(keySelector, comparer) {
		var thus = this;
		keySelector = fieldFun(keySelector);
		comparer = fieldComparer(comparer);
		return new OrderedEnumerator(this.$tryNext, function(a, b) {
			var result = thus.comparer(a, b);
			if (result === true || result == 0) {
				return -comparer.call(thus, keySelector.call(thus, a), keySelector.call(thus, b));
			} else {
				return result;
			}
		});
	}, true);

	var GroupedEnumerator = function(tryNext, keySelector, elementSelector, resultSelector, comparer) {
		Enumerator.call(this, tryNext);

		var thus = this;
		var grouped = this.empty();

		define(this, 'hasNext', function(grouping) {
			if (this.$next != this.$index) {
				if (this.$next < 0) {
					return false;
				} else {
					return true;
				}
			} else {
				try {
					if (!grouping) {
						this.$next++;
						if (this.$next <= grouped.length) {
							this.$nextElement = grouped.tryNext();
							return true;
						}
					}
					var result, key, keyValue = {};
					do {
						do {
							this.$nextElement = this.$tryNext();
							key = keySelector.call(this, this.$nextElement.current, this.$nextElement.index, this.$nextElement.prev, this.$nextElement.next);
							result = false;
							if (grouped.length != 0) {
								keyValue.key = key;
								if (grouping) {
									result = comparer.call(this, grouping, keyValue);
									if (result === true || result === 0) {
										grouping.push(elementSelector.call(this, this.$nextElement.current, this.$nextElement.index, this.$nextElement.prev, this.$nextElement.next));
										return true;
									}
								}
								for (var i = 0; i < grouped.length; i++) {
									if (grouped[i] != grouping) {
										result = comparer.call(this, grouped[i], keyValue);
										if (result === true || result === 0) {
											grouped[i].push(elementSelector.call(this, this.$nextElement.current, this.$nextElement.index, this.$nextElement.prev, this.$nextElement.next));
											break;
										}
									}
								}
							}
						} while (result === true || result === 0);
						var group = new GroupingEnumerator(key, this, keySelector, elementSelector, resultSelector, comparer);
						group.push(elementSelector.call(this, this.$nextElement.current, this.$nextElement.index, this.$nextElement.prev, this.$nextElement.next));
						grouped.push(group);
					} while (grouping);
					this.$nextElement = grouped.tryNext();
					return true;
				} catch (e) {
					if (e) {
						throw (e);
					}
					if (!grouping) {
						this.$next = -1;
					}
					return false;
				}
			}
		}, true);

		define(this, 'moveNext', function(grouping) {
			if (this.hasNext(grouping)) {
				this.$index = this.$next;
				if (resultSelector) {
					return resultSelector.call(this, this.$nextElement.current, this.$nextElement.index, this.$nextElement.prev, this.$nextElement.next);
				} else {
					return this.$nextElement.current;
				}
			} else {
				return null;
			}
		}, true);
	};

	GroupedEnumerator.prototype = Object.create(Enumerator.prototype);

	var NearedEnumerator = function(tryNext, keySelector, elementSelector, resultSelector, comparer) {
		Enumerator.call(this, tryNext);

		var thus = this;
		var grouped = this.empty();
		var group;

		define(this, 'hasNext', function(grouping) {
			if (this.$next != this.$index) {
				if (this.$next < 0) {
					return false;
				} else {
					return true;
				}
			} else {
				try {
					if (!grouping) {
						this.$next++;
						if (this.$next <= grouped.length) {
							this.$nextElement = grouped.tryNext();
							return true;
						}
					}
					var result, key, keyValue = {};
					do {
						this.$nextElement = this.$tryNext();
						key = keySelector.call(this, this.$nextElement.current, this.$nextElement.index, this.$nextElement.prev, this.$nextElement.next);
						result = false;
						keyValue.key = key;
						if (grouping) {
							result = comparer.call(this, grouping, keyValue);
							if (result === true || result === 0) {
								grouping.push(elementSelector.call(this, this.$nextElement.current, this.$nextElement.index, this.$nextElement.prev, this.$nextElement.next));
								return true;
							}
						} else if (group) {
							result = comparer.call(this, group, keyValue);
							if (result === true || result === 0) {
								group.push(elementSelector.call(this, this.$nextElement.current, this.$nextElement.index, this.$nextElement.prev, this.$nextElement.next));
							}
						}
					} while (result === true || result === 0);
					group = new GroupingEnumerator(key, this, keySelector, elementSelector, resultSelector, comparer);
					group.push(elementSelector.call(this, this.$nextElement.current, this.$nextElement.index, this.$nextElement.prev, this.$nextElement.next));
					grouped.push(group);
					if (grouping) {
						return false;
					} else {
						this.$nextElement = grouped.tryNext();
						return true;
					}
				} catch (e) {
					if (e) {
						throw (e);
					}
					if (!grouping) {
						this.$next = -1;
					}
					return false;
				}
			}
		}, true);

		define(this, 'moveNext', function(grouping) {
			if (this.hasNext(grouping)) {
				this.$index = this.$next;
				if (resultSelector) {
					return resultSelector.call(this, this.$nextElement.current, this.$nextElement.index, this.$nextElement.prev, this.$nextElement.next);
				} else {
					return this.$nextElement.current;
				}
			} else {
				return null;
			}
		}, true);
	};

	NearedEnumerator.prototype = Object.create(GroupedEnumerator.prototype);

	var GroupingEnumerator = function(key, source, keySelector, elementSelector, resultSelector, comparer) {
		Enumerator.call(this, this.$tryNext);
		this.key = key;
		define(this, 'hasNext', function() {
			if (this.$next != this.$index) {
				if (this.$next < 0) {
					return false;
				} else {
					return true;
				}
			} else {
				this.$next++;
				if (this.$next > this.length + 1) {
					do {
						if (source.hasNext(this)) {
							source.moveNext(this);
						} else {
							break;
						}
					} while (this.$next > this.length + 1)
				}
				if (this.$next > this.length + 1) {
					this.$next = -1;
					return false;
				} else {
					this.$nextElement = this.$tryNext();
					return true;
				}
			}
		}, true);
		define(this, 'moveNext', function() {
			if (this.hasNext()) {
				if (this.$index == 0) {
					for (var name in this.$nextElement) {
						if (name == 'key' || name == 'length' || !isNaN(name)) {
							continue;
						}
						this[name] = this.$nextElement[name];
					}
				}
				this.$index = this.$next;
				return this.$nextElement;
			} else {
				return null;
			}
		}, true);

	};
	GroupingEnumerator.prototype = Object.create(Enumerator.prototype);
	define(GroupingEnumerator.prototype, 'push', function() {
		ap.push.apply(this, arguments);
		if (this.length == 1) {
			for (var name in this[0]) {
				if (name == 'key' || name == 'length' || !isNaN(name)) {
					continue;
				}
				this[name] = this[0][name];
			}
		}
	}, true);
})();