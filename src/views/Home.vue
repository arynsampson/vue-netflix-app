<template>
  <Logo />
  <div v-if="user.length">
    <p>Welcome, {{ user[0] }}</p>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue';

export default {
  name: 'Home',
  data() {
    return {
      user: [],
    };
  },
  components: {
    Logo,
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('user'));
  },
};
</script>

<style></style>
