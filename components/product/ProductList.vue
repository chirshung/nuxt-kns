<template>
    <div class="grid-content clearfix" v-if="productsList">
        <!-- In case of Blog -->
            <!-- Add grid-view-list-item component - Start -->
            <!-- transfer product to 'GridViewListItem.vue' -->
 
            <product-list-item/>
              v-for="product in productsList" 
              v-bind:product="product"
              v-bind:key="product.id"
            />   

            <!-- Add grid-view-list-item component - End -->                                                                                                                                                                                                                                                                    
    </div>

    <!-- <div><button v-on:click="load">Click</button></div> -->
</template>

<script>
import ProductListItem from './ProductListItem.vue';
//Import VueX
import { mapState,  } from 'vuex';



export default {
  components: {ProductListItem  },
  computed:{
    //map the products list in ./product/state
    ...mapState({
            productsList: state => state.product.ProductsListPaging.productsList.products ,
            currentPage: state => state.product.ProductsListPaging.currentPage ,             
    }),

  },
  methods : {      
    // load(){
    //   console.log('test product list:', this.productsList.products);
    //   console.log('test product list length:', this.productsList.products.length);
    //   console.log('test currentPage:', this.currentPage);

    //   // console.log('test product list Temp:', this.productsListTemp.length);
    // }
  }
}
</script>

<style>

</style>