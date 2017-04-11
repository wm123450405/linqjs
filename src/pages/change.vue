<template>
    <div>
        <div v-for="change in changes">
            <h3>{{ change.version }}</h3>
            <p>
                <shields v-if="change.prepublish" :subject="caption.prepublish_version || (caption.prepublish + caption.version)"></shields>
                <shields v-if="change.publish" :subject="caption.publish_date || (caption.publish + caption.date)" :status="change.publish" color="yellow"></shields>
            </p>
            <p v-for="content in change.contents" v-html="content"></p>
            <a v-if="!change.prepublish" target="_blank" :href="`https://github.com/wm123450405/linqjs/tree/${ change.version }`">release</a>
        </div>
    </div>
</template>
<script>
    export default {
    	data() {
    		return {
				caption: { },
    			changes: []
            };
        },
        mounted() {
			this.getJson('caption', ['change']).then(([caption, changes]) => {
				this.caption = caption;
				this.changes = changes.reverse();
			});
        }
    }
</script>