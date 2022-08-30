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
  display: flex;
  justify-content: center;
}

.logo {
  display: block;
  max-width: 140px;
}

@media screen and (min-width: 997px) {
  .logo {
    margin: -10px auto;
    max-width: 300px;
  }
}
</style>
