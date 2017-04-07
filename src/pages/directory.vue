<template>
	<nav class="closed panel-group">
		<div class="panel panel-default visible-xs-block">
			<div class="panel-heading">
				<a data-toggle="toggle" data-target="#sidebar" data-classes="opened closed"><i class="fa fa-fw fa-bars"></i></a>
			</div>
		</div>
		<div class="panel panel-default" v-for="line in directory">
			<div class="panel-heading">
				<a v-if="line.children" data-toggle="collapse" :data-target="`#${ line.code }`" data-parent="#sidebar" class="collapsed"><i v-if="line.icon" class="fa fa-fw" :style="`fa-${ line.icon }`"></i><i class="fa fa-fw first-word" v-else>{{ line.title.substring(0, 1) }}</i> <span>{{ line.title }}</span> <span class="caret"></span></a>
				<lang-link :to="line.code" v-else><i v-if="line.icon" class="fa fa-fw" :style="`fa-${ line.icon }`"></i><i class="fa fa-fw first-word" v-else>{{ line.title && line.title.substring(0, 1) }}</i> <span>{{ line.title }}</span></lang-link>
			</div>
			<ul class="list-group collapse" :id="line.code">
				<li class="list-group-item" v-for="sub in line.children" v-if="isNewer(sub.since) && isOlder(sub.deprecated)"><lang-link :to="`${ line.code }/${ sub.code }`" v-if="line.children"><span>{{ sub.title }}</span></lang-link></li>
			</ul>
		</div>
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
			this.getJson(true, 'directory').then(directory => this.directory = directory);
		},
		methods: {

		}
	};
</script>