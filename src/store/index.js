import { createStore } from "vuex";
//화면을 리플래쉬 해도 저장할 state 선택후 계속 유지
import persistedstate from "vuex-persistedstate";
export default createStore({
  state() {
    return {
      user: {},
      count: 0,
      cart: [
        { product_id: 1, product_name: "아이폰 거치대", category: "A" },
        { product_id: 2, product_name: "블루트스 마우스 ", category: "B" },
      ],
    };
  },
  mutations: {
    increment(state) {
      state.count = state.count + 1;
    },
    user(state, data) {
      state.user = data;
    },
  },
  //화면을 리플래쉬 할떄 user 정보 유지
  plugins: [persistedstate({ paths: ["user"] })],
  getters: {
    cartCount: (state) => {
      return state.cart.length;
    },
    productACount: (state) => {
      return state.cart.filters((p) => p.category == "A");
    },
  },
  actions: {},
  modules: {},
});
