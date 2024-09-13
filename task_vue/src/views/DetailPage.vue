<template>
  <div>
    <table>
      <tr>
        <th>이름</th>
      </tr>
      <tr>
        <td>박혁거세</td>
      </tr>
    </table>
    <DetailPage></DetailPage>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import DetailPage from "@/components/DetailPage.vue";

export default defineComponent({
  components: {DetailPage}
})
</script>

<style>

</style>