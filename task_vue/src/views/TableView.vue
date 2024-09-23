<template>
  <div id="table">
    <h1>This is an Table page</h1>
    <AppTable></AppTable>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import AppTable from "@/components/AppTable.vue";

export default defineComponent({
  components: {AppTable}
})
</script>

<style>

</style>