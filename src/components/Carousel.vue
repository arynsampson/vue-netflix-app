<template>
  <div class="carousel">
    <CarouselSlide
      v-for="(movie, index) in moviesNotAvailNow"
      :movie="movie"
      :key="index"
      :indexNo="index"
      :visibleSlide="visibleSlide"
      class="carousel-slide"
    />
    
    <div v-if="moviesNotAvailNow.length > 2">
      <p @click.prevent="next" class="btn btn-next"><i class="fa-solid fa-chevron-right"></i></p>
      <p @click.prevent="prev" class="btn btn-prev"><i class="fa-solid fa-chevron-left"></i></p>
    </div>

    <div class="overlay">
      <p>COMING SOON...</p>
    </div>
  </div>
</template>

<script setup>
import  { ref, defineProps } from 'vue';
import CarouselSlide from './CarouselSlide.vue';

const props = defineProps(['moviesNotAvailNow']);
const visibleSlide = ref(0);

const next = () => {
  visibleSlide.value++;
    if(visibleSlide.value === 5) {
      visibleSlide.value = 0;
    }
}

const prev = () => {
  if(visibleSlide.value === 0) {
    visibleSlide.value = 5;
  }
    visibleSlide.value--;
} 
</script>

<style scoped>
.carousel {
  position: relative;
  top: 95px;
  width: 360px;
  height: 450px;
  margin: 20px auto 80px auto;
  z-index: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
}

.overlay p {
  color: #fff;
  font-size: 28px;
}

.btn {
  padding: 5px 10px;
  border: 1px solid transparent;
  margin: 5px 10px;
  height: 50px;
  width: 50px;
  position: absolute;
  margin-top: -25px;
  z-index: 2;
}

.btn:hover {
  cursor: pointer;
}

.btn:focus {
  outline: none;
}

.btn-next {
  top: 50%;
  right: 0;
}

.btn-prev {
  top: 50%;
  left: 0;
}

i {
  color: #e50914;
  font-size: 28px;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

@media screen and (min-width: 700px) {
  .carousel {
    width: 700px;
  }
}

@media screen and (min-width: 1000px) {
  .carousel {
    width: 950px;
  }
}

@media screen and (min-width: 1250px) {
  .carousel {
    width: 1150px;
  }
}

@media screen and (min-width: 1400px) {
  .carousel {
    max-width: 1300px;
  }
}
</style>
