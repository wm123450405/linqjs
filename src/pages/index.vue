<template>
	<div class="container">
		<div class="row">
			<router-view name="nav" class="navbar navbar-default topbar" id="topbar"></router-view>
		</div>
		<div class="row">
			<router-view name="directory" class="col-sm-4 col-md-3 sidebar" id="sidebar"></router-view>
			<router-view name="content" class="col-sm-8 col-md-9" id="content"></router-view>
		</div>
	</div>
</template>
<script>
	export default {

	};
</script>