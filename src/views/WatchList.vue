<template>
  <HeaderBar />
  <div class="watchlist-content-container">
    <Search @search="handleSearch" />
    <div class="movie-content-container">
      <MovieItem v-for="movie in sortedWatchlistMovies" :item="movie" :key="movie.id" @click="updateMovieWatchListVal(movie)" />
    </div>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue';
import Movies from '../components/Movies.vue';
import MovieItem from '../components/MovieItem.vue';
import Search from '../components/Search.vue';
import sortArr from '../reusable/sort.js';

export default {
  name: 'WatchList',
  components: { HeaderBar, Movies, MovieItem, Search },
  data() {
    return {
      watchListMovies: [],
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
    this.watchListMovies = JSON.parse(localStorage.getItem('movies'));
  },
  computed: {
    searchWatchListMovies() {
      return this.watchListMovies.filter((movie) => movie.watchList && movie.name.toLowerCase().includes(this.searchVal));
    },
    sortedWatchlistMovies() {
      return sortArr(this.searchWatchListMovies);
    },
  },
  watch: {
    watchListMovies: {
      handler() {
        localStorage.setItem('movies', JSON.stringify(this.watchListMovies));
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.watchlist-content-container {
  background: #141414;
  min-height: 100%;
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
