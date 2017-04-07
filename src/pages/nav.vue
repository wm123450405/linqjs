<template>
	<nav class="container-fluid">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapsable" aria-expanded="false">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="#">LinqJS</a>
		</div>
		<div class="collapse navbar-collapse navbar-collapsable">
			<ul class="nav navbar-nav">
				<li role="presentation" class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
						{{ language.name }} <span class="caret"></span>
					</a>
					<ul class="dropdown-menu">
						<li v-for="language in languages" v-if="lang !== language.code"><router-link :to="`/${ language.code }/${ version !== lastest ? version + '/' : '' }${ path }${ $route.hash }`">{{ language.name }}</router-link></li>
					</ul>
				</li>
			</ul>
			<ul class="nav navbar-nav">
				<li role="presentation" class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
						{{ version }} <span class="caret"></span>
					</a>
					<ul class="dropdown-menu">
						<li v-for="ver in versions" v-if="ver !== version"><router-link :to="`/${ lang }/${ ver !== lastest ? ver + '/' : '' }${ path }${ $route.hash }`">{{ ver }}</router-link></li>
					</ul>
				</li>
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
				languages: []
			};
		},
		mounted() {
			this.getLanguages().then(languages => {
				this.languages = languages;
			});
		},
		computed: {
			language() {
				return Enumerable.singleOrDefault(this.languages, { code: 'zh-hans' }, language => language.code === this.lang);
			},
			path() {
				return this.$route.path.replace(new RegExp(`^/${ this.lang }(/${ this.version })?/?`, 'ig'), '');
			}
		},
		methods: {

		}
	};
</script>