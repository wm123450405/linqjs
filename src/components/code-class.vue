<template>
    <span class="hljs-class">
        <span :class="[isKeyword(type) ? 'hljs-keyword' : 'hljs-title']">{{ type.substring(0, 1).toUpperCase() + type.substring(1) }}</span>
        <template v-if="generics && generics.length">
            <span class="hljs-symbol">&lt;</span>
            <template v-for="(generic, index) in generics">
                <span v-if="index !== 0">,</span>
                <code-class :type="generic.name" :generics="generic.generics"></code-class>
            </template>
            <span class="hljs-symbol">&gt;</span>
        </template>
    </span>
</template>
<script>
    export default {
    	props: {
    		type: String,
			generics: Array
        }
    }
</script>