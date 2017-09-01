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
					<li v-for="logs in logList" :class="logs.type"><i class="fa fa-fw" :class="logs.type === 'result' ? 'fa-angle-left' : ''"></i> <span v-for="log in logs.contents"> {{ log | json }} </span></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	const CodeMirror = require('codemirror');
	require('codemirror/mode/javascript/javascript');

	let codeMirror;

	export default {
        beforeRouteUpdate(to, from, next) {
            codeMirror && codeMirror.setValue('');
	        this.clear();
	        this.close();
	        next();
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
                console.log(caption);
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
                        const Enumerable = require('linq-js');
                        let log = console.log;
                        console.log = (...contents) => {
                            this.logList.push({
								type: "log",
								contents
                            });
                            log(...contents);
                        };
                        let result = eval(code);
                        this.logList.push({
							type: "result",
							contents: [ result ]
                        });
                        log(result);
                        console.log = log;
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