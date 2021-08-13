export default {
    
    //Receive the data from 'actFetchProductsList' action and set them to 'state'
    SET_PRODUCTS_LIST(state,  {slug, currentPage, productsList}){                    
        //Receive the data from 'actFetchProductsList' action and set them to 'state'          
        state.ProductsListPaging.slug = slug; 
        state.ProductsListPaging.currentPage = currentPage; 
        state.ProductsListPaging.productsList = productsList; 
    },

    //Receive the data from 'actCountNumberOfProducts' action and set them to 'state'
    SET_NUMBER_OF_PRODUCTS(state,  totalPages){                    
        //Receive the data from 'actFetchProductsList' action and set them to 'state'          
        state.ProductsListPaging.pageCount = totalPages; 
    },

}
