<template>
  <HeaderBar />
  <div class="movie-details-wrapper">
    <p>{{ currMovie.name }}</p>
    <img :src="currMovie.thumbnail" alt="" width="250" />
    <ul>
      <li v-for="(type, index) in currMovie.genre" :key="index">
        {{ type }}
      </li>
    </ul>
    <p>{{ currMovie.movieDescription }}</p>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue';

export default {
  name: 'Movie',
  components: {
    HeaderBar,
  },
  props: ['id'],
  data() {
    return {
      movieId: this.$route.params.id,
      currMovie: {},
    };
  },
  created() {
    JSON.parse(localStorage.getItem('movies')).forEach((element) => {
      if (element.id === this.movieId) this.currMovie = element;
    });
  },
};
</script>

<style>
.movie-details-wrapper {
  background: #141414;
  min-height: 100%;
}
</style>
