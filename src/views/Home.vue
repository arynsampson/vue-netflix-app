<template>
  <HeaderBar />
  <div class="home-content-container">
    <Carousel :movies="moviesArr" />
    <Search @search="handleSearch" />
    <div class="movie-content-container">
      <MovieItem v-for="movie in sortedAvailMovies" :key="movie.id" :item="movie" @click="updateMovieWatchListVal(movie)" />
    </div>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue';
import Movies from '../components/Movies.vue';
import * as mockData from '../mocks/data.json';
import MovieItem from '../components/MovieItem.vue';
import Carousel from '../components/Carousel.vue';
import Search from '../components/Search.vue';
import sortArr from '../reusable/sort.js';

export default {
  name: 'Home',
  components: {
    HeaderBar,
    Movies,
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

    sortArr(arrToSort) {},
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
    moviesAvailNow() {
      return this.moviesArr.filter((movie) => !movie.comingSoon && movie.name.toLowerCase().includes(this.searchVal));
    },
    sortedAvailMovies() {
      return sortArr(this.moviesAvailNow);
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
.home-content-container {
  background: #141414;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.movie-content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}

@media screen and (min-width: 700px) {
  .movie-content-container {
    max-width: 600px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 15px;
  }
}

@media screen and (min-width: 1000px) {
  .movie-content-container {
    max-width: 950px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media screen and (min-width: 1400px) {
  .movie-content-container {
    max-width: 1200px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
