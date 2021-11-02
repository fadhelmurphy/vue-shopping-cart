import { createWebHistory, createRouter } from "vue-router";
// Import Component2 Kalian

import home from "../pages/home.vue";
import NotFound from "../pages/NotFound.vue";
import Cart from "../pages/Cart.vue";

const routes = [
  {
    path: "/",
    name:"Home",
    component: home,
  },
  {
    path: "/cart",
    name:"Cart",
    component: Cart,
  },
  {
    // path: "*",
    path: "/:catchAll(.*)",
    name: "NotFound",
    component:NotFound,
},
];
const router = createRouter({
    history: createWebHistory('/vue-shopping-cart/'),
    routes,
    linkActiveClass:'bg-green-900'
  });
  
  export default router;