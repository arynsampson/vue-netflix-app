<template>
  <div class="movie-item-wrapper">
    <div class="movie-thumbnail-wrapper">
      <img :src="item.thumbnail" :alt="item.name" class="movie-thumbnail" />
    </div>
    <div class="overlay">
      <div class="movie-content">
        <p class="movie-title">{{ item.name }}</p>

        <p
          v-if="!watchListItem"
          class="add-icon icon"
          @click="$emit('updateMovieWatchListVal', item)"
        >
          Add
        </p>

        <p
          v-if="watchListItem"
          class="remove-icon icon"
          @click="$emit('updateMovieWatchListVal', item)"
        >
          Remove
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: ['item', 'watchListItem'],
  emits: ['updateMovieWatchListVal'],
  methods: {
    addToWishlist(item) {
      item.watchList = !item.watchList;
    },
  },
};
</script>

<style scoped>
.movie-item-wrapper {
  max-width: 300px;
  border-radius: 15px;
  text-align: center;
  position: relative;
}

.movie-thumbnail-wrapper {
  width: 100%;
}

.movie-thumbnail {
  display: block;
  margin: 10px auto;
  max-width: 280px;
  border-radius: 15px;
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
  color: red;
  font-size: 20px;
  padding: 15px 0;
}

.icon {
  padding: 0;
}

.icon:hover {
  cursor: pointer;
}
</style>
