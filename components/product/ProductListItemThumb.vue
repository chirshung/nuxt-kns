<template>

   <div class="radius-top cell-view">
        <nuxt-link v-bind:to="slug">
            <img v-bind:src="thumbnail" v-bind:alt="name">
        </nuxt-link>        
        <!-- In case of product, it will be displayed - Start -->
        <div class="price price-s-4">$ {{price}}</div>	          	 	 
        <!-- In case of product, it will be displayed - End -->
    </div>
</template>

<script>
export default {
    props: {
    //Define the slug of post (slug: url of detail product)
    slug : {
        type: String,
        default: ''
    },
    //Define the imageURL of product
    thumbnail : {
        type: String,
        default: ''
    },
    //Define title of post
    name : {
        type: String,
        default: ''
    },
    //Define the price of product
    price : {
        type: Number,
        default: 0,
    },
}

}
</script>

<style>

</style>