<template>
  <div>
    <!-- /** 속성 바인드 ( attribute) */ -->
    <input type="text" v-model="textvalue" />
    <button :disabled="textvalue == ''">Click</button>
    <!-- 클래스 바인드  -->
    <div class="container" :class="{ active: isActive, 'text-red': isRed }">
      Class Binding
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textvalue: "",
      isActive: true,
      isRed: true,
    };
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 200px;
}
.active {
  background: yellow;
  font-weight: bold;
}

.text-red {
  color: red;
}
</style>
