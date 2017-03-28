<template>
    <span class="shields">
        <span class="shields-subject">{{ subject }}</span><span class="shields-status" :class="color">{{ status }}</span>
    </span>
</template>
<style lang="sass">
.shields
    display: inline-block
    height: 16px
    line-height: 16px
    color: white
    font-size: 12px
    > .shields-subject
        border-top-left-radius: 3px
        border-bottom-left-radius: 3px
        padding: 3px
        text-shadow: 0 1px 1px black
        background: linear-gradient(#5f5f5f, #4d4d4d)
    > .shields-status
        border-top-right-radius: 3px
        border-bottom-right-radius: 3px
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
            color: String
        }
    }
</script>