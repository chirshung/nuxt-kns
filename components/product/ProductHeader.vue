<template>
    <div class="list-header clearfix">
        <!-- Add AppDropDownSort component - Start -->
        <app-drop-down-sort title="Sắp xếp theo giá"/>
        <!-- Add AppDropDownSort component - End -->

        <!-- Add AppDisplayView component - Start -->
        <app-display-view title="Hiển thị theo dạng"/>
        <!-- Add AppDisplayView component - End -->
    </div>
</template>

<script>
import AppDisplayView from '../AppDisplayView.vue'
import AppDropDownSort from '../AppDropDownSort.vue'

export default {
  components: { AppDropDownSort, AppDisplayView },
}
</script>

<style>

</style>