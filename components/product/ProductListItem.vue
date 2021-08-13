<template>
    <div class="list-item-entry" v-if="product">
        <div class="hotel-item style-9 bg-white">
            <div class="table-view">
                <!-- grid-view-list-item-thumb - Add component - Start -->
                <product-list-item-thumb                
                    v-bind:slug="getSlug"
                    v-bind:name="product.name"
                    v-bind:thumbnail="getImageURL"
                    v-bind:price="product.price"
                    />
                <!-- grid-view-list-item-thumb  - Add component - End -->
               
                <div class="title hotel-middle cell-view">  
                    <!-- grid-view-list-item-title - Add component - Start -->
                    <product-list-item-title                    
                        v-bind:slug="getSlug"
                        v-bind:title="product.name" />
                    <!-- grid-view-list-item-title  - Add component - End -->                  
                     
                    <!-- grid-view-list-item-description - Add component - Start -->
                    <product-list-item-description                    
                        v-bind:description="product.short_description"
                        />
                    <!-- grid-view-list-item-description  - Add component - End -->  



                    <div class="buttons-block bg-dr-blue-2">
                        <a href="#" class="c-button b-40 bg-grey-3-t hv-grey-3-t b-1">detail</a>

                        <!-- In case of product, it will be displayed - Start -->
                        <a href="#" class="c-button b-40 bg-white hv-transparent fr">book now</a>
                        <!-- In case of product, it will be displayed - End -->
                    </div>
                </div>                					            
            </div>
        </div> 						
    </div>
</template>

<script>
import ProductListItemDescription from './ProductListItemDescription.vue';
import ProductListItemThumb from './ProductListItemThumb.vue';
import ProductListItemTitle from './ProductListItemTitle.vue';

export default {
  components: {ProductListItemThumb, ProductListItemTitle, ProductListItemDescription  },
    props : {
        //Define an object to receive a product list transfered 
        //  from 'GridViewList.vue' and transfer to 'GridViewListItem.vue'
        product: {
            type: Object,
            default: null,
        }
    },
    computed : {
        //Concate the url string 
        // -> return an url string to redirect to detail News
        getSlug(){         
            if(this.product.se_name !== null ){
                return 'product/' + this.product.se_name;
            } else {
                return '';
            }                
        },
        //Concate the url string 
        // -> return an url string of image
        getImageURL(){            
            if(this.product.images.length !== 0 ){
                return this.product.images[0].src ;
            } else {
                return '';
            }            
        }
    },
}
</script>

<style>

</style>