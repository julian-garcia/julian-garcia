import { createWebHistory, createRouter } from "vue-router";
import ContactPage from "../pages/ContactPage.vue";

const routes = [
  {
    path: "/contact",
    component: ContactPage,
    meta: { title: "Contact" },
  },
  {
    path: "/",
    component: ContactPage,
    meta: { title: "Contact" },
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
