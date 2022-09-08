<template>
  <div class="navbar" ref="navbar">
    <p>hello, {{ user[0] }}</p>
    <ul>
      <router-link to="/home">
        <li @click="toggleNav">Home</li>
      </router-link>
      <router-link to="/watchlist">
        <li @click="toggleNav">Watchlist</li>
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
      windowsSize: null,
    };
  },
  methods: {
    toggleNav() {
      this.navDisplay = !this.navDisplay;

      if (this.$refs.navbar.style.visibility !== 'visible') {
        this.$refs.navbar.style.visibility = 'visible';
      } else {
        this.$refs.navbar.style.visibility = 'hidden';
      }
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
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 4;
  visibility: hidden;
}

ul {
  padding: 85px 0;
}

li {
  list-style: none;
  text-align: center;
  padding: 20px 0;
  margin: 20px 0;
  font-size: 28px;
  color: black;
}

li:hover {
  color: red;
}

.burger-menu-wrapper {
  position: relative;
  z-index: 6;
  margin-right: 20px;
  cursor: pointer;
}

.burger-menu-wrapper:active .navbar {
  display: block;
}

.bar {
  display: block;
  width: 25px;
  padding: 2px;
  margin: 5px 0;
  background: #fff;
}

.close {
  font-size: 24px;
}

@media (min-width: 1000px) {
  .navbar {
    position: static;
    background: inherit;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    visibility: visible;
  }

  ul {
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  li {
    list-style: none;
    text-align: center;
    color: white;
    margin: 0;
  }

  .burger-menu-wrapper {
    display: none;
  }
}
</style>
