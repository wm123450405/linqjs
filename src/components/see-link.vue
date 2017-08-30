<template>
    <span>
        <lang-link v-if="see.guide" :to="`guides/${ see.guide }`">{{ subject }}</lang-link>
        <lang-link v-if="!see.guide && see.apis" :to="`apis/${ see.apis }` + (see.property ? `/property/${ see.property }` : see.method ? `/method/${ see.method }` + (typeof see.index !== 'undefined' ? `/${ see.index }` : '') : '')">{{ see.apis ? (see.apis + (see.property ? '.' + see.property : see.method ? '.' + see.method : '')) : subject }}</lang-link>
        <mark-to v-if="!see.guide && !see.apis && see.mark" :to="see.href">{{ subject }}</mark-to>
        <lang-link v-if="!see.guide && !see.apis && !see.mark && see.inner" :to="see.href">{{ subject }}</lang-link>
        <a v-if="!see.guide && !see.mark && !see.inner && !see.apis && see.href" target="_blank" :href="outerLink(see.href)">{{ subject }}</a>
    </span>
</template>
<script>
    export default {
    	props: {
    		see: Object,
            title: String
        },
        data() {
    		return {
    			directory: []
            };
        },
        computed: {
    		subject() {
				if (this.directory && this.see.guide && !this.see.title) {
					return Enumerable.firstOrDefault(Enumerable.firstOrDefault(this.directory, { children: [] }, node => node.code === 'guides').children, { title: '' }, node => node.code === this.see.guide).title || this.see.guide || this.title;
				} else {
					return this.title || this.see.title || this.see.guide || '';
                }
            }
        },
        mounted() {
    		if (this.see.guide && !this.see.title) {
                this.getJson(['directory']).then(directory => {
                	this.directory = directory;
                });
            }
        },
        methods: {
    		outerLink(link) {
    			return link ? link.replace(/{language}/ig, this.lang) : '';
            }
        }
    }
</script>