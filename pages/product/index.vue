<template>
  <!-- In order to using many components, 'main' tab is necessary to declear -->
  <main>
    <!-- Top slide - Add component - Start -->    
    <the-top-slide/>
    <!-- Top slide - Add component - End -->    

    <div class="list-wrapper bg-grey-2">
  		<div class="container">
            <!-- TheBreadCumb component - Add Star -->
            <the-bread-crumb/>
            <!-- TheBreadCumb component - Add End -->
            <div class="row">
                <!-- TheLeftSlide component - Add Star -->
                <product-left-slide/>
                <!-- TheLeftSlide component - Add Star -->

                <!-- TheLeftSlide component - Add Star -->
                <product-main/>
                <!-- TheLeftSlide component - Add Star -->
            </div>
        </div>
    </div>

   
  </main>  

</template>

<script>
import ProductLeftSlide from '../../components/product/ProductLeftSlide.vue';
import ProductMain from '../../components/product/ProductMain.vue';
import TheBreadCrumb from '../../components/TheBreadCrumb.vue';
import TheTopSlide from '../../components/TheTopSlide.vue';


export default {
  //Declear using 'layout'
  layout: 'default',

  props : {  
    //Define id of category
    categoryId : {
      type: Number,
        default: 0
      },
    },

  components: { TheTopSlide, TheBreadCrumb, ProductLeftSlide, ProductMain,   },  

  //Dispatch/call the 'actFetchBlog' of actions to get data in server side at the initial web
  //  noted: NUXT will automatically transfers 'contextNuxt' to the 'actions'
  //              and 'actions' will use properties of 'contextNuxt' to call the API.
  async asyncData(contextNuxt) {
      // console.log('init Async in Server ',Object.keys(contextNuxt));
      // contextNuxt:
      // 'isStatic',    'isDev',
      // 'isHMR',       'app',
      // 'store',       'payload',
      // 'error',       'base',
      // 'env',         'req',
      // 'res',         'ssrContext',
      // 'redirect',    'beforeNuxtRender',
      // 'route',       'next',
      // '_redirected', '_errored',
      // 'params',      'query',
      // '$config',     '$axios',
      // '$api'
      
      //Dispatch the 'actFetchBlog' of actions to connect the API       
      // console.log('category Id', this.categoryId);
      console.log('first run from server');
      // let currentPage = 1;
      // let firstLoad = true;
      await Promise.all([        
        contextNuxt.store.dispatch('product/actFetchProductsList'),          
        contextNuxt.store.dispatch('product/actCountNumberOfProducts'),          
      ]);        
    }
}
</script>

<style>

</style>