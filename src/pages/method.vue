<template>
    <content-template :title="`${ className }.${ methodName } ${ capitalize(caption.method) }`">
        <div class="activatable" v-for="(overload, overloadIndex) in methodMeta.overloads" v-if="overloadIndex === index">
            <div class="indent">
                <p>
                    <span class="icon-mark bg-success" :title="caption.method">M</span>
                    <span class="icon-mark bg-primary" v-if="overload.static" :title="caption.static">S</span>
                    <shields v-if="overload.since" subject="since" :status="overload.since" color="yellow" :title="`${ caption.since }: ${ overload.since }`"></shields>
                    <shields v-if="overload.deprecated" subject="deprecated" :status="overload.deprecated" color="yellow" :title="`${ caption.deprecated }: ${ overload.deprecated }`"></shields>
                    <shields v-if="overload.override" subject="override" :title="`${ caption.override }`"></shields>
                </p>
                <p v-if="overload.description" class="text-success">{{ capitalize(overload.description) }}</p>
                <p v-for="description in overload.descriptions" v-html="capitalize(description)" class="text-success"></p>
                <p>
                    <code-method-declare :overload="overload" :className="className" :methodName="methodName" :isObject="classMeta.type !== 'object'"></code-method-declare>
                </p>
                <h4 v-if="overload.parameters && overload.parameters.length">{{ caption.parameters }}:</h4>
                <p v-for="parameter in overload.parameters">
                    <i><b style="vertical-align: middle">{{ parameter.name }}:</b></i>
                    <template v-for="type in parameter.types">
                        <code-type-declare :type="type" :name="parameter.name" :declare="parameter.declare"></code-type-declare>
                    </template>
                    <br/>
                    <span v-for="description in parameter.descriptions" class="indent"><span v-html="description"></span><br/></span>
                </p>
                <p v-if="overload.returns.type !== 'void' || overload.returns.descriptions && overload.returns.descriptions.length">
                    <b style="vertical-align: middle">{{ upper(caption.returns) }}:</b>
                    <code-type-declare :type="overload.returns.type" :declare="overload.returns.declare"></code-type-declare>
                    <br/>
                    <span v-for="description in overload.returns.descriptions" class="indent"><span v-html="description"></span><br/></span>
                </p>
                <h4 v-if="overload.generics && overload.generics.length">{{ caption.generics }}:</h4>
                <p v-for="generic in overload.generics">
                    <i style="vertical-align: middle"><b>{{ generic.name }}:</b></i>
                    <template v-for="where in generic.wheres">
                        <code-type-declare :type="where.type" :declare="where.declare"></code-type-declare>
                    </template>
                    <br/>
                    <span v-for="description in generic.descriptions" class="indent"><span v-html="description"></span><br/></span>
                </p>
                <h3 v-if="overload.remarks && overload.remarks.length">{{ caption.remarks }}:</h3>
                <p v-for="remark in overload.remarks" v-html="capitalize(remark)" class="text-info indent"></p>
                <h3 v-if="overload.warnings && overload.warnings.length">{{ caption.warnings }}:</h3>
                <p v-for="warning in overload.warnings" v-html="capitalize(warning)" class="text-warning indent"></p>
                <h3 v-if="overload.examples && overload.examples.length">{{ caption.examples }}:</h3>
                <div v-for="(example, exampleIndex) in overload.examples" class="indent">
                    <p>{{ exampleIndex + 1 }}. {{ example.description }}</p>
                    <pre><code :class="example.script.type" v-html="example.script.script || examples[example.script.href]"></code></pre>
                    <p v-for="description in example.descriptions" v-html="capitalize(description)"></p>
                </div>
                <div>{{ caption.see }} <i class="fa fa-fw fa-at"></i> <see-link :see="{ apis: className }"></see-link></div>
                <div v-for="see in overload.sees">{{ caption.see }} <i class="fa fa-fw fa-at"></i> <see-link :see="see"></see-link></div>
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
				methodMeta: { },
				examples: { }
			};
        },
        computed: {
			className() {
				return this.$route.params.class;
            },
			methodName() {
				return this.$route.params.method;
			},
            index() {
				return this.$route.params.index || 0;
            }
        },
        mounted() {
			this.getJson(`caption`, () => `apis/${ this.className }`, () => `apis/${ this.className }/methods/${ this.methodName }`, () => `/examples/${ this.className }/methods/${ this.methodName }`).then(([caption, classMeta, methodMeta, examples]) => {
				this.caption = caption;
				this.classMeta = classMeta;
				this.methodMeta = methodMeta;
				this.examples = examples;
			});
        }
    };
</script>