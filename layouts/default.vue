<template>
  <div>
      <!-- <div class="loading sea">
        <div class="loading-center">
          <div class="loading-center-absolute">
            <div class="object object_four"></div>
            <div class="object object_three"></div>
            <div class="object object_two"></div>
            <div class="object object_one"></div>
          </div>
        </div>
      </div> -->
      <!-- Component Header - Start -->
      <the-header/>
      <!-- Component Header - End -->
    
      <!-- Component of 'default layout' using page will be added here - start-->
      <nuxt/>
      <!-- Component of 'default layout' using page will be added here - End-->      

      <!-- Component Footer - Start -->
      <the-footer/>
      <!-- Component Footer - End -->

  </div>
</template>

<script>
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';


export default {
    components: { TheHeader, TheFooter },
    head: {
     	bodyAttrs: {
			'data-color': 'theme-1',
     	},

      script: [  
         //Jquery Start
      // {        
      //   src: "/assets/libs/js/jquery-2.1.4.min.js",
      //   type: "text/javascript",
      //   body: true //set this 'script' before the </body>        
      // },
      // {        
      //   src: "/assets/libs/js/bootstrap.min.js",
      //   type: "text/javascript",
      //   body: true //set this 'script' before the </body>        
      // },
      // {   
      //   src: "assets/libs/js/jquery-ui.min.js",
      //   type: "text/javascript",
      //   body: true //set this 'script' before the </body>            
      // },
      // {   
      //   src: "assets/libs/js/idangerous.swiper.min.js",
      //   type: "text/javascript",
      //   body: true //set this 'script' before the </body>            
      // },
      // {   
      //   src: "assets/libs/js/jquery.viewportchecker.min.js",
      //   type: "text/javascript",
      //   body: true //set this 'script' before the </body>            
      // },
      // {   
      //   src: "assets/libs/js/isotope.pkgd.min.js",
      //   type: "text/javascript",
      //   body: true //set this 'script' before the </body>            
      // },         
      // {   
      //   src: "assets/libs/js/jquery.mousewheel.min.js",
      //   type: "text/javascript",
      //   body: true //set this 'script' before the </body>            
      // },                       
        // {        
        //   src: "/assets/libs/js/all.js",
        //   type: "text/javascript",
        //   body: true //set this 'script' before the </body>
        // },         
      ]
  	}
}
</script>

<style>
/*Import Css from '/assets/css/*/  
@import url("@/assets/css/style.css");
</style>