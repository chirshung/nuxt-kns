import { hashTable } from '@/helpers';

export default {
    //actFetchLastestPosts: connect to API to get a list of products
    //NUXT will automatically transfers 'contextNuxt' to the 'actions'
    //     and 'actions' will use properties of 'contextNuxt' to call the API.    
    async actFetchProductsList( contextVueX  , { currentPage = 1 , slug = '' } = {} ){ //set default value for obj in case of null
        // console.log('this : ', Object.keys(this))
        // console.log('context: ', Object.keys(contextVueX))        
        // contextVueX:  [
        //     'dispatch',
        //     'commit',
        //     'getters',
        //     'state',
        //     'rootGetters',
        //     'rootState'
        //   ]                       
        // console.log('call actFetchProductsList');
        // console.log('slug: ', slug);                
        let hashCategory = contextVueX.rootState.category.hashCategoriesIdName;
                       
        //call  the 'hashTable' function form helpers to get 'categoryId' via 'slug'
        let hashCategoryTemp = new hashTable(hashCategory);
        let categoryId = hashCategoryTemp.getItem(slug);
        console.log('slug ', slug);                                   
        console.log('categoryId ', categoryId);                                   
        
        
        try {          
            //get the product list            
            const NUMBER_PER_PAGE = 9;
            const response = await this.$api.get('https://app2.ketnoisingapore.com/api/products', {
                params: {                    
                    limit: NUMBER_PER_PAGE, 
                    published_status: 'published',
                    page: currentPage,                   
                    category_id: categoryId,
                }, 
            });

           
            
            //In case of API connection is successful
            if (response.status === 200) {
                //transfer data to 'SET_PRODUCTS_LIST' of 'mutations' and commit it                             
                
                
                //create an object and set info to it
                const ProductsListPaging = {
                    slug :  slug,
                    currentPage ,               
                    productsList : response.data ,
                };                 
                console.log('ProductsListPaging ', ProductsListPaging);
                contextVueX.commit('SET_PRODUCTS_LIST', ProductsListPaging);                                                         
            }
            return {
                connectAPI: false,
            }

        //In case of API connection is unsuccessful
        } catch (error) {
            console.log('actFetchProductsList of action: ', error.message);    
            console.log('actCountNumberOfProducts of action: ', error.response.data);         
            //optional in case that error will be cathed in 'index.js'
            return {
                connectAPI: false,               
            }
        }                
    },

    //actCountNumberOfProducts: connect to API to count the number of products  
    //NUXT will automatically transfers 'contextNuxt' to the 'actions'
    //     and 'actions' will use properties of 'contextNuxt' to call the API.    
    async actCountNumberOfProducts( contextVueX , { slug = '' } = {}  ){       
        // console.log('call actCountNumberOfProducts');         
        
        let hashCategory = contextVueX.rootState.category.hashCategoriesIdName;                       
        //call  the 'hashTable' function form helpers to get 'categoryId' via 'slug'
        let hashCategoryTemp = new hashTable(hashCategory);
        let categoryId = hashCategoryTemp.getItem(slug);
        
        try {
            //Connect API              
            const NUMBER_PER_PAGE = 9;

            //get the number of product            
            const responseCount = await this.$api.get('https://app2.ketnoisingapore.com/api/products/count', {
                params: {                                        
                    published_status: 'published', 
                    category_id: categoryId,            
                },
            });                                                           
            
            // console.log('actCountNumberOfProducts - response status: ', responseCount.status);
            // console.log('actCountNumberOfProducts - response count: ', responseCount.data.count);
            //In case of API connection is successful
            if (responseCount.status === 200) {
                //transfer data to 'SET_PRODUCTS_LIST' of 'mutations' and commit it                

                //coutn the number of pages                             
                let totalPages = Math.round(parseInt(responseCount.data.count) / NUMBER_PER_PAGE);                                                   
                contextVueX.commit('SET_NUMBER_OF_PRODUCTS', totalPages);                                                          
            }
            return {
                connectAPI: false,
            }
        //In case of API connection is unsuccessful
        } catch (error) {
            console.log('actCountNumberOfProducts of action: ', error.message);            
            console.log('actCountNumberOfProducts of action: ', error.response.data);            
            //optional in case that error will be cathed in 'index.js'
            return {
                connectAPI: false,               
            }
        }                
    },

}