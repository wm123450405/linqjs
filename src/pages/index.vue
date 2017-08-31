<template>
	<div class="container">
		<div class="row">
			<router-view name="nav" class="navbar navbar-default topbar" id="topbar"></router-view>
		</div>
		<div class="row">
			<router-view name="directory" class="col-sm-4 col-lg-3 sidebar" id="sidebar"></router-view>
			<router-view name="content" class="col-sm-8 col-lg-9" style="padding-bottom: 5em;" id="content"></router-view>
		</div>
		<div class="try">
			<textarea title="javascript code" id="code" class="code"></textarea>
			<div class="result">
				<div class="btns">
					<div @click="tryIt"><i class="fa fa-fw fa-play"></i>运行</div>
					<div><i class="fa fa-fw fa-clear"></i>清空</div>
					<div class="expand"><i class="fa fa-fw fa-expand"></i>打开</div>
				</div>
				<ul class="list">
					<li v-for="logs in logList"><span v-for="log in logs"> {{ log | json }} </span></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	const CodeMirror = require('codemirror');

	let codeMirror;

	export default {
	    data() {
	        return {
                logList: []
			}
		},
		mounted() {
            codeMirror = CodeMirror.fromTextArea(document.getElementById('code'), {
                mode: 'javascript',
                lineNumbers: true
			});
		},
		methods: {
		    tryIt() {
		        let code = codeMirror && codeMirror.getValue() || $('#code').val();
                alert(code);
                const Enumerable = require('linq-js');
		        let log = console.log;
		        console.log = (...contents) => {
		            this.logList.push(contents);
				};
				eval(code);
				console.log = log;
			}
		}
	};
</script>