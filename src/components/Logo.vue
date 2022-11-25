<template>
  <div class="logo-wrapper">
    <router-link to="/home">
      <img src="../assets/logo.png" alt="netflix-logo" class="logo" v-bind="$attrs" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: ['biggerLogo'],
  inheritAttrs: false,
};
</script>

<style>
.logo-wrapper {
  display: flex;
  justify-content: center;
}

.logo {
  display: block;
  max-width: 140px;
}

.bigLogo {
  text-align: center;
  max-width: 290px;
}

@media screen and (min-width: 1000px) {
  .logo {
    margin: -10px auto;
  }
}
</style>
