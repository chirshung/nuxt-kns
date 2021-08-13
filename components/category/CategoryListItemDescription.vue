<template>
                
    <div class="tour-desc bg-white">
        <h4>
            <nuxt-link class="tour-title color-dark-2 link-dr-blue-2"
                 v-bind:to="slug">{{ name }}
            </nuxt-link>
        </h4>
        <div class="tour-text color-grey-3" v-html="getDescription"></div>    
        <nuxt-link class="c-button b-40 bg-dr-blue-2 hv-dr-blue-2-o"
                v-bind:to="slug"><span>view more</span>
        </nuxt-link>            
    </div>
    
</template>

<script>
export default {
    props : {
        //Define description of name
        name : {
            type: String,
            default: ''
        },        
        //Define description of category
        slug : {
            type: String,
            default: ''
        },        
        //Define description of category
        description : {
            type: String,
            default: ''
        },       
    },
    computed : {
        //reduce the description of post
        getDescription(){
            if (this.description)
            {
                let txt = this.description.substring(0,60);              
                //check the contect of description
                // 1.In case it contains "</p>"
                if(txt.length >= 60 ) {
                    return txt + '...';
                } else {             
                    return txt;
                }            
            } else
            {
                return '';
            }
        },
    }
}
</script>

<style>

</style>