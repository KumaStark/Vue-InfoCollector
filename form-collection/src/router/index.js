import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Collector from "../views/InfoCollector.vue";
import Thanks from "../views/Thanks.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Collector",
    component: Collector
  },
  {
    path: "/Thanks",
    name: "Thanks",
    component: Thanks
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
