import VueRouter from "vue-router";

import { ROUTES } from "@/router/routes";

import Portfolio from "@/Pages/Home";

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  data() {
    return {
      ROUTES,
    };
  },
  routes: [
    {
      path: "*",
      name: ROUTES.app,
      redirect: ROUTES.home,
      props: true,
    },
    {
      path: "/home",
      name: ROUTES.home,
      component: Portfolio,
      props: true,
    },
  ],
});
