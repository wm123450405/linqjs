<template>
    <code class="hljs">
        <span v-if="className" class="hljs-class"><span class="hljs-title">{{ className }}</span></span><template v-if="className && methodName && !overload.static && isObject">.<span class="hljs-built_in">prototype</span></template><template v-if="methodName">.<span class="hljs-attribute">{{ methodName }}</span></template>
        (
        <template v-for="(parameter, parameterIndex) in overload.parameters">
        <template v-if="parameterIndex !== 0">,</template>
        <br/>
        <span class="hljs-params" style="padding-left:4em"><span v-if="parameter.params" class="hljs-symbol">...</span>{{ parameter.name }}</span>
        <span class="hljs-symbol">:</span>
        <template v-for="(type, typeIndex) in parameter.types">
            <template v-if="typeIndex !== 0"><span class="hljs-symbol"> || </span></template>
            <template v-if="parameter.params">
                <code-class type="array"></code-class>
                <span class="hljs-symbol">&lt;</span>
                <code-class :type="type"></code-class>
                <span class="hljs-symbol">&gt;</span>
            </template>
            <code-class v-else :type="type"></code-class>
        </template>
        <template v-if="typeof parameter.defaultValue !== 'undefined'"> = <span class="hljs-variable">{{ parameter.defaultValue }}</span></template>
    </template>
        <template v-if="overload.parameters && overload.parameters.length"><br/></template>
        )
        <span class="hljs-symbol">:</span>
        <code-class :type="overload.returns.type" :generics="overload.returns.generics"></code-class>
    </code>
</template>
<script>
    export default {
    	props: {
			overload: Object,
            className: String,
            methodName: String,
            isObject: Boolean
        }
    }
</script>