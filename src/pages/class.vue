<template>
    <content-template :title="meta.title">
        <div v-for="description in meta.descriptions" v-html="description" class="text-success"></div>
        <h3>{{ caption.constructors }}</h3>
        <div v-if="meta.constructors">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <td>{{ caption.constructor }}</td>
                    <td>{{ caption.description }}</td>
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
        <h3>{{ caption.properties }}</h3>
        <div v-if="meta.properties">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <td width="95"></td>
                    <td>{{ caption.property }}</td>
                    <td>{{ caption.description }}</td>
                </tr>
                </thead>
                <tbody>
                <tr v-for="property in meta.properties">
                    <td>
                        <span class="icon-mark bg-success" :title="caption.property">P</span>
                        <span class="icon-mark bg-primary" v-if="property.static" :title="caption.static">S</span>
                    </td>
                    <td>
                        <mark-to :to="property.name">{{ property.name }}</mark-to>
                    </td>
                    <td>
                        {{ property.description }}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <h3>{{ caption.methods }}</h3>
        <div v-if="meta.methods">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <td width="95"></td>
                    <td>{{ caption.method }}</td>
                    <td>{{ caption.description }}</td>
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
                        <mark-to :to="`${ method.name }${ method.overloads.length > 1 ? '-' + overloadIndex : '' }`">{{ method.name }}(<span v-for="(parameter, parameterIndex) in overload.parameters"><span v-if="parameterIndex !== 0">, </span>{{ parameter.name }}</span>)</mark-to>
                    </td>
                    <td>
                        {{ overload.description }}
                    </td>
                </tr>
                </template>
                </tbody>
            </table>
        </div>
        <div v-for="remark in meta.remarks" v-html="remark" class="text-info"></div>
        <div v-for="warning in meta.warnings" v-html="warning" class="text-warning"></div>
        <h3>{{ caption.constructors }}<mark-link id="@constructors"></mark-link></h3>
        <div v-for="(method, methodIndex) in meta.constructors">
            <h4>{{ methodIndex + 1 }}. {{ meta.name }}(<template v-for="(parameter, index) in method.parameters"><template v-if="index !== 0">, </template>{{ parameter.name }}</template>)<mark-link :id="`constructor${ meta.constructors.length > 1 ? '-' + methodIndex : '' }`"></mark-link></h4>
            <div class="indent">
                <p>
                    <shields v-if="method.since" subject="since" :status="method.since" color="yellow" :title="`${ caption.since }: ${ method.since }`"></shields>
                    <shields v-if="method.newInstance" subject="new" :status="method.newInstance" color="yellow" :title="caption.newInstance[method.newInstance]"></shields>
                </p>
                <p v-if="!method.descriptions || method.descriptions.length === 0">{{ method.description }}</p>
                <p v-for="description in method.descriptions" v-html="description"></p>
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
                        </template>
                        <br/>
                        )
                        <span class="hljs-symbol">:</span>
                        <span class="hljs-class"><span :class="[isKeyword(method.returns) ? 'hljs-keyword' : 'hljs-title']">{{ method.returns }}</span></span>
                    </code>
                </p>
                <p v-for="see in method.sees"><i class="fa fa-fw fa-at"></i>see <a :href="see.href">{{ see.title }}</a></p>
            </div>
        </div>
        <h3>{{ caption.properties }}<mark-link id="@properties"></mark-link></h3>
        <div v-for="(property, propertyIndex) in meta.properties">
            <h4>{{ propertyIndex + 1 }}. {{ meta.name }}<template v-if="!property.static">.prototype</template>.{{ property.name }}<mark-link :id="property.name"></mark-link></h4>
            <div class="indent">
                <p>
                    <span class="icon-mark bg-success" :title="caption.property">P</span>
                    <span class="icon-mark bg-primary" v-if="property.static" :title="caption.static">S</span>
                    <shields v-if="property.since" subject="since" :status="property.since" color="yellow" :title="`${ caption.since }: ${ property.since }`"></shields>
                </p>
                <p v-if="!property.descriptions || property.descriptions.length === 0">{{ property.description }}</p>
                <p v-for="description in property.descriptions" v-html="description"></p>
                <p>
                    <code class="hljs">
                        <span class="hljs-class"><span class="hljs-title">{{ meta.name }}</span></span><template v-if="!property.static">.<span class="hljs-attr">prototype</span></template>.<span class="hljs-attr">{{ property.name }}</span>
                        <span class="hljs-symbol">:</span>
                        <span class="hljs-class"><span :class="[isKeyword(property.type) ? 'hljs-keyword' : 'hljs-title']">{{ property.type }}</span></span>
                    </code>
                </p>
                <p v-for="see in property.sees"><i class="fa fa-fw fa-at"></i>see <a :href="see.href">{{ see.title }}</a></p>
            </div>
        </div>
        <h3>{{ caption.methods }}<mark-link id="@methods"></mark-link></h3>
        <div v-for="(method, methodIndex) in meta.methods">
            <div v-for="(overload, overloadIndex) in method.overloads">
                <h4>{{ methodIndex + 1 }}<template v-if="method.overloads.length > 1">-{{ overloadIndex + 1 }}</template>. {{ meta.name }}<template v-if="!overload.static">.prototype</template>.{{ method.name }}(<template v-for="(parameter, index) in method.parameters"><template v-if="index !== 0">, </template>{{ parameter.name }}</template>)<mark-link :id="`${ method.name }${ method.overloads.length > 1 ? '-' + overloadIndex : '' }`"></mark-link></h4>
                <div class="indent">
                    <p>
                        <span class="icon-mark bg-success" :title="caption.property">M</span>
                        <span class="icon-mark bg-primary" v-if="overload.static" :title="caption.static">S</span>
                        <shields v-if="overload.since" subject="since" :status="overload.since" color="yellow" :title="`${ caption.since }: ${ overload.since }`"></shields>
                    </p>
                    <p v-if="!overload.descriptions || overload.descriptions.length === 0">{{ overload.description }}</p>
                    <p v-for="description in overload.descriptions" v-html="description"></p>
                    <p>
                        <code class="hljs">
                            <span class="hljs-class"><span class="hljs-title">{{ meta.name }}</span></span><template v-if="!overload.static">.<span class="hljs-attr">prototype</span></template>.<span class="hljs-function">{{ method.name }}</span>
                            (
                            <template v-for="(parameter, parameterIndex) in overload.parameters">
                                <template v-if="parameterIndex !== 0">,</template>
                                <br/>
                                <span class="hljs-params" style="padding-left:4em">{{ parameter.name }}</span>
                                <span class="hljs-symbol">:</span>
                                <template v-for="(type, typeIndex) in parameter.types">
                                    <template v-if="typeIndex !== 0"><span class="hljs-symbol"> || </span></template>
                                    <span class="hljs-class"><span :class="[isKeyword(type) ? 'hljs-keyword' : 'hljs-title']">{{ type }}</span></span>
                                </template>
                            </template>
                            <br/>
                            )
                            <span class="hljs-symbol">:</span>
                            <span class="hljs-class"><span :class="[isKeyword(overload.returns) ? 'hljs-keyword' : 'hljs-title']">{{ overload.returns }}</span></span>
                        </code>
                    </p>
                    <p v-for="see in overload.sees"><i class="fa fa-fw fa-at"></i>see <a :href="see.href">{{ see.title }}</a></p>
                </div>
            </div>
        </div>
    </content-template>
</template>
<style lang="sass">
    .indent
        padding-left: 20px
        .indent
            padding-left: 40px
</style>
<script>
	export default {
		data() {
			return {
				caption: { },
				meta: { }
			};
        },
        computed: {
			name() {
				return this.$route.params.class;
            }
        },
        mounted() {
			this.getJson(`caption`, `apis/${ this.name }`).then(([caption, meta]) => {
				this.caption = caption;
				this.meta = meta;
			});
        }
    };
</script>