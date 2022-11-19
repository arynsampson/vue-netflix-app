<template>
  <div class="slide" v-show="visibleSlide === indexNo">
    <div class="movie-thumbnail-wrapper">
      <img :src="movie.thumbnail" :alt="movie.name" class="movie-thumbnail" />
    </div>

    <div class="movie-content">
      <h2 class="movie-heading">{{ movie.name }}</h2>
      <p class="movie-description">{{ movie.movieDescription }}</p>
      <ul class="genre-list">
        <li v-for="(genre, index) in movie.genres" :key="index" class="movie-genre">
          {{ genre }}
        </li>
      </ul>

      <p class="movie-date">
        Available: <span>{{ movie.availDate }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselSlide',
  data() {
    return {};
  },
  props: ['movie', 'indexNo', 'visibleSlide'],
  computed: {},
};
</script>

<style scoped>
.movie-thumbnail {
  border-radius: 15px;
  display: block;
  width: 100%;
  height: 450px;
}

.movie-content {
  display: none;
  color: white;
}

.movie-heading {
  font-size: 32px;
}

.movie-description {
  font-size: 14px;
}

.movie-genre {
  list-style-type: none;
  display: inline-block;
  padding: 3px 6px;
  margin: 5px 0;
  border: 1px solid lightgray;
  border-radius: 10px;
}

.movie-genre:nth-child(1) {
  margin-right: 10px;
}

p {
  padding: 5px 0;
}

@media screen and (min-width: 700px) {
  .slide {
    display: grid;
    grid-template-columns: 40% 60%;
    height: 450px;
  }

  .movie-content {
    display: block;
    display: flex;
    flex-direction: column;
    padding: 15px;
  }
}
</style>
