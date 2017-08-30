<template>
    <content-template :title="`${ meta.name || name } ${ capitalize(caption[meta.type]) }`">
        <p v-if="meta.type !== 'object'">
            <code class="hljs">
                <span class="hljs-keyword">{{ meta.type }}</span>
                <span class="hljs-class">
                    <span class="hljs-title">{{ meta.name }}</span>
                </span>
                <template v-if="meta.extends && meta.extends.length">
                    <span class="hljs-keyword">extends</span>
                </template>
                <template v-for="extend in meta.extends">
                    <code-class :type="extend"></code-class>
                </template>
                <template v-if="meta.implements && meta.implements.length">
                    <span class="hljs-keyword">implements</span>
                </template>
                <template v-for="implement in meta.implements">
                    <code-class :type="implement"></code-class>
                </template>
            </code>
        </p>
        <p v-for="description in meta.descriptions" v-html="capitalize(description)" class="text-success"></p>
        <div v-if="meta.constructors && hasHistroy(meta.constructors.histroys)">
            <h3>{{ caption.constructors }}</h3>
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>{{ caption.constructor }}</th>
                    <th>{{ caption.description }}</th>
                </tr>
                </thead>
                <tbody>
                <template v-for="histroy in histroys(meta.constructors.histroys)" v-if="isNewer(histroy.since) && isOlder(histroy.deprecated)" class="activatable">
                    <tr v-for="(overload, index) in histroy.overloads">
                        <td>
                            <mark-to :to="`constructor${ histroy.overloads.length > 1 ? '-' + index : '' }`">{{ meta.name || name }}(<span v-for="(parameter, index) in overload.parameters"><span v-if="index !== 0">, </span>{{ parameter.name }}</span>)</mark-to>
                        </td>
                        <td>
                            {{ overload.description }}
                        </td>
                    </tr>
                </template>
                </tbody>
            </table>
        </div>
        <div v-if="meta.properties && hasHistroys(meta.properties)">
            <h3>{{ caption.properties }}</h3>
            <div v-if="meta.properties">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th width="95"></th>
                        <th>{{ caption.property }}</th>
                        <th>{{ caption.defaultValue }}</th>
                        <th>{{ caption.description }}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <template v-for="property in meta.properties">
                        <tr v-for="histroy in histroys(property.histroys)" v-if="isNewer(histroy.since) && isOlder(histroy.deprecated)">
                            <td>
                                <span class="icon-mark bg-success" :title="caption.property">P</span>
                                <span class="icon-mark bg-primary" v-if="histroy.static" :title="caption.static">S</span>
                                <i class="fa fa-fw fa-chevron-circle-up text-danger" v-if="histroy.override" :title="caption.override"></i>
                            </td>
                            <td>
                                <lang-link :to="`apis/${ name }/property/${ property.name }`">{{ property.name }}</lang-link>
                            </td>
                            <td>{{ histroy.default | json }}</td>
                            <td>
                                {{ histroy.description }}
                            </td>
                        </tr>
                    </template>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-if="meta.methods && hasHistroys(meta.methods)">
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
                        <template v-for="histroy in histroys(method.histroys)" v-if="isNewer(histroy.since) && isOlder(histroy.deprecated)">
                            <tr v-for="(overload, overloadIndex) in histroy.overloads">
                                <td>
                                    <span class="icon-mark bg-success" :title="caption.method">M</span>
                                    <span class="icon-mark bg-primary" v-if="overload.static" :title="caption.static">S</span>
                                    <i class="fa fa-fw fa-chevron-circle-up text-danger" v-if="overload.override" :title="caption.override"></i>
                                </td>
                                <td>
                                    <lang-link :to="`apis/${ name }/method/${ method.name }${ histroy.overloads.length > 1 ? '/' + overloadIndex : '' }`">{{ method.name }}(<span v-for="(parameter, parameterIndex) in overload.parameters"><span v-if="parameterIndex !== 0">, </span>{{ parameter.name }}</span>)</lang-link>
                                </td>
                                <td>
                                    {{ overload.description }}
                                </td>
                            </tr>
                        </template>
                    </template>
                    </tbody>
                </table>
            </div>
        </div>
        <p v-for="remark in meta.remarks" v-html="capitalize(remark)" class="text-info"></p>
        <p v-for="warning in meta.warnings" v-html="capitalize(warning)" class="text-warning"></p>
        <div v-if="meta.constructors && meta.constructors.histroys">
            <div v-for="histroy in histroys(meta.constructors.histroys)" v-if="isNewer(histroy.since) && isOlder(histroy.deprecated)" class="activatable">
                <h3>{{ caption.constructors }}</h3>
                <div class="activatable" v-for="(overload, overloadIndex) in histroy.overloads">
                    <h4>{{ overloadIndex + 1 }}. {{ meta.name }}(<template v-for="(parameter, index) in overload.parameters"><template v-if="index !== 0">, </template>{{ parameter.name }}</template>)<mark-link :id="`constructor${ meta.constructors.length > 1 ? '-' + overloadIndex : '' }`"></mark-link></h4>
                    <div class="indent">
                        <p>
                            <shields v-if="histroy.since" subject="since" :status="histroy.since" color="yellow" :title="`${ caption.since }: ${ histroy.since }`"></shields>
                            <shields v-if="histroy.deprecated" subject="since" :status="histroy.deprecated" color="yellow" :title="`${ caption.since }: ${ histroy.deprecated }`"></shields>
                            <shields v-if="overload.newInstance" subject="new" :status="overload.newInstance" color="yellow" :title="caption.newInstance[overload.newInstance]"></shields>
                        </p>
                        <p v-if="overload.description" class="text-success">{{ capitalize(overload.description) }}</p>
                        <p v-for="description in overload.descriptions" v-html="capitalize(description)" class="text-success"></p>
                        <p>
                            <code-method-declare :overload="overload" :className="meta.name"></code-method-declare>
                        </p>
                        <div v-for="(example, exampleIndex) in overload.examples" class="indent">
                            <p>{{ exampleIndex + 1 }}. {{ example.description }}</p>
                            <pre><code :class="example.script.type" v-html="example.script.script || examples[example.script.href]"></code></pre>
                            <p v-for="description in example.descriptions" v-html="description"></p>
                        </div>
                        <div v-for="see in overload.sees">{{ caption.see }} <i class="fa fa-fw fa-at"></i> <see-link :see="see"></see-link></div>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="implement in meta.implements" v-if="!isKeyword(implement)">{{ caption.see }} <i class="fa fa-fw fa-at"></i> <see-link :see="{ apis: implement }"></see-link></div>
        <div v-for="extend in meta.extends" v-if="!isKeyword(extend)">{{ caption.see }} <i class="fa fa-fw fa-at"></i> <see-link :see="{ apis: extend }"></see-link></div>
        <div v-for="see in meta.sees">{{ caption.see }} <i class="fa fa-fw fa-at"></i> <see-link :see="see"></see-link></div>
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
			this.getJson(`caption`, () => `apis/${ this.name }`, () => `examples/${ this.name }`).then(([caption, meta, examples]) => {
				this.caption = caption;
				this.meta = meta;
				this.examples = examples;
                this.highlight();
			});
        }
    };
</script>