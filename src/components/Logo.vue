<template>
  <div class="logo-wrapper">
    <router-link to="/home">
      <img src="../assets/logo.png" alt="netflix-logo" class="logo" :class="{ bigLogo: bigLogo }" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: ['biggerLogo'],
  data() {
    return {
      bigLogo: false,
    };
  },
  mounted() {
    this.bigLogo = this.$props.biggerLogo;
  },
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
  /* background-color: rgba(0, 0, 0, 0.8); */
  /* box-shadow: rgba(0, 0, 0, 0.6) 0px 19px 38px, rgba(0, 0, 0, 0.8) 0px 15px 12px; */
}

.bigLogo {
  max-width: 290px;
}

@media screen and (min-width: 1000px) {
  .logo {
    margin: -10px auto;
  }
}
</style>
