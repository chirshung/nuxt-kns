<template>    
  <main>
    <!-- TOP BANNER -->
    <home-top-banner/>

    <!-- PREVIEWS  -->
    <home-review/>

    <!--ICON-BLOCK-->
    <home-icon-block/>    

    <!-- MIDDLE GRID-->
    <home-grid/>
    
    <!-- GALARY-ITEM-->
    <home-galary/>

    <!-- POPULAR PRODUCT-->
    <home-popular/>

    <!-- BOTTOM BANNER-->
    <home-bottom-banner/>

    <!-- PARTNER -->
    <home-partner/>

    <div class="container-fluid">
    </div>


  </main>
</template>

<script>
import HomeIconBlock from '../components/home/HomeIconBlock.vue'
import HomeGrid from '../components/home/HomeGrid.vue'
import HomeTopBanner from '../components/home/HomeTopBanner.vue'
import HomeReview from '../components/home/HomeReview.vue'
import HomeGalary from '../components/home/HomeGalary.vue'
import HomePopular from '../components/home/HomePopular.vue'
import HomeBottomBanner from '../components/home/HomeBottomBanner.vue'
import HomePartner from '../components/home/HomePartner.vue'


export default {
  components: { HomeTopBanner, HomeReview, HomeIconBlock, HomeGrid, HomeGalary, HomePopular, HomeBottomBanner, HomePartner },
  //Declear using 'layout'
  layout: 'default',

  head: {
    link: [      
      // { rel: 'stylesheet', href: '/assets/libs/css/jquery-ui.structure.min.css'},    
      // { rel: 'stylesheet', href: '/assets/libs/css/jquery-ui.min.css'},                                    
    ],	
    // script: [  
    //   //Jquery Start
    //   {   
    //     src: "assets/libs/js/isotope.pkgd.min.js",
    //     type: "text/javascript",
    //     body: true //set this 'script' before the </body>            
    //   }, 
    //   {   
    //     src: "assets/libs/js/idangerous.swiper.min.js",
    //     type: "text/javascript",
    //     body: true //set this 'script' before the </body>            
    //   }, 
    //   {        
    //     src: "/assets/libs/js/jquery-2.1.4.min.js",
    //     type: "text/javascript",
    //     body: true //set this 'script' before the </body>
        
    //   },      
    //   {        
    //     src: "/assets/libs/js/all.js",
    //     type: "text/javascript",
    //     body: true //set this 'script' before the </body>
    //   },

      //Jquery End          
    // ]
  }
}
</script>