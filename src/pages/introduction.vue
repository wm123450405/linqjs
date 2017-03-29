<template>
    <content-template :title="data.title">
        <p v-for="content in data.contents" v-html="content" class="captialize"></p>
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