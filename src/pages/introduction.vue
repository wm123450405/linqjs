<template>
    <content-template :title="data.title">
        <div v-for="content in data.contents" v-html="content"></div>
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