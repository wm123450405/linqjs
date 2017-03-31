<template>
    <span>
        <lang-link v-if="see.apis" :to="`apis/${ see.apis }` + (see.property ? `/property/${ see.property }` : see.method ? `/method/${ see.method }` + (typeof see.index !== 'undefined' ? `/${ see.index }` : '') : '')">{{ see.apis }}{{ see.property ? '.' + see.property : see.method ? '.' + see.method : '' }}</lang-link>
        <mark-to v-if="!see.apis && see.mark" :to="see.href">{{ see.title }}</mark-to>
        <lang-link v-if="!see.apis && !see.mark && see.inner" :to="see.href">{{ see.title }}</lang-link>
        <a v-if="!see.mark && !see.inner && !see.apis" :href="see.href">{{ see.title }}</a>
    </span>
</template>
<script>
    export default {
    	props: {
    		see: Object
        }
    }
</script>