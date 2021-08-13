<template>
    <!-- In order to using many components, 'main' tab is necessary to declear -->
    <main>
        <!-- Top slide - Add component -->    
        <the-top-slide/>

        <!-- Category Header - Add component -->    
        <category-header/>
        
        <!-- Category Main - Add component -->    
        <category-list/>

        <!-- Category Middle Banner - Add component -->    
        <category-middle-banner/>

        <!-- Category Combo - Add component -->    
        <category-combo/>

        <!-- Category Bottom - Add component -->   
        <category-buttom-slide/> 

    </main>  
</template>

<script>
import CategoryButtomSlide from '../../components/category/CategoryButtomSlide.vue'
import CategoryCombo from '../../components/category/CategoryCombo.vue'
import CategoryHeader from '../../components/category/CategoryHeader.vue'
import CategoryList from '../../components/category/CategoryList.vue'
import CategoryMiddleBanner from '../../components/category/CategoryMiddleBanner.vue'
import TheTopSlide from '../../components/TheTopSlide.vue'


export default {
    components: { 
        TheTopSlide,          
        CategoryButtomSlide, 
        CategoryMiddleBanner, 
        CategoryCombo, 
        CategoryHeader,
        CategoryList 
    },
    
    //Declear using 'layout'
    layout: 'default',    

    //Dispatch/call the 'actFetchCategory' of actions to get data in server side at the initial web
    //  noted: NUXT will automatically transfers 'contextNuxt' to the 'actions'
    //              and 'actions' will use properties of 'contextNuxt' to call the API.
    async asyncData(contextNuxt) {
        //Dispatch the 'actFetchBlog' of actions to connect the API            
        console.log('Category - first run from server');           
        await Promise.all([        
            contextNuxt.store.dispatch('category/actFetchCategoriesList'),                      
        ]);        
    }
}
</script>

<style>

</style>