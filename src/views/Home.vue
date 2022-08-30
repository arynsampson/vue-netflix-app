<template>
  <HeaderBar />
  <p>This is the home page</p>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue';
import * as movies from '../mocks/data.json';

export default {
  name: 'Home',
  components: {
    HeaderBar,
  },
  data() {
    return {
      user: [],
      moviesArr: [],
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.moviesArr = movies.movies;
  },
};
</script>

<style scoped></style>
