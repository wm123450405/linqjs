<template>
    <div>
        <p>{{ capitalize(caption.author) }}: {{ about.author }}</p>
        <p>{{ capitalize(caption.email) }}: <span v-for="email in about.emails"><a :href="`mailto:${ email }`">{{ email }}</a>&nbsp;&nbsp;</span></p>
        <p>{{ capitalize(caption.project) }}: <span v-for="project in about.projects"><a target="_blank" :href="project.href">{{ project.name }}</a>&nbsp;&nbsp;</span></p>
        <p>{{ capitalize(caption.publish) }}: <span v-for="publish in about.publishs"><a target="_blank" :href="publish.href">{{ publish.name }}</a>&nbsp;&nbsp;</span></p>
    </div>
</template>
<script>
    export default {
    	data() {
    		return {
    			caption: { },
				about: { }
            };
        },
    	mounted() {
    		this.getJson('caption', 'about').then(([caption, about]) => {
    			this.caption = caption;
    			this.about = about;
            })
        }
    }
</script>