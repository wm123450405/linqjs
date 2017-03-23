<template>
	<div class="container">
		<div class="row">
			<router-view name="nav" class="navbar navbar-default"></router-view>
		</div>
		<div class="row">
			<router-view name="directory" class="col-xs-4 col-md-3"></router-view>
			<router-view name="content" class="col-xs-8 col-md-9"></router-view>
		</div>
	</div>
</template>
<script>
	export default {

	};
</script>