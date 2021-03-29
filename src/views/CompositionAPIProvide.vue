<template>
  <div>
    <CompositionAPIInject></CompositionAPIInject>
  </div>
</template>

<script>
import { provide } from "vue";
import CompositionAPIInject from "./CompositionAPIInject.vue";
export default {
  setup() {
    provide("title", "Vue.js 프로젝트");
  },

  components: { CompositionAPIInject },
};
</script>

<style></style>
