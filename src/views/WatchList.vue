<template>
  <HeaderBar />
  <div class="watchlist-content-container">
    <Search @search="handleSearch" />
    <div class="movie-content-container">
      <MovieItem v-for="movie in filteredWatchListMovies" :item="movie" :key="movie.id" @click="updateMovieWatchListVal(movie)" />
    </div>
  </div>
</template>

<script setup>
import HeaderBar from '../components/HeaderBar.vue';
import MovieItem from '../components/MovieItem.vue';
import Search from '../components/Search.vue';
import '../assets/styles/styles.css';
import { ref, onBeforeMount, watch, computed } from 'vue';

  const watchListMovies = ref([]);
  const searchVal = ref('');
  
  const updateMovieWatchListVal = item => {
    item.watchList = !item.watchList;
  }
  const handleSearch = search => {
      searchVal.value = search;
  }

  onBeforeMount(() => {
    watchListMovies.value = JSON.parse(localStorage.getItem('movies'));
  });

  const sortedMovies = computed(() => {
    watchListMovies.value.sort(function (a, b) {
      let movieA = a.name.toUpperCase();
      let movieB = b.name.toUpperCase();
      return movieA < movieB ? -1 : movieA > movieB ? 1 : 0;
    });
    return watchListMovies.value;
  }); 

  const filteredWatchListMovies = computed(() => {
    return watchListMovies.value.filter(
      (movie) =>
        (movie.watchList && movie.name.toLowerCase().includes(searchVal.value)) ||
        (movie.watchList && movie.genres.join('').toLowerCase().includes(searchVal.value))
      );
    });

  watch(watchListMovies.value, (currentValue, oldValue) => {
    localStorage.setItem('movies', JSON.stringify(watchListMovies.value));
  });
</script>
