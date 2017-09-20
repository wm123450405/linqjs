<template>
	<content-template :title="data.title">
		<div v-for="(content,index) in data.contents">
			<h3>{{ index + 1 }}. {{ content.title }}<mark-link v-if="content.code" :id="content.code"></mark-link></h3>
			<div v-for="detail in content.details" style="padding-left: 20px">
				<div v-if="detail.type === 'example'">
					<h4 v-if="detail.runtime">{{ detail.runtime }}:</h4>
					<p v-for="description in detail.descriptions" v-html="capitalize(description)" class="text-success"></p>
					<div v-for="script in detail.scripts">
						<p v-for="description in script.descriptions" v-html="capitalize(description)" class="text-success"></p>
						<pre v-if="script.type === '<script>'"><code :class="html" v-text="toScript(script.src)"></code></pre>
						<pre v-else><code :class="script.type" v-html="script.script"></code></pre>
						<p v-for="remark in script.remarks" v-html="capitalize(remark)" class="text-info"></p>
						<p v-for="warning in script.warnings" v-html="capitalize(warning)" class="text-warning"></p>
					</div>
					<p v-for="remark in detail.remarks" v-html="capitalize(remark)" class="text-info"></p>
					<p v-for="warning in detail.warnings" v-html="capitalize(warning)" class="text-warning"></p>
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
		},
		methods: {
            toScript(src) {
                return `<script src="${ location.origin + (src.startsWith('/') ? src.substring(1) : (location.pathname + src)) }"><\/script>`;
			}
		}
	};
</script>