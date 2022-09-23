<template>
  <div class="movie-item-wrapper hidden">
    <img :src="item.thumbnail" :alt="item.name" class="movie-thumbnail" />

    <div class="overlay">
      <div class="movie-content">
        <router-link :to="{ name: 'Movie', params: { id: item.id } }">
          <p class="movie-title">{{ item.name }}</p>
        </router-link>

        <p v-if="!item.watchList" class="add-icon icon" @click="$emit('updateMovieWatchListVal', item)">Add to watchlist</p>

        <p v-else class="remove-icon icon" @click="$emit('updateMovieWatchListVal', item)">Remove</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieItem',
  props: ['item'],
  emits: ['updateMovieWatchListVal'],
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const elements = document.querySelectorAll('.hidden');
    elements.forEach((el) => observer.observe(el));
  },
};
</script>

<style scoped>
.movie-item-wrapper {
  max-width: 300px;
  border-radius: 15px;
  text-align: center;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}

.movie-thumbnail {
  display: block;
  margin: 0 auto;
  max-width: 280px;
  border-radius: 15px;
  height: 414px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  border-radius: 15px;
  padding: 0 5px;
}

.overlay:hover {
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.overlay:hover .movie-content {
  display: block;
}

.movie-content {
  display: none;
}

.movie-title,
.icon {
  color: white;
  font-size: 20px;
  padding: 15px 0;
}

.icon {
  padding: 0;
}

.movie-title:hover,
.icon:hover {
  cursor: pointer;
  color: #e50914;
}

.hide {
  display: none;
}

.hidden {
  opacity: 0;
  transition: all 1s;
}

.show {
  opacity: 1;
}
</style>
