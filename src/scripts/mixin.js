/**
 * Created by wm123 on 2017/3/22.
 */
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
			promises: []
		}
	},
	watch: {
		lang() {
			this.reload();
		}
	},
	computed: {
		lang() {
			return this.$route.params['lang'] || 'zh-hans';
		}
	},
	methods: {
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
			let load = (revolse, reject) => {
				require.ensure([], () => {
					try {
						revolse && revolse(names.length === 1 ? require(`../resources/${ this.lang }/${ names[0] }.json`) : names.map(name => require(`../resources/${ this.lang }/${ name }.json`)));
					} catch(e) {
						reject && reject(e);
					}
				})
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
				require.ensure([], () => {
					try {
						revolse && revolse(require(`../resources/lang.json`));
					} catch(e) {
						reject && reject(e);
					}
				})
			});
		}
	}
}