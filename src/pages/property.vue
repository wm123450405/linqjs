<template>
    <content-template :title="`${ className }.${ propertyName } ${ capitalize(caption.property) }`">
        <div v-for="history in historys(propertyMeta.historys)" v-if="isNewer(history.since) && isOlder(history.deprecated)">
            <div class="indent">
                <p>
                    <i class="fa fa-fw fa-align-left fa-flip-vertical text-success" :title="caption.property"></i>
                    <i class="fa fa-fw fa-strikethrough text-danger" v-if="history.static" :title="caption.static"></i>
                    <shields v-if="history.since" subject="since" :status="history.since" color="yellow" :title="`${ caption.since }: ${ history.since }`"></shields>
                    <shields v-if="history.deprecated" subject="deprecated" :status="history.deprecated" color="yellow" :title="`${ caption.deprecated }: ${ history.deprecated }`"></shields>
                    <shields v-if="history.override" subject="override" :title="caption.override"></shields>
                    <shields v-if="history.readonly" subject="readonly" :title="caption.readonly"></shields>
                </p>
                <p v-if="history.description" class="text-success">{{ capitalize(history.description) }}</p>
                <p v-for="description in history.descriptions" v-html="capitalize(description)" class="text-success"></p>
                <p>
                    <code class="hljs">
                        <span class="hljs-class"><span class="hljs-title">{{ className }}</span></span><template v-if="!history.static && classMeta.type !== 'object'">.<span class="hljs-built_in">prototype</span></template>.<span class="hljs-attribute">{{ propertyName }}</span>
                        <span class="hljs-symbol">:</span>
                        <code-class :type="history.type"></code-class>
                        <template v-if="typeof history.default !== 'undefined'">
                            <span class="hljs-symbol">=</span>
                            <span class="hljs-variable">{{ history.default | json }}</span>
                        </template>
                    </code>
                </p>
                <h3 v-if="history.remarks && history.remarks.length">{{ caption.remarks }}:</h3>
                <p v-for="remark in history.remarks" v-html="capitalize(remark)" class="text-info indent"></p>
                <h3 v-if="history.warnings && history.warnings.length">{{ caption.warnings }}:</h3>
                <p v-for="warning in history.warnings" v-html="capitalize(warning)" class="text-warning indent"></p>
                <div v-for="(example, exampleIndex) in history.examples" class="indent">
                    <p>{{ exampleIndex + 1 }}. {{ example.description }} <span v-if="example.script.type === 'javascript'" class="btn btn-success btn-sm" @click="tryCode(example.script.tryHref && examples[example.script.tryHref] || example.script.tryScript || example.script.href && examples[example.script.href] || example.script.script)"><i class="fa fa-fw fa-play"></i> {{ caption.try }}</span></p>
                    <pre><code :class="example.script.type" v-html="example.script.script || examples[example.script.href]"></code></pre>
                    <p v-for="description in example.descriptions" v-html="description"></p>
                </div>
                <div>{{ caption.see }} <i class="fa fa-fw fa-at"></i> <see-link :see="{ apis: className }"></see-link></div>
                <div v-for="see in history.sees">{{ caption.see }} <i class="fa fa-fw fa-at"></i> <see-link :see="see"></see-link></div>
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