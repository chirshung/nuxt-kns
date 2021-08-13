<template>

    <div class="top-baner">
	    <div class="arrows">
            <div class="swiper-container main-slider-6">               
                            <vueper-slides                                 
                                fade :touchable="false" 
                                fixed-height="388px"  
                                >

                                <vueper-slide                                    
                                    v-for="(slide, i) in slides"
                                    :key="i"		
                                    :image="slide.image"
                                    :title="slide.title"
                                    :content="slide.content" />                 
                                
                                    <template #arrow-left>                    
                                        <div class="swiper-arrow-left sw-arrow">
                                            <span class="fa fa-angle-left"></span>
                                        </div>
                                    </template>

                                    <template #arrow-right>                    
                                        <div class="swiper-arrow-right sw-arrow">
                                            <span class="fa fa-angle-right"></span>
                                        </div>
                                    </template>
                            </vueper-slides>
                
                
            </div>
        </div>
	</div>

    


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
				image: require('@/assets/img/demo/slide_1.jpg')
			},
			{
				title: '',
				content: '',
				// You can also provide a URL for the image.
				image: require('@/assets/img/demo/slide_4.jpg')
			},
		]
	}),
}
</script>

<style>

</style>