<template>
    <h4><b>
        <nuxt-link v-bind:to="slug">{{ title }}</nuxt-link>
    </b></h4>
</template>

<script>
export default {
    props: {
        //Define title of post
        title : {
            type: String,
            default: ''
        },
        //Define the slug of post
        slug : {
            type: String,
            default: ''
        },
    }
}
</script>

<style>

</style>