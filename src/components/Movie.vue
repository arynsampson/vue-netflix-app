<template>
  <div class="movie-item-wrapper">
    <div class="movie-thumbnail-wrapper">
      <img :src="item.thumbnail" :alt="item.name" class="movie-thumbnail" />
    </div>
    <div class="overlay"></div>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: ['item'],
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
  background: black;
  opacity: 0;
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
  opacity: 0.5;
}
</style>
