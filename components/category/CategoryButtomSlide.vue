<template>     
    <main>
    <div class="main-wraper padd-120">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2">
                    <div class="second-title">
                        <h2>what our client say about us</h2>
                        <p class="color-grey">Curabitur nunc erat, consequat in erat ut, congue bibendum nulla.</p>
                    </div>
                </div>
            </div> 

            <div class="row">
                <div class="top-baner arrows">
                    <div class="swiper-container offers-slider">
                        <div class="swiper-wrapper">
                            <vueper-slides       
                                class="no-shadow"                          
                                fixed-height="388px"              
                                :arrows-outside="false"
                                :visible-slides="4"                     
                                :slide-ratio="1 / 4"
                                :dragging-distance="70" 
                                :gap="2"                                                                 
                                >

                                <template #arrow-left>
                                    <div class="swiper-arrow-left offers-arrow color-2">
                                        <span class="fa fa-angle-left"></span>
                                    </div>
                                </template>

                                <template #arrow-right>
                                    <div class="swiper-arrow-right offers-arrow color-2">
                                        <span class="fa fa-angle-right"></span>
                                    </div>
                                </template>

                                
                                    <vueper-slide      
                                        class="a"     
                                        v-for="(slide, i) in slides"   
                                        :key="i" 
                                        :title="slide.title"
                                        :image="slide.image"
                                        :content="slide.content" />
                                
                            </vueper-slides>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>

    </main>     

</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
// import 'vueperslides/dist/vueperslides.css'




export default {
    components: { VueperSlides, VueperSlide  },
    data: () => ({

        slides: [
            {
                title: '',
                content: '',
                // You can also provide a URL for the image.
                image: require('@/assets/img/demo/offers-block_1.jpg')
            },
            {
                title: '',
                content: '',
                // You can also provide a URL for the image.
                image: require('@/assets/img/demo/offers-block_2.jpg')
            },
            {
                title: '',
                content: '',
                // You can also provide a URL for the image.
                image: require('@/assets/img/demo/offers-block_3.jpg')
            },
            {
                title: '',
                content: '',
                // You can also provide a URL for the image.
                image: require('@/assets/img/demo/offers-block_4.jpg')
            },
            {
                title: '',
                content: '',
                // You can also provide a URL for the image.
                image: require('@/assets/img/demo/offers-block_2.jpg')
            },
            {
                title: '',
                content: '',
                // You can also provide a URL for the image.
                image: require('@/assets/img/demo/offers-block_3.jpg')
            },
        ]
    }),



    head: {   		
		link: [      
			// { rel: 'stylesheet', href: 'assets/libs/bootstrap/bootstrap.min.css'},           
		],			
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
			// src: "/assets/libs/js/all.js",
			// type: "text/javascript",
			// body: true //set this 'script' before the </body>
			// },         
		]
  	},
}
</script>



<style>
.c {

}


.a {
    -moz-border-radius: 5px; border-radius: 5px;
    transition: all 0.5s;
    opacity: 0.6;
    
}
.a:hover {
    color: rgba(34, 34, 34, 0.6); opacity: 1;
}

</style>