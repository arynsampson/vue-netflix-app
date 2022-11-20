<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
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
  scroll-behavior: smooth;
}

#app {
  background-image: url('https://assets.nflxext.com/ffe/siteui/vlv3/908077b4-cf0a-43c3-b2c9-435fb990299b/6ff5a954-d1cc-4b19-9ea8-df9ce154a89b/ZA-en-20220829-popsignuptwoweeks-perspective_alpha_website_medium.jpg');
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
}
</style>
