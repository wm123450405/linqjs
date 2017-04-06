<template>
    <content-template :title="data.title">
        <div v-for="(content, index) in data.contents">
            <h4>{{ index + 1 }}. {{ capitalize(content.title) }}</h4>
            <div v-for="description in content.descriptions" class="indent">
                <p v-if="description.type === 'description'" v-html="capitalize(description.content)" class="text-success"></p>
                <p v-if="description.type === 'remark'" v-html="capitalize(description.content)" class="text-info"></p>
                <p v-if="description.type === 'warning'" v-html="capitalize(description.content)" class="text-warning"></p>
                <p v-if="description.type === 'function'"><code-type-declare :type="description.type" :declare="description.content"></code-type-declare></p>
                <pre v-if="description.type === 'example'"><code :class="description.content.type" v-html="examples[description.content.href] || description.content.script"></code></pre>
                <div v-if="description.type === 'see'">{{ caption.see }} <i class="fa fa-fw fa-at"></i> <see-link :see="description.content"></see-link></div>
            </div>
        </div>
    </content-template>
</template>
<script>
    export default {
    	data() {
    		return {
				data: { },
				examples: { },
                caption: { }
            }
        },
    	computed: {
			code() {
    			return this.$route.params.code;
            }
        },
        mounted() {
    		this.getJson('caption', () => `guides/${ this.code }`, () => `/examples/${ this.code }`).then(([caption, data, examples]) => {
                this.caption = caption;
                this.data = data;
                this.examples = examples;
            });
        }
    }
</script>