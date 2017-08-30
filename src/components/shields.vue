<template>
    <span class="shields" :title="title || ((subject && status) ? subject + ': ' + status : (subject || status))">
        <span v-if="subject" class="shields-subject">{{ subject }}</span><span v-if="status" class="shields-status" :class="color">{{ status }}</span>
    </span>
</template>
<style lang="sass">
.shields
    display: inline-block
    height: 16px
    line-height: 16px
    color: white
    font-size: 12px
    cursor: default
    > span:first-child
        border-top-left-radius: 3px
        border-bottom-left-radius: 3px
    > span:last-child
        border-top-right-radius: 3px
        border-bottom-right-radius: 3px
    > .shields-subject
        padding: 3px
        text-shadow: 0 1px 1px black
        background: linear-gradient(#5f5f5f, #4d4d4d)
    > .shields-status
        padding: 3px
        text-shadow: 0 1px 1px gray
        &.yellow
            background: linear-gradient(#dbb327, #c9a115)
</style>
<script>
    export default {
    	props: {
    		subject: String,
            status: String,
            color: String,
            title: String
        }
    }
</script>