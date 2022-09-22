<template>
  <HeaderBar />
  <div class="movie-details-wrapper">
    <div class="content-container text-white">
      <div class="movie-header">
        <h2 class="movie-title">{{ currMovie.name }}</h2>
        <span class="movie-date">{{ currMovie.availDate }}</span>
      </div>
      <img :src="currMovie.thumbnail" alt="" class="movie-thumbnail" />
      <div class="preview-wrapper">
        <iframe
          :src="currMovie.preview"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="preview"
        ></iframe>
      </div>

      <ul class="genre-list">
        <li v-for="(type, index) in currMovie.genres" :key="index" class="movie-genre">
          {{ type }}
        </li>
      </ul>
      <p class="movie-desc">{{ currMovie.movieDescription }}</p>
    </div>
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

<style scoped>
.movie-details-wrapper {
  background: #141414;
  min-height: 100%;
  padding: 120px 0 20px 0;
}

.content-container {
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 0 auto;
}

.text-white {
  color: rgb(253, 247, 247);
}

.movie-header {
  align-self: flex-start;
}

.movie-title {
  display: inline-block;
  margin-right: 10px;
}

.movie-date {
  font-size: 12px;
  color: rgb(176, 176, 176);
}

.movie-thumbnail {
  width: 400px;
}

.preview-wrapper {
  width: 400px;
  height: 100%;
}

.preview {
  width: 100%;
  height: 300px;
}

.genre-list {
  width: 100%;
}

.movie-genre {
  list-style: none;
  display: inline-block;
  margin: 0 6px;
  padding: 3px 6px;
  border: 1px solid lightgray;
  border-radius: 10px;
}

.movie-genre:nth-child(1) {
  margin: 0;
}

@media (min-width: 600px) {
  .content-container {
    max-width: 580px;
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    margin: 0 auto;
  }

  .movie-header {
    grid-column: 1 / -1;
  }

  .movie-thumbnail {
    width: 100%;
    height: 100%;
    grid-column: 1 / 2;
  }

  .preview-wrapper {
    width: 100%;
  }

  .preview {
    height: 100%;
  }

  .genre-list {
    grid-column: 1 / -1;
  }

  .movie-desc {
    grid-column: 1 / -1;
  }
}

@media (min-width: 800px) {
  .content-container {
    max-width: 780px;
  }

  .movie-desc {
    font-size: 24px;
  }
}

@media (min-width: 1000px) {
  .content-container {
    max-width: 850px;
  }

  .movie-desc {
    font-size: 24px;
  }
}
</style>
