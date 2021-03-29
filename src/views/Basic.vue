<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="text" v-model="title" />
  </div>
</template>

<script>
export default {
  name: "",
  comments: {},
  data: () => {
    return {
      title: "hello World",
    };
  },
  setup() {},
  //뷰가 생성될 때
  created() {},
  //뷰가 마운트가 되는 순간
  mounted() {},
  //다른 뷰로 이동될 때
  unmounted() {},
  methods: {},
};
</script>

<style scoped></style>
