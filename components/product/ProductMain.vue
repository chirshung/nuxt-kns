<template>
    <div class="col-xs-12 col-sm-8 col-md-9">
        <!-- Add GridViewHeader component - Start -->
        <product-header/>
        <!-- Add GridViewHeader component - End -->
        
        <!-- Add GridViewList component - Start -->
        <product-list/>
        <!-- Add GridViewList component - End -->

        <!-- Add GridViewPagination component - Start -->
        <product-pagination/>
        <!-- Add GridViewPagination component - End -->

    </div>
</template>

<script>
import ProductHeader from './ProductHeader.vue'
import ProductList from './ProductList.vue'
import ProductPagination from './ProductPagination.vue'


export default {
  components: {ProductHeader, ProductList, ProductPagination  },
}
</script>

<style>
    

</style>