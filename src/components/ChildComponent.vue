<template>
  <div>
    <button type="text" @click="childFunc" ref="child_btn">
      자식에 있는 클릭
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    childFunc() {
      alert("자식에 있는 이벤트  클릭 발생!");
    },
  },
};
</script>

<style></style>
