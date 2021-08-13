<template>
    <div class="list-view-change">
        <div class="change-grid color-3 fr active"><i class="fa fa-th"></i></div>
        <div class="change-list color-3 fr"><i class="fa fa-bars"></i></div>
        <div class="change-to-label fr color-grey-8">{{ this.title }}:</div>
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