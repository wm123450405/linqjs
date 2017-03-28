<template>
    <a :href="`#${ $route.path }#${ to }`" @click="scrollTo"><slot></slot></a>
</template>
<script>
    export default {
    	props: {
    		to: String
        },
        methods: {
    		scrollTo() {
				setTimeout(() => $(document).scrollTop($('#' + this.to).offset().top));
            }
        }
    }
</script>