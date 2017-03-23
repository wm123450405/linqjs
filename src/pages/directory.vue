<template>
	<nav class="sidebar">
		<ul class="list-group row">
			<li class="list-group-item" v-for="line in directory">
				<div class="panel">
					<div class="panel-heading">
						<a v-if="line.children" data-toggle="collapse" :data-target="`#${ line.code }`" class="collapsed"><span>{{ line.title }}</span> <span class="pull-right arrow"></span></a>
						<lang-link :to="line.code" v-else><span>{{ line.title }}</span></lang-link>
					</div>
					<ul class="list-group collapse" :id="line.code">
						<li class="list-group-item" v-for="sub in line.children"><lang-link :to="`${ line.code }/${ sub.code }`" v-if="line.children"><span>{{ sub.title }}</span></lang-link></li>
					</ul>
				</div>
			</li>
		</ul>
	</nav>
</template>
<style>
</style>
<script>
	export default {
		data() {
			return {
				directory: []
			};
		},
		mounted() {
			this.getJson('directory').then(directory => this.directory = directory);
		},
		methods: {
		}
	};
</script>