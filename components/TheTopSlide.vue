<template>
	<div>
		<vueper-slides fade :touchable="false" autoplay>
			<vueper-slide
				v-for="(slide, i) in slides"
				:key="i"		
				:image="slide.image"
				:title="slide.title"
				:content="slide.content" />
		</vueper-slides>
	</div>

	<!-- <div>
		<agile :nav-buttons="false" :autoplay-speed="5000" :speed="2500" fade pause-on-hover pause-on-dots-hover autoplay>									
			<div class="slide">
				<img v-bind:src="'/assets/img/blog/bg_1.jpg'">
			</div>
			
			<div class="slide">
				<img v-bind:src="'/assets/img/blog/bg_2.jpg'">	
			</div>		
		</agile>
	</div>									 -->
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    components: { VueperSlides, VueperSlide },

	data: () => ({
		slides: [
			{
				title: '',
				content: '',
				// You can also provide a URL for the image.
				image: require('@/assets/img/demo/bg_1.jpg')
			},
			{
				title: '',
				content: '',
				// You can also provide a URL for the image.
				image: require('@/assets/img/demo/bg_2.jpg')
			},
		]
	}),

    head: {   		
		link: [      
			// { rel: 'stylesheet', href: 'assets/libs/bootstrap/bootstrap.min.css'},     
			{ rel: 'stylesheet', href: 'assets/libs/css/VueAgile.css'},     
			// { rel: 'stylesheet', href: 'https://unpkg.com/vue-agile/dist/VueAgile.css'},     			
		],			
		script: [  
         	//Jquery Start		
		{        
		  src: "https://unpkg.com/vue-agile",		  
		  type: "text/javascript",
		  body: true //set this 'script' before the </body>        
		},			
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
			{        
			src: "/assets/libs/js/all.js",
			type: "text/javascript",
			body: true //set this 'script' before the </body>
			},         
		]
  	},
}
</script>

<style>
.vueperslide__image {
  transform: scale(1.5) rotate(-10deg);
}

.vueperslide__title {
  font-size: 7em;
  opacity: 0.7;
}
</style>