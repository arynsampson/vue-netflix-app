<template>
  <router-view />
</template>

<script>
import SignIn from './views/SignIn.vue';

export default {
  name: 'App',
  components: {
    SignIn,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  background: rgb(20, 20, 20);
}
</style>
