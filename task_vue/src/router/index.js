import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DetailPage from "../views/DetailPage.vue";
import TableView from "../views/TableView.vue";

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/detail/:id/:title', name: 'detail', component: DetailPage }, // ID를 받는 상세 페이지 경로 추가
  { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue') },
  { path: '/table', name: 'table', component: TableView }
];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
});

export default router;
