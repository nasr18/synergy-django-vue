import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/index",
    },
    {
      path: "/create",
      name: "create",
      component: () => import("./components/CreateUser.vue"),
    },
    {
      path: "/users/:id",
      name: "user-detail",
      component: () => import("./components/User.vue"),
    },
    {
      path: "/index",
      name: "users",
      component: () => import("./components/UserList.vue"),
    },
  ],
});
