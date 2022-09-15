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
  position: relative;
  top: 95px;
  width: 90%;
  height: 400px;
  margin: 20px 0 80px 0;
}
</style>
