<template>
  <div class="drop-wrap drop-wrap-s-4 color-4 list-sort">
    <div class="drop">
        <b>{{ this.title }}</b>
        <a href="#" class="drop-list"><i class="fa fa-angle-down"></i></a>
        <span>
            <a href="#">ASC</a>
            <a href="#">DESC</a>
        </span>
    </div>
</div>
</template>

<script>
export default {
    props : {
        title : {
            type: String,
            default: ''
        }
    }    
}
</script>

<style>

</style>