<template>
  <div id="home">
    <h1>This is an home page</h1>
    <HelloWorld/>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  components: {HelloWorld}
})
</script>
