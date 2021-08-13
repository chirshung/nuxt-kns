export default {
    
    //Receive the data from 'actFetchCategoriesList' action and set them to 'state'
    SET_CATEGORIES_LIST(state,  categoryList){                            
        //Receive an array of catogories (category list) -> hash { key: value }
        //  key -> categoryId ,  value -> object categories
        
        //Convert array of categories to hash table
        let hashCategories = {};        
        let hashCategoriesIdName = {};        
        categoryList.forEach( function(category){
            hashCategories[category.id] = category;
            hashCategoriesIdName[category.se_name] = category.id;
        });
        state.hashCategories = hashCategories;       
        state.hashCategoriesIdName = hashCategoriesIdName;               
    },
}