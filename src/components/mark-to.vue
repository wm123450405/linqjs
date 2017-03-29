<template>
    <a :href="`#${ $route.path }#${ to }`" @click="scrollById"><slot></slot></a>
</template>
<script>
    export default {
    	props: {
    		to: String
        },
        methods: {
    		scrollById() {
    			this.scrollTo($('#' + this.to));
            }
        }
    }
</script>