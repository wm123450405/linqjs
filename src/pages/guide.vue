<template>
    <content-template :title="data.title">
        <div v-for="(content, index) in data.contents" v-if="isNewer(content.since) && isOlder(content.deprecated)">
            <h4>{{ index + 1 }}. {{ capitalize(content.title) }}</h4>
            <div v-for="description in historys(content.descriptions)" class="indent" v-if="isNewer(description.since) && isOlder(description.deprecated)">
                <p v-if="description.type === 'description'" v-html="capitalize(description.content)" class="text-success"></p>
                <p v-if="description.type === 'remark'" v-html="capitalize(description.content)" class="text-info"></p>
                <p v-if="description.type === 'warning'" v-html="capitalize(description.content)" class="text-warning"></p>
                <p v-if="description.type === 'function'"><code-type-declare :type="description.type" :declare="description.content"></code-type-declare></p>
                <p v-if="description.type === 'example' && description.content.type === 'javascript' && !description.content.notTry" class="btn btn-success btn-sm" @click="tryCode(description.content.tryHref && examples[description.content.tryHref] || description.content.tryScript || description.content.href && examples[description.content.href] || description.content.script)"><i class="fa fa-fw fa-play"></i> {{ caption.try }}</p>
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
    		this.getJson('caption', () => `guides/${ this.code }`, () => `examples/${ this.code }`).then(([caption, data, examples]) => {
                this.caption = caption;
                this.data = data;
                this.examples = examples;
                this.highlight();
            });
        },
        methods: {
    	    tryCode(code) {
    	        this.$parent.$parent.tryCode(code);
            }
        }
    }
</script>