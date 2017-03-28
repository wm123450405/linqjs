<template>
    <a :href="`#${ $route.path }#${ id }`" :id="id"><i class="fa fa-fw fa-link"></i></a>
</template>
<script>
    export default {
    	props: {
    		id: String
        }
    }
</script>