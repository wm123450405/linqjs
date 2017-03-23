const core = require('./core/core');

class IterableWeakSet {
	constructor() {
		let set = new Set();
		core.defineProperty(this, Symbol.iterator, function* WeakSetIterator() {
			for (let weak of set) {
				if (weak.has(this)) {
					yield weak.get(this);
				} else {
					set.delete(weak);
				}
			}
		});
		core.defineProperties(this, {
			has(value) {
				for (let v of this) {
					if (v === value) {
						return true;
					}
				}
				return false;
			},
			add(value) {
				if (!this.has(value)) {
					let weak = new WeakMap();
					weak.set(this, value);
					set.add(weak);
				}
				return this;
			},
			delete(value) {
				for (let weak of set) {
					if (weak.has(this)) {
						if (weak.get(this) === value) {
							set.delete(weak);
							weak.delete(this);
							return true;
						}
					} else {
						set.delete(weak);
					}
				}
				return false;
			}
		});
	}
}

module.exports = IterableWeakSet;