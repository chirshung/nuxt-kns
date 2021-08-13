//  export default function (contextNuxt, inject) {
//     // console.log('contextNuxt is', Object.keys(contextNuxt));

//     // Create a custom axios instance
//     const api = contextNuxt.$axios.create({
//       headers: {

//       }
//     })
  
//     // Set baseURL to something different
//     api.setBaseURL(contextNuxt.env.BASE_URL)
  
//     // Inject to context as $api
//     inject('api', api)
//   }

  export default function ({$axios, env}, inject) {        
    // Create a custom axios instance
    const api = $axios.create({
      headers: {
        // common: {
        //   Accept: 'text/plain, */*'
        // }
      }
    })
      
    // Set baseURL to something different
    api.setBaseURL(env.baseUrl);    
  
    // Inject to context as $api
    inject('api', api)
  }