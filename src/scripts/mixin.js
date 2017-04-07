/**
 * Created by wm123 on 2017/3/22.
 */
import common from './common';

export default {
	updated() {
		$('pre code').each(function(i, block) {
			if (!$(block).hasClass('hljs')) {
				hljs.highlightBlock(block);
			}
		});
	},
	data() {
		return {
			defaultLang: common.defaultLang,
			lastest: common.lastest,
			versions: common.versions,
			promises: []
		}
	},
	watch: {
		'$route.params'() {
			this.reload();
		}
	},
	computed: {
		lang() {
			return this.$route.params['lang'] || this.defaultLang;
		},
		version() {
			return this.$route.params['version'] || this.lastest;
		}
	},
	mounted() {
		if (this.$route && this.$route.hash) {
			this.$nextTick(() => {
				let scrollTo = $(this.$el);
				if (scrollTo.is(this.$route.hash)) {
					this.scrollTo(scrollTo);
				}
			});
		}
	},
	methods: {
		hasHistroys(metas) {
			return Enumerable.any(metas, meta => meta && this.hasHistroy(meta.histroys));
		},
		hasHistroy(histroys) {
			return Enumerable.any(this.histroys(histroys), histroy => this.isNewer(histroy.since) && this.isOlder(histroy.deprecated));
		},
		histroys(histroys) {
			return common.histroys(histroys).toArray();
		},
		isNewer(version) {
			return common.isNewer(version, this.version);
		},
		isOlder(version) {
			return common.isOlder(version, this.version);
		},
		capitalize(value) {
			return common.capitalize(value);
		},
		upper(value) {
			return common.upper(value);
		},
		scrollTo(scrollTo) {
			setTimeout(() => {
				$('.activatable').removeClass('active');
				let fixed = $('#topbar').css('position') === 'fixed' ? 50 : 0;
				$(document).scrollTop(scrollTo.closest('.activatable').addClass('active').offset().top - fixed - 10);
			});
		},
		isKeyword(type) {
			return /^[a-z]/.test(type);
		},
		reload() {
			for (let promise of this.promises) {
				let p = new Promise(promise.exec);
				for (let callback of promise.callbacks) {
					if (callback.success) {
						p.then(callback.success, callback.failed);
					} else {
						p.catch(callback.failed);
					}
				}
			}
		},
		getJson(...names) {
			let isArray = false;
			if (names[0] === true) {
				names = names.slice(1);
				isArray = [];
			}
			let load = (revolse, reject) => {
				require.ensure([], () => {
					try {
						let results = names.map(name => {
							if (typeof name === 'function') {
								name = name.call(this);
							}
							if (name.startsWith('/')) {
								try {
									return require(`../resources${ name }.json`);
								} catch (e) {
									console.warn(e);
									return { };
								}
							} else {
								let defaultLang = isArray ? [] : { }, lang = isArray ? [] : { };
								try {
									defaultLang = require(`../resources/${ this.defaultLang }/${ name }.json`);
								} catch (e) { console.warn(e); }
								try {
									lang = require(`../resources/${ this.lang }/${ name }.json`);
								} catch (e) { console.warn(e); }
								return $.extend(true, isArray ? [] : { }, defaultLang, lang);
							}
						});
						if (results.length === 1) {
							revolse && revolse(results[0]);
						} else {
							revolse && revolse(results);
						}
					} catch(e) {
						reject && reject(e);
					}
				});
			};
			let promise = new Promise(load);
			let _then = promise.then;
			let _catch = promise.catch;
			promise.exec = load;
			promise.callbacks = [];
			promise.then = function(success, failed) {
				this.callbacks.push({
					success: success,
					failed: failed
				});
				_then.call(this, success, failed);
			};
			promise.catch = function(failed) {
				this.callbacks.push({
					success: null,
					failed: failed
				});
				_catch.call(this, failed);
			};
			this.promises.push(promise);
			return promise;
		},
		getLanguages() {
			return new Promise((revolse, reject) => {
				try {
					revolse && revolse(require(`../resources/lang.json`));
				} catch(e) {
					reject && reject(e);
				}
			});
		}
	}
}