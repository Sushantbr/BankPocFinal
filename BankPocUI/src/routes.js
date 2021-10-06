import Login from "./components/Login.vue"
import Index from "./components/Index.vue"
import AuthorizeSingle from "./components/AuthorizeSingle.vue"
import SingleTransaction from "./components/SingleTransaction.vue"
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
   {
      name: "Login",
      component: Login,
      path: "/",
   },
   {
      name: "Index",
      component: Index,
      path: "/Index",
   },
   {
      name: "AuthorizeSingle",
      component: AuthorizeSingle,
      path: "/AuthorizeSingle",
   },
   {
      name: "SingleTransaction",
      component: SingleTransaction,
      path: "/SingleTransaction",
   }
];

const router = createRouter({
   history: createWebHashHistory(),
   routes,
});

export default router