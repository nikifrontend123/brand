import { createRouter, createWebHistory } from "vue-router";
import DashboardPage from "@/components/Dashboard/DashboardPage.vue";
import CatalogPage from "../views/Catalogs/CatalogPage.vue";
import CatalogDetails from "../views/Catalogs/CatalogDetails.vue";
import CatalogDetailsV2 from "../views/Catalogs/CatalogDetailsV2.vue";
import OrderPage from "../views/Order/OrderPage.vue"
import OrderDetails from "../views/Order/OrderDetails.vue"
import StockPage from "../views/stock/StockPage.vue"
import authRoutes from './auth';
 
const routes = [
  {
    path:'/',
    name:'DashboardPage',
    component:DashboardPage
  },
  {
    path:'/Catalog',
    name:'Catalog',
    component:CatalogPage
  },
  {
    path:'/CatalogDetails/:listId',
    name:'CatalogDetails',
    component:CatalogDetails
  },
  {
    path:'/CatalogDetailsV2/:listId',
    name:'CatalogDetailsV2',
    component:CatalogDetailsV2
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
  {
    path:'/StockPage',
    name:'StockPage',
    component:StockPage
  },
  {
    path: "/Catelog/:categoryId",
    name: "CatalogPage",
    component: () => import('@/views/stock/CardCatelog.vue')
  },
  {
    path: "/ProductPage/:productId",
    name: "CatalogDetailPage",
    component: () => import('@/views/stock/ProductPage.vue')
  },
  {
    path: "/tp",
    name: "TestPage",
    component: () => import('@/components/TestPage.vue')
  },
  
 ...authRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
