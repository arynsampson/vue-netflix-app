import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '../views/SignIn.vue';
import Home from '../views/Home.vue';
import WatchList from '../views/WatchList.vue';
import Movie from '../views/Movie.vue';

function checkEntry(to, from) {
  if (localStorage.getItem('user') === null) return { name: 'SignIn' };
}

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
    beforeEnter: [checkEntry],
  },
  {
    path: '/watchList',
    name: 'WatchList',
    component: WatchList,
    props: true,
    beforeEnter: [checkEntry],
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    component: Movie,
    props: true,
    beforeEnter: [checkEntry],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
