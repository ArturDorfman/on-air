import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routerNames = {
  home: "home",
  playlist: "playlist",
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: routerNames.home,
      component: HomeView,
    },
    {
      path: "/playlist",
      name: routerNames.playlist,
      component: () => import("../views/PlaylistView.vue"),
    },
  ],
});

export { router, routerNames };
