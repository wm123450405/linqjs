/**

author:wm
email:491029934@qq.com

use linq and lambda in javascript

http://github.com/wm123450405/linqjs
*/
(function Linq() {
	var sp = String.prototype;
	var op = Object.prototype;
	var ap = Array.prototype;
	var np = Number.prototype;

	var st = 'string';
	var nt = 'number';
	var ot = 'object';
	var bt = 'boolean';
	var ft = 'function';
	var ut = 'undefined';

	var keywords = ['select', 'where', 'in', 'on', 'key', 'join', 'order', 'group', 'by', 'length', 'max', 'min', 'count', 'sum', 'avg', 'from', 'value', 'prev', 'next', 'index'];
	var functions = ['cast', 'select', 'forEach', 'single', 'any', 'all', 'count', 'first', 'concat', 'union', 'exists', 'empty', 'except', 'intersect', 'last', 'reverse', 'sequenceEqual', 'findFirst', 'findFirstIndex', 'findLast', 'findLastIndex', 'skip', 'skipWhile', 'take', 'takeWhile', 'where', 'zip', 'sum', 'max', 'min', 'avgrage', 'aggregate', 'orderBy', 'orderByDescending', 'groupBy', 'joinBy', 'groupJoin', 'defaultIfEmpty', 'selectMany', 'toLookup', 'thenBy', 'thenByDescending', 'query', 'range', 'repeat', 'replace', 'an'];

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
	};

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
})();
