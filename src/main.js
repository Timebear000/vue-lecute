import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import swal from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import i18nPlugin from "./plugins/i18n";

const i18nStrings = {
  en: {
    hi: "Hello",
  },
  ko: {
    hi: "안녕하세요!",
  },
};

createApp(App)
  .use(store)
  .use(router)
  .use(swal)
  .use(i18nPlugin, i18nStrings)
  .directive("focus", {
    mounted(el) {
      el.focus();
    },
  })
  .mount("#app");

window.Kakao.init("44a1b95d9808d2e49f891338d56233b1");
