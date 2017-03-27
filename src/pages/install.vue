<template>
	<content-template :title="data.title">
		<div v-for="(content,index) in data.contents">
			<h3>{{ index + 1 }}. {{ content.title }}</h3>
			<div v-for="detail in content.details" style="padding-left: 20px">
				<div v-if="detail.type === 'example'">
					<h4>{{ detail.runtime }}:</h4>
					<div v-for="description in detail.descriptions" v-html="description" class="text-success"></div>
					<div v-for="script in detail.scripts">
						<div v-for="description in script.descriptions" v-html="description" class="text-success"></div>
						<pre><code :class="script.type" v-html="script.script"></code></pre>
						<div v-for="remark in script.remarks" v-html="remark" class="text-info"></div>
						<div v-for="warning in script.warnings" v-html="warning" class="text-warning"></div>
					</div>
					<div v-for="remark in detail.remarks" v-html="remark" class="text-info"></div>
					<div v-for="warning in detail.warnings" v-html="warning" class="text-warning"></div>
				</div>
			</div>
		</div>
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