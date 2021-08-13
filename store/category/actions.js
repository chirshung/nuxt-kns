export default {
    //actFetchCategoriesList: connect to API to get a list of categories
    //NUXT will automatically transfers 'contextNuxt' to the 'actions'
    //     and 'actions' will use properties of 'contextNuxt' to call the API.    
    // async actFetchCategoriesList( contextVueX ){                              
    //     try {          
    //         //get the product list                        
    //         const response = await this.$api.get('https://app2.ketnoisingapore.com/api/Categories');
            
    //         //In case of API connection is successful
    //         if (response.status === 200) {                
    //             //filter the category list 
    //             let categoryList = response.data.categories;      
    //             //in case category list is not null
    //             if (categoryList) {
    //                 let filteredCategoryList = categoryList.filter( function (category){
    //                     return  category.parent_category_id === 27 &&
    //                             category.published === true ;
    //                 });
    //                 //transfer data to 'SET_CATEGORIES_LIST' of 'mutations' and commit it                                                                           
    //                 contextVueX.commit('SET_CATEGORIES_LIST', filteredCategoryList);                                                         
    //             }                                                        
    //         }
    //     //In case of API connection is unsuccessful
    //     } catch (error) {
    //         console.log('actFetchProductsList of action: ', error.message);    
    //         console.log('actCountNumberOfProducts of action: ', error.response.data);                    
    //     }                
    // },

    async actFetchCategoriesList( contextVueX ){                              
        try {          
            //get the product list                                    
            const response = await this.$api.get('https://app2.ketnoisingapore.com/api/Categories');            
            
            //In case of API connection is successful
            if (response.status === 200) {                
                //filter the category list 
                let categoryList = response.data.categories;      
                //in case category list is not null                
                if (categoryList) {
                    let filteredCategoryList = categoryList.filter( function (category){
                        return  category.parent_category_id === 27 &&
                                category.published === true ;
                    });
                    
                    //transfer data to 'SET_CATEGORIES_LIST' of 'mutations' and commit it                                                                           
                    contextVueX.commit('SET_CATEGORIES_LIST', filteredCategoryList);                                                         
                }                                                        
                
            }
        //In case of API connection is unsuccessful
        } catch (error) {
            console.log('actFetchProductsList of action: ', error.message);    
            console.log('actCountNumberOfProducts of action: ', error.response.data);                    
        }                
    },
}