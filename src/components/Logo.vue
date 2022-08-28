<template>
  <div class="logo-wrapper">
    <img src="../assets/logo.png" alt="netflix-logo" class="logo" />
  </div>
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<style>
.logo-wrapper {
  max-width: 350px;
  display: flex;
  justify-content: center;
  margin: -30px auto;
}

.logo {
  display: block;
  max-width: 250px;
  height: auto;
}
</style>
