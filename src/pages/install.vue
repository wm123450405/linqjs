<template>
	<content-template :title="data.title">
		Node:
		<pre><code class="bash">$ npm install --save-dev linq-js</code></pre>
		Bower:
		<pre><code class="bash">$ bower install js-linq</code></pre>
	</content-template>
</template>
<script>
	export default {
		data() {
			return {
				data: { }
			};
		},
		mounted() {
			this.getJson('install').then(data => this.data = data);
		}
	};
</script>