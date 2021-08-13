<template>
    
    <div class="main-wraper bg-grey-2 padd-90" v-if="categoryList">    
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2">
                    <div class="second-title">
                        <h4 class="subtitle color-dr-blue-2 underline">our directions</h4>
                        <h2>we proposed to you</h2>
                    </div>
                </div>
            </div>
            <div class="tour-item-grid row">

                <!-- Add category-list-item component - Start -->
                <!-- transfer category to 'CategoryListItem.vue' -->
                <category-list-item 
                    v-for="category in categoryList" 
                    v-bind:category="category"
                    v-bind:key="category.id"
                />                																																						 
            </div>		 
        </div>
    </div>
</template>

<script>
import CategoryListItem from './CategoryListItem.vue';
//Import VueX
import { mapState,  } from 'vuex';


export default {
    components: { CategoryListItem },
    computed:{
    //map the category list in ./category/state
        ...mapState({
                categoryList: state => state.category.hashCategories ,                     
        }),
    },
    // methods : {      
    //     load(){
    //     console.log('test product list:', this.categoryList);      

    //     // console.log('test product list Temp:', this.productsListTemp.length);
    //     }
    // },
}
</script>

<style>

</style>