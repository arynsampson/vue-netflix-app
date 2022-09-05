<template>
  <div class="home-content content-container">
    <div v-if="!watchListPage" class="carousel-wrapper">
      <Carousel :movies="moviesArr" />
    </div>
    <div class="avail-movies-wrapper" v-if="!watchListPage" v-for="movie in sortedArray" :key="movie.id">
      <MovieItem :item="movie" @updateMovieWatchListVal="addToWatchList" />
    </div>
    <div class="input-wrapper" v-if="watchListPage">
      <label for="search"></label>
      <input type="text" v-model="searchVal" maxlength="64" placeholder="search" />
    </div>
    <div v-if="watchListPage" v-for="movie in searchWatchListMovies" :key="movie.id">
      <MovieItem :item="movie" @updateMovieWatchListVal="addToWatchList" />
    </div>
  </div>
</template>

<script>
import * as mockData from '../mocks/data.json';
import MovieItem from './MovieItem.vue';
import Carousel from './Carousel.vue';

export default {
  name: 'Movies',
  components: {
    MovieItem,
    Carousel,
  },
  props: ['watchListPageBool', 'search'],
  data() {
    return {
      moviesArr: [],
      watchListPage: false,
      currDate: '',
      searchVal: '',
    };
  },
  methods: {
    addToWatchList(item) {
      item.watchList = !item.watchList;
    },
  },
  mounted() {
    if (!this.moviesArr.length) this.moviesArr = mockData.movies;

    this.currDate = new Date().toJSON().slice(0, 10);

    if (this.$props.watchListPageBool) {
      this.watchListPage = true;
    }

    this.moviesArr.forEach((movie) => {
      if (this.currDate >= movie.availDate) {
        movie.comingSoon = false;
      }
    });
  },
  computed: {
    moviesAvailNow() {
      return this.moviesArr.filter((movie) => !movie.comingSoon);
    },
    sortedArray() {
      return this.moviesAvailNow.sort(function (a, b) {
        let movieA = a.name.toUpperCase();
        let movieB = b.name.toUpperCase();
        return movieA < movieB ? -1 : movieA > movieB ? 1 : 0;
      });
    },
    searchWatchListMovies() {
      return this.moviesArr.filter((movie) => movie.watchList && movie.name.toLowerCase().includes(this.searchVal));
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
  margin: 0 auto;
  padding: 110px 0;
}

.avail-movies-wrapper {
  padding: 10px;
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
