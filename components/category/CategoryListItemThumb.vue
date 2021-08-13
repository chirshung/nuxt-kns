<template>
    <div class="radius-top" >
        <nuxt-link v-bind:to="slug">
            <img v-bind:src="thumbnail" v-bind:alt="name">
        </nuxt-link>   

    </div>
</template>

<script>
export default {
    props: {
        //Define the slug of category (slug: url of detail category)
        slug : {
            type: String,
            default: ''
        },
        //Define the imageURL of category
        thumbnail : {
            type: String,
            default: ''
        },
        //Define title of category
        name : {
            type: String,
            default: ''
        },
    },
}
</script>

<style>

</style>