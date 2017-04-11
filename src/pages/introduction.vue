<template>
    <content-template :title="data.title">
        <a v-for="shield in data.shields" :href="shield.href"><img :src="shield.image" /></a>
        <p v-for="content in data.contents" v-html="capitalize(content)"></p>
    </content-template>
</template>
<script>
    export default {
    	data() {
    		return {
    			data: { }
            };
        },
    	mounted() {
            this.getJson('introduction').then(data => this.data = data);
        }
    };
</script>