<template>
    <div>
        <div v-if="title">
            <h1>{{ title }}</h1>
        </div>
        <div>
            <slot></slot>
        </div>
        <div>

        </div>
    </div>
</template>
<script>
    export default {
        name: 'ContentTemplate',
    	props: {
    		title: String
        }
    }
</script>