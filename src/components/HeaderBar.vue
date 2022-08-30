<template>
  <div class="header">
    <Logo />
    <Navbar />
  </div>
</template>

<script>
import Logo from './Logo.vue';
import Navbar from './Navbar.vue';

export default {
  name: 'HeaderBar',
  components: { Logo, Navbar },
};
</script>

<style scoped>
.header {
  background: lightblue;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
