<template>
    <span>
        <lang-link v-if="see.guide" :to="`guides/${ see.guide }`">{{ title || see.title }}</lang-link>
        <lang-link v-if="!see.guide && see.apis" :to="`apis/${ see.apis }` + (see.property ? `/property/${ see.property }` : see.method ? `/method/${ see.method }` + (typeof see.index !== 'undefined' ? `/${ see.index }` : '') : '')">{{ title || (see.apis + (see.property ? '.' + see.property : see.method ? '.' + see.method : '')) }}</lang-link>
        <mark-to v-if="!see.guide && !see.apis && see.mark" :to="see.href">{{ title || see.title }}</mark-to>
        <lang-link v-if="!see.guide && !see.apis && !see.mark && see.inner" :to="see.href">{{ title || see.title }}</lang-link>
        <a v-if="!see.guide && !see.mark && !see.inner && !see.apis" :href="see.href">{{ title || see.title }}</a>
    </span>
</template>
<script>
    export default {
    	props: {
    		see: Object,
            title: String
        },
        mounted() {
    		if (this.see.guide && !this.see.title) {
                this.getJson(true, 'directory').then(directory => {
					this.title = Enumerable.firstOrDefault(Enumerable.firstOrDefault(directory, { children: [] }, node => node.code === 'guides').children, { title: '' }, node => node.code === this.see.guide).title || this.see.guide;
                });
            }
        }
    }
</script>