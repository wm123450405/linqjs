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
	methods: {
		getJson(names) {
			if (typeof names === 'string' || names instanceof String) {
				names = [names];
			}
			return new Promise((revolse, reject) => {
				require.ensure([], () => {
					try {
						revolse && revolse(...names.map(name => require(`../resources/${ this.getLang() }/${ name }.json`)));
					} catch(e) {
						reject && reject(e);
					}
				})
			});
		},
		getLang() {
			return this.$route.params['lang'] || 'zh-hans';
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