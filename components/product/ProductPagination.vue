<template>
    <main>
        <div class="c_pagination clearfix padd-120">            
            <paginate                
                :pageCount="pageCount"        
                :page-range="3"       
                :prevText="'Prev'"
                :nextText="'Next'"                                  
                :containerClass="'cp_content color-3'"
                :active-class="'active'"                
                :click-handler="clickCallback"
            >           
                            
                <!-- <span slot="prevContent" class="c-button b-40 bg-dr-blue-2 hv-dr-blue-2-o fl">Prev Page</span>
                <span slot="nextContent" class="c-button b-40 bg-dr-blue-2 hv-dr-blue-2-o fr">Next Page</span> -->
                <!-- 

                :prevClass="'prevClass'"                                
                :nextClass="'nextClass'" -->
            </paginate>
        </div>    
        <div>
            <br>
            <br>
            <br>
        </div>
        <div class="c_pagination clearfix padd-120">
            <a href="#" class="c-button b-40 bg-dr-blue-2 hv-dr-blue-2-o fl">prev page</a>
            <a href="#" class="c-button b-40 bg-dr-blue-2 hv-dr-blue-2-o fr">next page</a>
            <ul class="cp_content color-3">
                <li class="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">...</a></li>
                <li><a href="#">10</a></li>
            </ul>            
        </div>
        
    </main>
</template>

<script>
//import 'vuejs-paginate' module in SSR
import Paginate from 'vuejs-paginate/src/components/Paginate.vue';

//Import VueX
import { mapState, mapActions } from 'vuex';

export default {
    components: { Paginate },     
    props:{

        pageNume:{
            type: Number,
            default: 1
        }
    },

    computed:{
        //map the products list in ./product/state
        ...mapState({                
                currentPage: state => state.product.ProductsListPaging.currentPage ,
                pageCount: state => state.product.ProductsListPaging.pageCount ,
                categorySlug: state => state.product.ProductsListPaging.slug ,
        }),

    },

    methods: {
        ...mapActions({
          actFetchProductsList: 'product/actFetchProductsList',
        }),

        //Load the current page data
        clickCallback (pageNum)  {
            console.log('Pagination - current page:', pageNum);
            console.log('Pagination - current page:', this.categorySlug);                               

            this.actFetchProductsList({
                    currentPage: pageNum,
                    slug: this.categorySlug,
                })
                .then(() => {            
                    //Reset 'isLoading' = false                           
                    // this.isLoading = false
                    // console.log('Do reset');
                    // console.log('after reset isLoading: ', this.isLoading);
                });
        }
    },
    
    
}
</script>

<style lang="css">
    .nextClass {        
        font-size: 10px;
        text-decoration: none;
        border-radius: 5px;
        border-radius: 5px;
        background: #ff6600; 
        color: #fff;
        font-weight: bold;
    }
    .nextClass:hover {
        background: transparent; color: #022C54;
        transition: all 0.5s;
    }      

    .prevClass {
        font-size: 10px;
        background: #ff6600; 
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
        border-radius: 5px;
        font-weight: bold;
    }
    .prevClass:hover {
        background: transparent; color: #022C54;
        transition: all 0.5s;
    }


 

</style> 