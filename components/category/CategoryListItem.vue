<template>
    <main>
        <div class="col-mob-12 col-xs-6 col-sm-6 col-md-4">
            <div class="tour-item style-5">
                <div v-if="category">
                    <!-- CategoryListItemThumb component - Start -->
                    <category-list-item-thumb
                        v-bind:slug="getSlug"
                        v-bind:categoryId="category.id"
                        v-bind:name="category.name"
                        v-bind:thumbnail="getImageURL"
                    />
                    <!-- CategoryListItemThumb component - End -->

                    <!-- CategoryListItemDescription component - Start -->
                    <category-list-item-description
                        v-bind:slug="getSlug"
                        v-bind:categoryId="category.id"
                        v-bind:name="category.name"
                        v-bind:description="category.description"
                    />
                    <!-- CategoryListItemDescription component - End -->
                
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import CategoryListItemDescription from './CategoryListItemDescription.vue';
import CategoryListItemThumb from "./CategoryListItemThumb.vue"

export default {
    components: { CategoryListItemThumb, CategoryListItemDescription },
    props : {
        //Define an object to receive a category list transfered 
        //  from 'CategoryList.vue' and transfer to 'CategoryListItem.vue'
        category: {
            type: Object,
            default: null,
        }
    },
     computed : {
        //Concate the url string 
        // -> return an url string to redirect to detail News
        getSlug(){         
            if(this.category.se_name !== null ){
                return 'category/' + this.category.se_name;
            } else {
                return '';
            }                
        },
        //Concate the url string 
        // -> return an url string of image
        getImageURL(){            
            if(this.category.image !== 0 ){
                return this.category.image.src ;
            } else {
                return '';
            }            
        }
    },

}
</script>

<style>

</style>