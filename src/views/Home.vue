<template>
  <HeaderBar />
  <div class="home-content-container">
    <Carousel :moviesNotAvailNow="moviesNotAvailNow" />
    <Search @search="handleSearch" />
    <div class="movie-content-container">
      <MovieItem v-for="movie in moviesAvailNow" :key="movie.id" :item="movie" @click="updateMovieWatchListVal(movie)" />
    </div>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue';
import * as mockData from '../mocks/data.json';
import MovieItem from '../components/MovieItem.vue';
import Carousel from '../components/Carousel.vue';
import Search from '../components/Search.vue';
import '../assets/styles/styles.css';

export default {
  name: 'Home',

  components: {
    HeaderBar,
    MovieItem,
    Carousel,
    Search,
  },

  data() {
    return {
      moviesArr: [],
      currDate: '',
      searchVal: '',
    };
  },

  methods: {
    updateMovieWatchListVal(item) {
      item.watchList = !item.watchList;
    },

    handleSearch(search) {
      this.searchVal = search;
    },
  },

  mounted() {
    if (!this.moviesArr.length) {
      this.moviesArr = mockData.movies;
    }

    this.currDate = new Date().toJSON().slice(0, 10);

    this.moviesArr.forEach((movie) => {
      if (this.currDate >= movie.availDate) {
        movie.comingSoon = false;
      }
    });
  },

  computed: {
    sortedMovies() {
      this.moviesArr.sort(function (a, b) {
        let movieA = a.name.toUpperCase();
        let movieB = b.name.toUpperCase();
        return movieA < movieB ? -1 : movieA > movieB ? 1 : 0;
      });
      return this.moviesArr;
    },

    moviesAvailNow() {
      return this.sortedMovies.filter(
        (movie) =>
          (!movie.comingSoon && movie.name.toLowerCase().includes(this.searchVal)) ||
          (!movie.comingSoon && movie.genres.join('').toLowerCase().includes(this.searchVal))
      );
    },

    moviesNotAvailNow() {
      return this.sortedMovies.filter((movie) => movie.comingSoon);
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
