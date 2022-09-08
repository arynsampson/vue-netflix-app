<template>
  <div class="home">
    <HeaderBar />
    <Movies />
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue';
import Movies from '../components/Movies.vue';

export default {
  name: 'Home',
  components: {
    HeaderBar,
    Movies,
  },
};
</script>

<style scoped>
.home {
  background: #141414;
}
</style>
