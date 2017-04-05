<template>
    <content-template :title="`${ className }.${ propertyName } ${ capitalize(caption.property) }`">
        <div class="indent">
            <p>
                <span class="icon-mark bg-success" :title="caption.property">P</span>
                <span class="icon-mark bg-primary" v-if="propertyMeta.static" :title="caption.static">S</span>
                <shields v-if="propertyMeta.since" subject="since" :status="propertyMeta.since" color="yellow" :title="`${ caption.since }: ${ propertyMeta.since }`"></shields>
                <shields v-if="propertyMeta.deprecated" subject="deprecated" :status="propertyMeta.deprecated" color="yellow" :title="`${ caption.deprecated }: ${ propertyMeta.deprecated }`"></shields>
            </p>
            <p v-if="propertyMeta.description" class="text-success">{{ capitalize(propertyMeta.description) }}</p>
            <p v-for="description in propertyMeta.descriptions" v-html="capitalize(description)" class="text-success"></p>
            <p>
                <code class="hljs">
                    <span class="hljs-class"><span class="hljs-title">{{ className }}</span></span><template v-if="!propertyMeta.static && classMeta.type !== 'object'">.<span class="hljs-built_in">prototype</span></template>.<span class="hljs-attribute">{{ propertyName }}</span>
                    <span class="hljs-symbol">:</span>
                    <code-class :type="propertyMeta.type"></code-class>
                </code>
            </p>
            <h3 v-if="propertyMeta.remarks && propertyMeta.remarks.length">{{ caption.remarks }}:</h3>
            <p v-for="remark in propertyMeta.remarks" v-html="capitalize(remark)" class="text-info indent"></p>
            <h3 v-if="propertyMeta.warnings && propertyMeta.warnings.length">{{ caption.warnings }}:</h3>
            <p v-for="warning in propertyMeta.warnings" v-html="capitalize(warning)" class="text-warning indent"></p>
            <div v-for="(example, exampleIndex) in propertyMeta.examples" class="indent">
                <p>{{ exampleIndex + 1 }}. {{ example.description }}</p>
                <pre><code :class="example.script.type" v-html="example.script.script"></code></pre>
                <p v-for="description in example.descriptions" v-html="description"></p>
            </div>
            <div>{{ caption.see }} <i class="fa fa-fw fa-at"></i> <see-link :see="{ apis: className }"></see-link></div>
            <div v-for="see in propertyMeta.sees">{{ caption.see }} <i class="fa fa-fw fa-at"></i> <see-link :see="see"></see-link></div>
        </div>
    </content-template>
</template>
<script>
	export default {
		data() {
			return {
				caption: { },
				classMeta: { },
				propertyMeta: { }
			};
        },
        computed: {
			className() {
				return this.$route.params.class;
            },
			propertyName() {
				return this.$route.params.property;
			}
        },
        mounted() {
			this.getJson(`caption`, () => `apis/${ this.className }`, () => `apis/${ this.className }/properties/${ this.propertyName }`).then(([caption, classMeta, propertyMeta]) => {
				this.caption = caption;
				this.classMeta = classMeta;
				this.propertyMeta = propertyMeta;
			});
        }
    };
</script>