<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model.number="state.num1" @keyup="plusNumber" />
      <span> + </span>
      <input type="text" v-model.number="state.num2" @keyup="plusNumber" />
      <span> = </span>
      <span> {{ state.result }} </span>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "calculator",
  setup() {
    // reactive 를 이용해서 num1 , num2 , result를 실시간 변경사항에 대하여 반응형이 적응
    let state = reactive({
      num1: 0,
      num2: 0,
      result: 0,
    });

    function plusNumber() {
      state.result = state.num1 + state.num2;
    }
    // reactive로 선언된 state와 plusNumber 함수를 리턴함으로써 data, methods 옵션처럼 사용가능
    return {
      state,
      plusNumber,
    };
  },
};
</script>

<style></style>
