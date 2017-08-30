<template>
    <router-link :to="`/${ $route.params.lang || 'zh-cn' }/${ toVersion ? toVersion + '/' : version !== lastest ? version + '/' : '' }${ to }`"><slot></slot></router-link>
</template>
<script>
    export default {
    	props: {
    		to: String,
            toVersion: String
        }
    }
</script>