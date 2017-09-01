<template>
    <content-template :title="`${ className }.${ propertyName } ${ capitalize(caption.property) }`">
        <div v-for="histroy in histroys(propertyMeta.histroys)" v-if="isNewer(histroy.since) && isOlder(histroy.deprecated)">
            <div class="indent">
                <p>
                    <i class="fa fa-fw fa-align-left fa-flip-vertical text-success" :title="caption.property"></i>
                    <i class="fa fa-fw fa-strikethrough text-danger" v-if="histroy.static" :title="caption.static"></i>
                    <shields v-if="histroy.since" subject="since" :status="histroy.since" color="yellow" :title="`${ caption.since }: ${ histroy.since }`"></shields>
                    <shields v-if="histroy.deprecated" subject="deprecated" :status="histroy.deprecated" color="yellow" :title="`${ caption.deprecated }: ${ histroy.deprecated }`"></shields>
                    <shields v-if="histroy.override" subject="override" :title="caption.override"></shields>
                    <shields v-if="histroy.readonly" subject="readonly" :title="caption.readonly"></shields>
                </p>
                <p v-if="histroy.description" class="text-success">{{ capitalize(histroy.description) }}</p>
                <p v-for="description in histroy.descriptions" v-html="capitalize(description)" class="text-success"></p>
                <p>
                    <code class="hljs">
                        <span class="hljs-class"><span class="hljs-title">{{ className }}</span></span><template v-if="!histroy.static && classMeta.type !== 'object'">.<span class="hljs-built_in">prototype</span></template>.<span class="hljs-attribute">{{ propertyName }}</span>
                        <span class="hljs-symbol">:</span>
                        <code-class :type="histroy.type"></code-class>
                        <template v-if="typeof histroy.default !== 'undefined'">
                            <span class="hljs-symbol">=</span>
                            <span class="hljs-variable">{{ histroy.default | json }}</span>
                        </template>
                    </code>
                </p>
                <h3 v-if="histroy.remarks && histroy.remarks.length">{{ caption.remarks }}:</h3>
                <p v-for="remark in histroy.remarks" v-html="capitalize(remark)" class="text-info indent"></p>
                <h3 v-if="histroy.warnings && histroy.warnings.length">{{ caption.warnings }}:</h3>
                <p v-for="warning in histroy.warnings" v-html="capitalize(warning)" class="text-warning indent"></p>
                <div v-for="(example, exampleIndex) in histroy.examples" class="indent">
                    <p>{{ exampleIndex + 1 }}. {{ example.description }} <span v-if="example.script.type === 'javascript'" class="btn btn-success btn-sm" @click="tryCode(example.script.tryHref && examples[example.script.tryHref] || example.script.tryScript || example.script.href && examples[example.script.href] || example.script.script)"><i class="fa fa-fw fa-play"></i> {{ caption.try }}</span></p>
                    <pre><code :class="example.script.type" v-html="example.script.script || examples[example.script.href]"></code></pre>
                    <p v-for="description in example.descriptions" v-html="description"></p>
                </div>
                <div>{{ caption.see }} <i class="fa fa-fw fa-at"></i> <see-link :see="{ apis: className }"></see-link></div>
                <div v-for="see in histroy.sees">{{ caption.see }} <i class="fa fa-fw fa-at"></i> <see-link :see="see"></see-link></div>
            </div>
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
                this.highlight();
			});
        }
    };
</script>