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
					<div class="btn btn-default" @click="tryIt"><i class="fa fa-fw fa-play"></i>{{ caption.run }}</div>
					<div class="btn btn-default" @click="clear"><i class="fa fa-fw fa-ban"></i>{{ caption.clear }}</div>
					<div class="btn btn-default" @click="close"><i class="fa fa-fw fa-compress fa-flip-vertical"></i>{{ caption.close }}</div>
					<div class="btn btn-default expand" @click="open"><i class="fa fa-fw fa-expand fa-flip-vertical"></i>{{ caption.try }}</div>
				</div>
				<ul class="list">
					<li v-for="logs in logList" :class="logs.type"><i class="fa fa-fw" :class="logs.type === 'result' ? 'fa-angle-left' : logs.type === 'error' ? 'fa-times-circle' : ''"></i> <pre v-for="log in logs.contents">{{ log | json }}</pre></li>
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

	const histroy = require('./../scripts/histroy');

	export default {
        beforeRouteUpdate(to, from, next) {
            codeMirror && codeMirror.setValue('');
	        this.clear();
	        this.close();
            let reg = /^\/(\w+-\w+)(\/\d+\.\d+\.\d+(\.pre)?)?(.+)?$/i;
            to = reg.exec(to.path);
            to = {
                lang: to && to[1] || common.defaultLang,
				version: to && to[2] && to[2].substring(1) || common.lastest,
                url: to && to[4] || ''
			};
            from = reg.exec(from.path);
            from = {
                lang: from && from[1] || common.defaultLang,
                version: from && from[2] && from[2].substring(1) || common.lastest,
                url: from && from[4] || ''
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
		},
	    data() {
	        return {
	            active: false,
                logList: [],

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
		methods: {
	        open(code, run) {
				this.active = true;
				setTimeout(() => {
                    if (codeMirror) {
                        if (typeof code === 'string') {
                            codeMirror.setValue(code);
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
                        let log = console.log;
                        console.log = (...contents) => {
                            this.logList.push({
								type: "log",
								contents
                            });
                            log(...contents);
                        };
                        try {
							delete Object.prototype.asEnumerable;
							const Enumerable = histroy(this.version);
                            let result = eval(code);
                            this.logList.push({
                                type: "result",
                                contents: [ result ]
                            });
                            log(result);
						} catch(e) {
                            this.logList.push({
                                type: "error",
                                contents: [ e.toString() ]
							});
                            console.error(e);
						}
                        console.log = log;
                        delete Object.prototype.asEnumerable;
                        require('linq-js');
						this.$nextTick(() => {
                            let list = $('.result .list');
                            list.scrollTop(list.get(0).scrollHeight);
						});
                    }
				}
			}
		}
	};
</script>