<template>
  <div class="logo-wrapper">
    <router-link to="/home">
      <img src="../assets/logo.png" alt="netflix-logo" class="logo" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<style>
.logo-wrapper {
  display: flex;
  justify-content: center;
}

.logo {
  display: block;
  max-width: 180px;
}

@media screen and (min-width: 997px) {
  .logo {
    margin: -10px auto;
  }
}
</style>
