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

<script setup>
import { ref, onBeforeMount, computed, watch } from 'vue'
import HeaderBar from '../components/HeaderBar.vue';
import * as mockData from '../mocks/data.json';
import MovieItem from '../components/MovieItem.vue';
import Carousel from '../components/Carousel.vue';
import Search from '../components/Search.vue';
import '../assets/styles/styles.css';

  const moviesArr = ref([]);
  const currDate = ref('');
  const searchVal = ref('');
                   
  const updateMovieWatchListVal = item => {
    item.watchList = !item.watchList;
  }

  const handleSearch = search => {
    searchVal.value = search;
  }

  onBeforeMount(() => {
    if (!moviesArr.value.length) {
      moviesArr.value = mockData.movies;
    }

    currDate.value = new Date().toJSON().slice(0, 10);

    moviesArr.value.forEach((movie) => {
      if (currDate.value >= movie.availDate) {
        movie.comingSoon = false;
      }
    });
  }) 

  const sortedMovies = computed(() => {
    moviesArr.value.sort(function (a, b) {
      let movieA = a.name.toUpperCase();
      let movieB = b.name.toUpperCase();
        return movieA < movieB ? -1 : movieA > movieB ? 1 : 0;
    });
    return moviesArr.value;
  });

  const moviesAvailNow = computed(() => {
    return sortedMovies.value.filter((movie) =>
      (!movie.comingSoon && movie.name.toLowerCase().includes(searchVal.value)) ||
      (!movie.comingSoon && movie.genres.join('').toLowerCase().includes(searchVal.value))
    );
  }); 

  const moviesNotAvailNow = computed(() => {
    return sortedMovies.value.filter((movie) => movie.comingSoon);
  });
  
  watch(() => moviesArr.value, (currentValue, oldValue) => {
    localStorage.setItem('movies', JSON.stringify(moviesArr.value));
  }, 
  { deep: true});
</script>
