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
  background: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>
