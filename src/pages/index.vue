<template>
	<div class="container">
		<div class="row">
			<router-view name="nav" class="navbar navbar-default topbar" id="topbar"></router-view>
		</div>
		<div class="row">
			<router-view name="directory" class="col-sm-4 col-lg-3 sidebar" id="sidebar"></router-view>
			<router-view name="content" class="col-sm-8 col-lg-9" style="padding-bottom: 32em;" id="content"></router-view>
		</div>
		<div class="try" :class="{ active: active }">
			<textarea title="javascript code" id="code" class="code"></textarea>
			<div class="result">
				<div class="btns">
					<div class="btn btn-default" @click="tryIt" :class="{ disabled: executing }"><i class="fa fa-fw fa-play"></i>{{ caption.run }}</div>
					<div class="btn btn-default" @click="clear"><i class="fa fa-fw fa-ban"></i>{{ caption.clear }}</div>
					<div class="btn btn-default" @click="close"><i class="fa fa-fw fa-compress fa-flip-vertical"></i>{{ caption.close }}</div>
					<div class="btn btn-default expand" @click="open"><i class="fa fa-fw fa-expand fa-flip-vertical"></i>{{ caption.try }}</div>
					<div class="checkbox" :class="{ hidden: !extendEnabled }"><label><input type="checkbox" v-model="extend">{{ caption.enableExtend }}</label></div>
					<div v-if="executing">{{ runtime ? caption.loadRuntime : caption.executing }}</div>
				</div>
				<ul class="list">
					<li v-for="logs in logList" :class="logs.type"><i class="fa fa-fw" :class="logs.type === 'result' ? 'fa-angle-left' : logs.type === 'error' ? 'fa-times-circle' : ''"></i> <pre v-for="log in logs.contents" style="padding-right: .5em;">{{ log | json }}</pre></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
    import common from './../scripts/common';

	const CodeMirror = require('codemirror');
	require('codemirror/mode/javascript/javascript');

	let codeMirror;

	const history = require('./../scripts/history');

	export default {
        beforeRouteUpdate(to, from, next) {
            codeMirror && codeMirror.setValue('');
	        this.clear();
	        this.close();
            let reg = /^\/(\w+-\w+)(\/\d+\.\d+\.\d+(\.pre)?)?(.*)?$/i;
            to = reg.exec(to.path);
            to = {
                lang: to && to[1] || common.defaultLang,
				version: to && to[2] && to[2].substring(1) || common.lastest,
                url: to && to[4] || '/'
			};
            from = reg.exec(from.path);
            from = {
                lang: from && from[1] || common.defaultLang,
                version: from && from[2] && from[2].substring(1) || common.lastest,
                url: from && from[4] || '/'
            };
			if (to.url !== from.url) {
			    if (to.lang === from.lang && to.version === from.version) {
			        next();
				} else {
                    next({ path: `/${ from.lang }${ from.version !== common.lastest ? '/' + from.version : '' }${ to.url }`, replace: true });
				}
			} else {
				next();
			}
			window.scrollTo(0, 0);
		},
	    data() {
	        return {
	            active: false,
                logList: [],
				runtime: false,
				executing: false,
				identity: 0,
				extend: true,
				code: '',

                caption: { }
			}
		},
		mounted() {
            codeMirror = CodeMirror.fromTextArea(document.getElementById('code'), {
                mode: 'javascript',
                indentUnit: 4,
                theme: 'hybird'
			});
            this.getJson(`caption`).then(caption => {
                this.caption = caption;
            });
		},
		watch: {
            extend() {
                this.tryCode(this.code);
			}
        },
		computed: {
            extendEnabled() {
                return common.isOlder(this.version, '2.1.20');
			}
		},
		methods: {
	        open(code, run) {
				this.active = true;
				setTimeout(() => {
                    if (codeMirror) {
                        if (typeof code === 'string' && code) {
                            this.code = code;
                            if (this.extend) {
                                codeMirror.setValue(this.extendEnabled && /\.asEnumerable\(\)(?!;)/g.test(code) ? 'Enumerable.config.extends.array = true;\r\n\r\n' + code.replace(/\.asEnumerable\(\)/g, '') : code);
                            } else {
                                codeMirror.setValue(code);
							}
						} else if (!codeMirror.getValue()) {
                            codeMirror.setValue("console.log(1);");
						}
						if (run) {
                            this.tryIt();
						}
                    }
				});
			},
			close() {
	            this.active = false;
			},
			clear() {
	            this.logList = [];
			},
			tryCode(code) {
	            if (code && codeMirror) {
	                this.clear();
                    this.open(code, true);
				}
			},
		    tryIt() {
	            if (codeMirror) {
                    let code = codeMirror.getValue();
                    if (code) {
                        this.executing = true;
                        this.identity++;
                        let identity = this.identity;
                        this.runtime = true;
						history(this.version, Enumerable => {
							try {
								this.runtime = false;
								if (identity === this.identity) {
									let log = console.log;
									console.log = (...contents) => {
										this.logList.push({
											type: "log",
											contents
										});
										log(...contents);
									};
									try {
										Enumerable.config.as = 'asEnumerable';
										let result = eval(code);
										this.logList.push({
											type: "result",
											contents: [result]
										});
										log(result);
									} catch (e) {
										this.logList.push({
											type: "error",
											contents: [e.toString()]
										});
										console.error(e);
									} finally {
										console.log = log;
										Enumerable.config.extends.array = false;
									}
								}
							} finally {
								this.$nextTick(() => {
									let list = $('.result .list');
									list.scrollTop(list.get(0).scrollHeight);
									this.executing = false;
								});
							}
						}, () => {
                            delete Object.prototype.asEnumerable;
                            delete Array.prototype.asEnumerable;
                            delete String.prototype.asEnumerable;
                            delete Map.prototype.asEnumerable;
                            delete Set.prototype.asEnumerable;
                            Enumerable.config.extends.array = false;
                        }, () => {
                            delete Object.prototype.asEnumerable;
                            delete Array.prototype.asEnumerable;
                            delete String.prototype.asEnumerable;
                            delete Map.prototype.asEnumerable;
                            delete Set.prototype.asEnumerable;
                            Enumerable = require('linq-js');
						});
                    }
				}
			}
		}
	};
</script>