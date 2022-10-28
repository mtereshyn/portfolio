import VueRouter from "vue-router";

import { ROUTES } from "@/router/routes";

import Home from "@/Pages/Home";
import Portfolio from "@/Pages/Portfolio";
import Afrianska from "@/web/afrianska/Afrianska";

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
      component: Home,
      props: true,
    },
    {
      path: "/portfolio",
      name: ROUTES.portfolio,
      component: Portfolio,
      props: true,
    },
    {
      path: "/afrianska",
      name: ROUTES.Afrianska,
      component: Afrianska,
      props: true,
    },
  ],
});
