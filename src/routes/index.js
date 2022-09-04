import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '../views/SignIn.vue';
import Home from '../views/Home.vue';
import WatchList from '../views/WatchList.vue';
import Movie from '../views/Movie.vue';

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/watchList',
    name: 'WatchList',
    component: WatchList,
    props: true,
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    component: Movie,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
