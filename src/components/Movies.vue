<template>
  <div class="home-content container">
    <div v-for="movie in moviesComingSoon" :key="movie.id">
      <Movie :item="movie" />
    </div>
    <div>
      <p>This is the break</p>
    </div>
    <div v-for="movie in moviesAvailNow" :key="movie.id">
      <Movie :item="movie" />
    </div>
  </div>
</template>

<script>
import * as movies from '../mocks/data.json';
import Movie from './Movie.vue';

export default {
  name: 'Movies',
  components: {
    Movie,
  },
  data() {
    return {
      moviesArr: [],
    };
  },
  mounted() {
    this.moviesArr = movies.movies;
  },
  computed: {
    moviesComingSoon() {
      return this.moviesArr.filter((movie) => movie.comingSoon);
    },
    moviesAvailNow() {
      return this.moviesArr.filter((movie) => !movie.comingSoon);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home-content {
  margin: 20px auto;
}

@media screen and (min-width: 700px) {
  .container {
    max-width: 600px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
}

@media screen and (min-width: 1000px) {
  .container {
    max-width: 950px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
  }
}

@media screen and (min-width: 1400px) {
  .container {
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
  }
}
</style>
>
