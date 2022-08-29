<template>
  <Logo />
  <div v-if="user.length">
    <p>Welcome, {{ user[0] }}</p>
  </div>

  <!-- <ul v-if="moviesArr.length">
    <li v-for="movie in moviesArr" :key="movie.id">
      {{ movie.name }}
    </li>
  </ul> -->
</template>

<script>
import Logo from '../components/Logo.vue';
import * as movies from '../mocks/data.json';

export default {
  name: 'Home',
  data() {
    return {
      user: [],
      moviesArr: [],
    };
  },
  components: {
    Logo,
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.moviesArr = movies.movies;
  },
};
</script>

<style></style>
