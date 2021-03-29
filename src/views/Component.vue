<template>
  <div>
    <page-title title="페이지 입니다."></page-title>
    <button type="button" @click="callChildFunc">부모에 있는 클릭</button>
    <child-component ref="child_component"></child-component>
    <br />
    <button type="button" @click="showData">부모 버튼</button>
    <child-componrnt-2 ref="child_component2"></child-componrnt-2>
    <br />
    <slot-use-modal-layout></slot-use-modal-layout>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";
import ChildComponent from "../components/ChildComponent.vue";
import ChildComponrnt2 from "../components/ChildComponrnt2.vue";
import SlotUseModalLayout from "./SlotUseModalLayout.vue";
export default {
  components: {
    PageTitle,
    ChildComponent,
    ChildComponrnt2,
    SlotUseModalLayout,
  },
  methods: {
    callChildFunc() {
      // 이벤트 발생
      // this.$refs.child_component.$refs.child_btn.click();
      //함수 발생
      this.$refs.child_component.childFunc();
    },
    showData() {
      alert(this.msg);
    },
  },
  computed: {
    msg() {
      return this.$refs.child_component2.msg;
    },
  },
};
</script>

<style></style>
