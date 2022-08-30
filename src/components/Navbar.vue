<template>
  <div class="navbar" v-if="navDisplay">
    <p>{{ user[0] }}</p>
    <ul>
      <router-link to="/home">
        <li>Home</li>
      </router-link>
      <router-link to="/watchlist">
        <li>Watchlist</li>
      </router-link>
      <router-link to="/">
        <li>Logout</li>
      </router-link>
    </ul>
  </div>
  <div class="burger-menu-wrapper" @click="toggleNav">
    <div v-if="!navDisplay">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
    <p v-if="navDisplay" class="close">X</p>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      navDisplay: false,
      user: [],
    };
  },
  methods: {
    toggleNav() {
      this.navDisplay = !this.navDisplay;
    },
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('user'));
  },
};
</script>

<style scoped>
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

li {
  list-style: none;
  text-align: center;
  padding: 20px 0;
  margin: 20px 0;
  font-size: 28px;
}

.burger-menu-wrapper {
  position: relative;
  z-index: 2;
  margin-right: 20px;
  cursor: pointer;
}

.bar {
  display: block;
  width: 25px;
  padding: 2px;
  margin: 5px 0;
  background: black;
}

.close {
  font-size: 24px;
}

@media (min-width: 700px) {
  .navbar {
    position: static;
    width: 100%;
    background: inherit;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  li {
    list-style: none;
    text-align: center;
    display: inline-block;
    padding: 5px 0;
    font-size: 14px;
  }

  .burger-menu-wrapper {
    display: none;
  }
}
</style>
