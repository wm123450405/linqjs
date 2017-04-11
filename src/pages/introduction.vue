<template>
    <content-template :title="data.title">
        <p>
            <span v-for="shield in data.shields"><a target="_blank" :href="shield.href"><img :src="shield.image" /></a>&nbsp;&nbsp;</span>
        </p>
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