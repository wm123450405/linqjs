<template>
    <code class="hljs inline" :title="typeName">
        <template v-if="typeName && typeName.toLowerCase() === 'function' && declare">
            <span class="hljs-function">{{ name }}</span>
            (
            <template v-for="(declareParameter, declareParameterIndex) in declare.parameters">
                <template v-if="declareParameterIndex !== 0">,</template>
                <span class="hljs-params">{{ declareParameter.name }}</span>
                <span class="hljs-symbol">:</span>
                <template v-for="(parameterType, parameterTypeIndex) in declareParameter.types">
                    <template v-if="parameterTypeIndex !== 0"><span class="hljs-symbol"> || </span></template>
                    <code-class :type="parameterType"></code-class>
                </template>
                <template v-if="declareParameter.defaultValue"> = <span class="hljs-variable">{{ declareParameter.defaultValue }}</span></template>
            </template>
            )
            <span class="hljs-symbol">:</span>
            <code-class :type="declare.returns.type" :generics="declare.returns.generics"></code-class>
        </template>
        <code-class v-else :type="typeName" :generics="typeGenerics"></code-class>
    </code>
</template>
<script>
    export default {
    	props: {
    		name: {
    			type: String,
                default: 'function'
            },
			type: [ String, Object ],
			generics: Array,
			declare: Object
        },
        computed: {
            typeName() {
            	if (typeof this.type === 'string' || this.type instanceof String) {
            		return this.type;
                } else {
            		return this.type.name;
                }
            },
			typeGenerics() {
				if (typeof this.type === 'string' || this.type instanceof String) {
					return this.generics;
				} else {
					return this.type.generics;
				}
            }
        }
    }
</script>