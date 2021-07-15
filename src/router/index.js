import { createWebHistory, createRouter } from "vue-router";
import ContactPage from "../pages/ContactPage.vue";
import ProjectsPage from "../pages/ProjectsPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

const routes = [
  {
    path: "/contact",
    component: ContactPage,
    meta: { title: "Contact" },
  },
  {
    path: "/projects",
    component: ProjectsPage,
    meta: { title: "Projects" },
  },
  {
    path: "/",
    component: ContactPage,
    meta: { title: "Contact" },
  },
  {
    path: "/:catchAll(.*)",
    component: NotFoundPage,
    meta: { title: "Not Found" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
