<template>
	<div class="container">
		<div class="row">
			<router-view name="nav" class="navbar navbar-default"></router-view>
		</div>
		<div class="row">
			<router-view name="directory" class="col-xs-3 col-lg-2"></router-view>
			<router-view name="content" class="col-xs-9 col-lg-10"></router-view>
		</div>
	</div>
</template>
<script>
	export default {

	};
</script>