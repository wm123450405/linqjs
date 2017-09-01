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
					<div @click="tryIt"><i class="fa fa-fw fa-play"></i>运行</div>
					<div @click="clear"><i class="fa fa-fw fa-ban"></i>清空</div>
					<div @click="close"><i class="fa fa-fw fa-compress"></i>收起</div>
					<div class="expand" @click="open"><i class="fa fa-fw fa-expand"></i>试一试</div>
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
	    data() {
	        return {
	            active: false,
                logList: []
			}
		},
		mounted() {
            codeMirror = CodeMirror.fromTextArea(document.getElementById('code'), {
                mode: 'javascript',
                indentUnit: 4,
                theme: 'hybird'
			});
		},
		methods: {
	        open() {
				this.active = true;
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
                    this.open();
                    setTimeout(() => {
                        codeMirror.setValue(code);
                        this.tryIt();
					});
				}
			},
		    tryIt() {
	            if (codeMirror) {
                    let code = codeMirror.getValue();
                    //alert(code);
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
                    }
				}
			}
		}
	};
</script>