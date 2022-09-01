<template>
  <div class="home-content content-container">
    <div v-if="!watchListPage" class="carousel-wrapper">
      <Carousel :movies="moviesArr" />
    </div>
    <div v-if="!watchListPage" v-for="movie in moviesAvailNow" :key="movie.id">
      <Movie :item="movie" @updateMovieWatchListVal="addToWatchList" />
    </div>
    <div v-if="watchListPage" v-for="movie in watchListMovies" :key="movie.id">
      <Movie
        :watchListItem="watchListPage"
        :item="movie"
        @updateMovieWatchListVal="addToWatchList"
      />
    </div>
  </div>
</template>

<script>
import * as movies from '../mocks/data.json';
import Movie from './Movie.vue';
import Carousel from './Carousel.vue';

export default {
  name: 'Movies',
  components: {
    Movie,
    Carousel,
  },
  props: ['watchListPageBool'],
  data() {
    return {
      moviesArr: [],
      watchListPage: false,
    };
  },
  methods: {
    addToWatchList(item) {
      item.watchList = !item.watchList;
    },
  },
  mounted() {
    this.moviesArr = movies.movies;

    if (this.$props.watchListPageBool) {
      this.watchListPage = true;
    }
  },
  computed: {
    moviesAvailNow() {
      return this.moviesArr.filter((movie) => !movie.comingSoon);
    },
    watchListMovies() {
      return this.moviesArr.filter((movie) => movie.watchList);
    },
  },
  watch: {
    moviesArr: {
      handler() {
        localStorage.setItem('movies', JSON.stringify(this.moviesArr));
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.content-container {
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home-content {
  margin: 20px auto;
}

@media screen and (min-width: 700px) {
  .content-container {
    max-width: 600px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }

  .carousel-wrapper {
    width: 100%;
    grid-column: 1 / -1;
  }
}

@media screen and (min-width: 1000px) {
  .content-container {
    max-width: 950px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media screen and (min-width: 1400px) {
  .content-container {
    max-width: 1200px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
>
