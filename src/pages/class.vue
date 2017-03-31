<template>
    <content-template :title="`${ meta.name || name } ${ capitalize(caption.class) }`">
        <p v-for="description in meta.descriptions" v-html="description" class="text-success captialize"></p>
        <div v-if="meta.constructors && meta.constructors.length">
            <h3>{{ caption.constructors }}</h3>
            <div v-if="meta.constructors">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th>{{ caption.constructor }}</th>
                        <th>{{ caption.description }}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(method, index) in meta.constructors">
                        <td>
                            <mark-to :to="`constructor${ meta.constructors.length > 1 ? '-' + index : '' }`">{{ meta.name || name }}(<span v-for="(parameter, index) in method.parameters"><span v-if="index !== 0">, </span>{{ parameter.name }}</span>)</mark-to>
                        </td>
                        <td>
                            {{ method.description }}
                    </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-if="meta.properties && meta.properties.length">
            <h3>{{ caption.properties }}</h3>
            <div v-if="meta.properties">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th width="95"></th>
                        <th>{{ caption.property }}</th>
                        <th>{{ caption.description }}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="property in meta.properties">
                        <td>
                            <span class="icon-mark bg-success" :title="caption.property">P</span>
                            <span class="icon-mark bg-primary" v-if="property.static" :title="caption.static">S</span>
                        </td>
                        <td>
                            <!--<mark-to :to="property.name">{{ property.name }}</mark-to>-->
                            <lang-link :to="`apis/${ name }/property/${ property.name }`">{{ property.name }}</lang-link>
                        </td>
                        <td>
                            {{ property.description }}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-if="meta.methods && meta.methods.length">
            <h3>{{ caption.methods }}</h3>
            <div v-if="meta.methods">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th width="95"></th>
                        <th>{{ caption.method }}</th>
                        <th>{{ caption.description }}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <template v-for="method in meta.methods">
                    <tr v-for="(overload, overloadIndex) in method.overloads">
                        <td>
                            <span class="icon-mark bg-success" :title="caption.method">M</span>
                            <span class="icon-mark bg-primary" v-if="overload.static" :title="caption.static">S</span>
                        </td>
                        <td>
                            <lang-link :to="`apis/${ name }/method/${ method.name }${ method.overloads.length > 1 ? '/' + overloadIndex : '' }`">{{ method.name }}(<span v-for="(parameter, parameterIndex) in overload.parameters"><span v-if="parameterIndex !== 0">, </span>{{ parameter.name }}</span>)</lang-link>
                            <!--<mark-to :to="`${ method.name }${ method.overloads.length > 1 ? '-' + overloadIndex : '' }`">{{ method.name }}(<span v-for="(parameter, parameterIndex) in overload.parameters"><span v-if="parameterIndex !== 0">, </span>{{ parameter.name }}</span>)</mark-to>-->
                        </td>
                        <td>
                            {{ overload.description }}
                        </td>
                    </tr>
                    </template>
                    </tbody>
                </table>
            </div>
        </div>
        <p v-for="remark in meta.remarks" v-html="remark" class="text-info captialize"></p>
        <p v-for="warning in meta.warnings" v-html="warning" class="text-warning captialize"></p>
        <div v-if="meta.constructors && meta.constructors.length" class="activatable">
            <h3>{{ caption.constructors }}</h3>
            <div class="activatable" v-for="(method, methodIndex) in meta.constructors">
                <h4>{{ methodIndex + 1 }}. {{ meta.name }}(<template v-for="(parameter, index) in method.parameters"><template v-if="index !== 0">, </template>{{ parameter.name }}</template>)<mark-link :id="`constructor${ meta.constructors.length > 1 ? '-' + methodIndex : '' }`"></mark-link></h4>
                <div class="indent">
                    <p>
                        <shields v-if="method.since" subject="since" :status="method.since" color="yellow" :title="`${ caption.since }: ${ method.since }`"></shields>
                        <shields v-if="method.newInstance" subject="new" :status="method.newInstance" color="yellow" :title="caption.newInstance[method.newInstance]"></shields>
                    </p>
                    <p v-if="method.description" class="text-success captialize">{{ method.description }}</p>
                    <p v-for="description in method.descriptions" v-html="description" class="text-success captialize"></p>
                    <p>
                        <code class="hljs">
                            <span class="hljs-class"><span class="hljs-title">{{ meta.name }}</span></span>
                            (
                            <template v-for="(parameter, parameterIndex) in method.parameters">
                            <template v-if="parameterIndex !== 0">,</template>
                                <br/>
                                <span class="hljs-params" style="padding-left:4em">{{ parameter.name }}</span>
                                <span class="hljs-symbol">:</span>
                                <template v-for="(type, typeIndex) in parameter.types">
                                    <template v-if="typeIndex !== 0"><span class="hljs-symbol"> || </span></template>
                                    <span class="hljs-class"><span :class="[isKeyword(type) ? 'hljs-keyword' : 'hljs-title']">{{ type }}</span></span>
                                </template>
                                <template v-if="parameter.defaultValue"> = <span class="hljs-variable">{{ parameter.defaultValue }}</span></template>
                            </template>
                            <br/>
                            )
                            <span class="hljs-symbol">:</span>
                            <span class="hljs-class"><span :class="[isKeyword(method.returns) ? 'hljs-keyword' : 'hljs-title']">{{ method.returns }}</span></span>
                        </code>
                    </p>
                    <div v-for="(example, exampleIndex) in method.examples" class="indent">
                        <p>{{ exampleIndex + 1 }}. {{ example.description }}</p>
                        <pre><code :class="example.script.type" v-html="example.script.script || examples[example.script.href]"></code></pre>
                        <p v-for="description in example.descriptions" v-html="description"></p>
                    </div>
                    <div v-for="see in method.sees">{{ caption.see }} <i class="fa fa-fw fa-at"></i> <see-link :see="see"></see-link></div>
                </div>
            </div>
        </div>
    </content-template>
</template>
<script>
	export default {
		data() {
			return {
				caption: { },
				meta: { },
				examples: { }
			};
        },
        computed: {
			name() {
				return this.$route.params.class;
            }
        },
        watch: {
			name() {
				this.getJson(`apis/${ this.name }`).then(meta => {
					this.meta = meta;
				});
            }
        },
        mounted() {
			this.getJson(`caption`, `apis/${ this.name }`, `/examples/${ this.name }`).then(([caption, meta, examples]) => {
				this.caption = caption;
				this.meta = meta;
				this.examples = examples;
			});
        }
    };
</script>