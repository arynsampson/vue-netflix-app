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
