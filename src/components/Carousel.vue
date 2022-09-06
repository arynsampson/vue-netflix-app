<template>
  <div class="carousel">
    <p>This is the carousel area</p>
  </div>
</template>

<script>
import * as movies from '../mocks/data.json';

export default {
  name: 'Carousel',
  props: ['movies'],
  data() {
    return {
      moviesArr: [],
    };
  },
  computed: {
    moviesComingSoon() {
      return this.moviesArr.filter((movie) => movie.comingSoon);
    },
  },
  mounted() {
    this.moviesArr = movies.movies;
  },
};
</script>

<style scoped>
.carousel {
  background: lightblue;
  height: 425px;
}
</style>
