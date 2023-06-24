import { createRouter, createWebHistory } from "vue-router";
import DashboardPage from "@/components/Dashboard/DashboardPage.vue";
import CatalogPage from "../views/Catalogs/CatalogPage.vue";
import CatalogDetails from "../views/Catalogs/CatalogDetails.vue";
import OrderPage from "../views/Order/OrderPage.vue"
import OrderDetails from "../views/Order/OrderDetails.vue"
 
const routes = [
  {
    path:'/',
    name:'DashboardPage',
    component:DashboardPage
  },
  {
    path:'/CatalogPage',
    name:'CatalogPage',
    component:CatalogPage
  },
  {
    path:'/CatalogDetails/:listId',
    name:'CatalogDetails',
    component:CatalogDetails
  },
  {
    path:'/OrderPage',
    name:'OrderPage',
    component:OrderPage
  },
  {
    path:'/OrderDetails/:orderId',
    name:'OrderDetails',
    component:OrderDetails
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
