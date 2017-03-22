<template>
    <router-link :to="`/${ $route.params.lang || 'zh-hans' }/${ to }`"></router-link>
</template>
<script>
    export default {
    	props: {
    		to: String
        }
    }
</script>