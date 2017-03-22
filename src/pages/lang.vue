<template>
	<div class="container">
		<ul class="list-group">
			<li class="list-group-item" v-for="language in languages" key="code"><router-link :to="language.code">{{ language.name }}</router-link></li>
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				languages: []
			}
		},
		mounted() {
			this.getLanguages().then(languages => this.languages = languages);
		}
	};
</script>