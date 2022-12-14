import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/styles/global.sass";

import VueEllipseProgress from "vue-ellipse-progress";

Vue.use(VueEllipseProgress);

import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
