<template>
  <div class="home-content content-container">
    <slot></slot>
  </div>
</template>

<script>
import * as mockData from '../mocks/data.json';
import MovieItem from './MovieItem.vue';
import Carousel from './Carousel.vue';

export default {
  name: 'Movies',
  // components: {
  //   MovieItem,
  //   Carousel,
  // },
  // props: ['watchListPageBool', 'search'],
  // data() {
  //   return {
  //     moviesArr: [],
  //     watchListPage: false,
  //     currDate: '',
  //     searchVal: '',
  //   };
  // },
  // methods: {
  //   addToWatchList(item) {
  //     item.watchList = !item.watchList;
  //   },

  //   sortArr(arrToSort) {
  //     arrToSort.sort(function (a, b) {
  //       let movieA = a.name.toUpperCase();
  //       let movieB = b.name.toUpperCase();
  //       return movieA < movieB ? -1 : movieA > movieB ? 1 : 0;
  //     });
  //     return arrToSort;
  //   },
  // },
  // mounted() {
  //   if (!this.moviesArr.length) {
  //     this.moviesArr = mockData.movies;

  //     // if (this.$route.path !== '/watchlist') {
  //     //   this.moviesArr.forEach((movie) => {
  //     //     if (movie.watchList) movie.watchList = false;
  //     //   });
  //     // }
  //   }

  //   this.currDate = new Date().toJSON().slice(0, 10);

  //   if (this.$props.watchListPageBool) {
  //     this.watchListPage = true;
  //   }

  //   this.moviesArr.forEach((movie) => {
  //     if (this.currDate >= movie.availDate) {
  //       movie.comingSoon = false;
  //     }
  //   });
  // },
  // computed: {
  //   moviesAvailNow() {
  //     return this.moviesArr.filter((movie) => !movie.comingSoon);
  //   },
  //   sortedAvailMovies() {
  //     return this.sortArr(this.moviesAvailNow);
  //   },
  //   searchWatchListMovies() {
  //     return this.moviesArr.filter((movie) => movie.watchList && movie.name.toLowerCase().includes(this.searchVal));
  //   },
  //   sortedWatchlistMovies() {
  //     return this.sortArr(this.searchWatchListMovies);
  //   },
  // },
  // watch: {
  //   moviesArr: {
  //     handler() {
  //       localStorage.setItem('movies', JSON.stringify(this.moviesArr));
  //     },
  //     deep: true,
  //   },
  // },
};
</script>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

@media screen and (min-width: 700px) {
  .content-container {
    max-width: 600px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }

  .carousel-wrapper {
    grid-column: 1 / -1;
  }

  .input-wrapper {
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
