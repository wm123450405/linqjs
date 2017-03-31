<template>
    <code class="hljs" :title="type">
        <template v-if="type && type.toLowerCase() === 'function' && declare">
            <span class="hljs-function">{{ name }}</span>
            (
            <template v-for="(declareParameter, declareParameterIndex) in declare.parameters">
            <template v-if="declareParameterIndex !== 0">,</template>
            <span class="hljs-params">{{ declareParameter.name }}</span>
            <span class="hljs-symbol">:</span>
            <template v-for="(type, typeIndex) in declareParameter.types">
                <template v-if="typeIndex !== 0"><span class="hljs-symbol"> || </span></template>
                <span class="hljs-class"><span :class="[isKeyword(type) ? 'hljs-keyword' : 'hljs-title']">{{ type }}</span></span>
            </template>
            <template v-if="declareParameter.defaultValue"> = <span class="hljs-variable">{{ declareParameter.defaultValue }}</span></template>
        </template>
            )
            <span class="hljs-symbol">:</span>
            <span class="hljs-class"><span :class="[isKeyword(declare.returns.type) ? 'hljs-keyword' : 'hljs-title']">{{ declare.returns.type }}</span></span>
        </template>
        <span class="hljs-class" v-else><span :class="[isKeyword(type) ? 'hljs-keyword' : 'hljs-title']">{{ type }}</span></span>
    </code>
</template>
<script>
    export default {
    	props: {
    		name: {
    			type: String,
                default: 'function'
            },
			type: String,
			declare: Object
        }
    }
</script>