<template>
  <HeaderBar />
  <div class="watchlist">
    <Movies :watchListPageBool="true" />
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue';
import Movies from '../components/Movies.vue';

export default {
  name: 'WatchList',
  components: { HeaderBar, Movies },
};
</script>

<style>
.watchlist {
  background: #141414;
}
</style>
