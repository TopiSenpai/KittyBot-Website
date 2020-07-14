import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Features from "./views/Features";
import Commands from "./views/Commands";
import About from "./views/About";
import Guilds from "./views/Guilds";
import Admin from "./views/Admin";
import Dashboard from "./views/Dashboard";
import NotFound from "./views/NotFound";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    meta: { title: "Home" },
  },
  {
    path: "/features",
    component: Features,
    meta: { title: "Features" },
  },
  {
    path: "/commands",
    component: Commands,
    meta: { title: "Commands" },
  },
  {
    path: "/about",
    component: About,
    meta: { title: "About" },
  },
  {
    path: "/admin/dashboard",
    component: Admin,
    meta: { title: "Admin" },
  },
  {
    path: "/guilds/",
    component: Guilds,
    meta: { title: "Guilds" },
  },
  {
    path: "/guilds/:guildId/dashboard",
    component: Dashboard,
    meta: { title: "Dashboard" },
  },
  {
    path: "*",
    component: NotFound,
    meta: { title: "NotFound" },
  },
];

const router = new VueRouter({
  history: true,
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title;
  });
});

export default router;
