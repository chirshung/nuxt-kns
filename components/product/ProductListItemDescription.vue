<template>
    <p class="f-14 color-grey-3" v-html="getDescription"></p>    
</template>

<script>
export default {
    props : {
        //Define description of post
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