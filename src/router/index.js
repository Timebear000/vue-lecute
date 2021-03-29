import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  { path: "/Basic", component: () => import("../views/Basic.vue") },
  { path: "/Example", component: () => import("../views/Example.vue") },
  { path: "/List", component: () => import("../views/ListView.vue") },
  { path: "/UserInfo", component: () => import("../views/UserCreate.vue") },
  { path: "/Server", component: () => import("../views/ServerData.vue") },
  { path: "/Component", component: () => import("../views/Component.vue") },
  { path: "/mixin1", component: () => import("../views/MixinTest.vue") },
  {
    path: "/Calculator",
    name: "Calculator",
    component: () => import("../views/Calculator.vue"),
  },
  {
    path: "/CompositionAPI",
    name: "CompositionAPI",
    component: () => import("../views/CompositionAPI.vue"),
  },
  {
    path: "/CompositionAPIProvide",
    name: "CompositionAPIProvide",
    component: () => import("../views/CompositionAPIProvide.vue"),
  },
  {
    path: "/plugins",
    name: "plugins",
    component: () => import("../views/Plugins.vue"),
  },
  {
    path: "/StoreAccess",
    name: "StoreAccess",
    component: () => import("../views/StoreAccess.vue"),
  },
  {
    path: "/kakaologin",
    name: "KakaoLogin",
    component: () => import("../views/KakaoLogin.vue"),
  },
  {
    path: "/googlelogin",
    name: "GoogleLogin",
    component: () => import("../views/GoogleLogin.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
