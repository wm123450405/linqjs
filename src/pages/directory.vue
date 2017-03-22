<template>
	<nav class="sidebar">
		<ul class="list-group">
			<li class="list-group-item"><lang-link to="introduction"><span>简介</span></lang-link></li>
			<li class="list-group-item"><a><span>简介</span> <span class="pull-right">◀</span></a></li>
			<li class="list-group-item"><a><span>简介</span> <span class="pull-right">◀</span></a></li>
		</ul>
	</nav>
</template>
<style>
</style>
<script>
	export default {
		data() {
			return {
				apis: []
			};
		},
		mounted() {
			this.getJson('directory').then(data => this.apis = data);
		},
		methods: {
		}
	};
</script>