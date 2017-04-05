<template>
    <content-template :title="`${ className }.${ methodName } ${ capitalize(caption.method) }`">
        <div class="activatable" v-for="(overload, overloadIndex) in methodMeta.overloads" v-if="overloadIndex === index">
            <div class="indent">
                <p>
                    <span class="icon-mark bg-success" :title="caption.method">M</span>
                    <span class="icon-mark bg-primary" v-if="overload.static" :title="caption.static">S</span>
                    <shields v-if="overload.since" subject="since" :status="overload.since" color="yellow" :title="`${ caption.since }: ${ overload.since }`"></shields>
                    <shields v-if="overload.deprecated" subject="deprecated" :status="overload.deprecated" color="yellow" :title="`${ caption.deprecated }: ${ overload.deprecated }`"></shields>
                </p>
                <p v-if="overload.description" class="text-success">{{ capitalize(overload.description) }}</p>
                <p v-for="description in overload.descriptions" v-html="capitalize(description)" class="text-success"></p>
                <p>
                    <code class="hljs">
                        <span class="hljs-class"><span class="hljs-title">{{ className }}</span></span><template v-if="!overload.static && classMeta.type !== 'object'">.<span class="hljs-built_in">prototype</span></template>.<span class="hljs-attribute">{{ methodName }}</span>
                        (
                        <template v-for="(parameter, parameterIndex) in overload.parameters">
                            <template v-if="parameterIndex !== 0">,</template>
                            <br/>
                            <span class="hljs-params" style="padding-left:4em">{{ parameter.name }}</span>
                            <span class="hljs-symbol">:</span>
                            <template v-for="(type, typeIndex) in parameter.types">
                                <template v-if="typeIndex !== 0"><span class="hljs-symbol"> || </span></template>
                                <code-class :type="type"></code-class>
                            </template>
                            <template v-if="parameter.defaultValue"> = <span class="hljs-variable">{{ parameter.defaultValue }}</span></template>
                        </template>
                        <template v-if="overload.parameters && overload.parameters.length"><br/></template>
                        )
                        <span class="hljs-symbol">:</span>
                        <code-class :type="overload.returns.type" :generics="overload.returns.generics"></code-class>
                    </code>
                </p>
                <h4 v-if="overload.parameters && overload.parameters.length">{{ caption.parameters }}:</h4>
                <p v-for="parameter in overload.parameters">
                    <i style="vertical-align: middle"><b>{{ parameter.name }}:</b></i>
                    <template v-for="type in parameter.types">
                        <code-declare :type="type" :name="parameter.name" :declare="parameter.declare"></code-declare>
                    </template>
                    <br/>
                    <span v-for="description in parameter.descriptions" class="indent"><span v-html="description"></span><br/></span>
                </p>
                <h4>
                    {{ caption.returns }}:
                    <code-declare :type="overload.returns.type" :declare="overload.returns.declare"></code-declare>
                </h4>
                <p>
                    <span v-for="description in overload.returns.descriptions" class="indent"><span v-html="description"></span><br/></span>
                </p>
                <h4 v-if="overload.generics && overload.generics.length">{{ caption.generics }}:</h4>
                <p v-for="generic in overload.generics">
                    <i style="vertical-align: middle"><b>{{ generic.name }}:</b></i>
                    <template v-for="where in generic.wheres">
                        <code-declare :type="where.type" :declare="where.declare"></code-declare>
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