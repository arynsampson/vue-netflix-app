<template>
  <HeaderBar />
  <p>This is your watchlist</p>
  <Movies :watchListPageBool="true" />
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue';
import Movies from '../components/Movies.vue';

export default {
  name: 'WatchList',
  components: { HeaderBar, Movies },
};
</script>

<style></style>
