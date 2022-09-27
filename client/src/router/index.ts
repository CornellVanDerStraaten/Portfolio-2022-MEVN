import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/over-mij",
      name: "over-mij",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/projecten",
      name: "projecten",
      component: () => import("../views/ProjectsView.vue"),
    },
    {
      path: "/artikelen",
      name: "artikelen",
      component: () => import("../views/ArticlesView.vue"),
    },
  ],
});

export default router;
