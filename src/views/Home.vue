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
  data() {
    return {
      user: [],
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('user'));
  },
};
</script>

<style scoped>
.home {
  background: #141414;
}
</style>
