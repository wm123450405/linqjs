<template>
    <router-link :to="`/${ $route.params.lang || 'zh-hans' }/${ to }`"><slot></slot></router-link>
</template>
<script>
    export default {
    	props: {
    		to: String
        }
    }
</script>