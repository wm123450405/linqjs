<template>
    <div>
        <div v-if="data.code">
            <h1>{{ data.title }}</h1>
        </div>
    </div>
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