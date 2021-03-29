<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      defalut: "페이지 타이틀 입니다.",
    },
  },
};
</script>

<style></style>
