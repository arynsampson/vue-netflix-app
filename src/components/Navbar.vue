<template>
  <div class="navbar" ref="navbar">
    <p>hello, {{ user[0] }}</p>
    <ul class="nav-list">
      <router-link to="/home">
        <li class="nav-item" @click="toggleNav">Home</li>
      </router-link>
      <router-link to="/watchlist">
        <li class="nav-item" @click="toggleNav">Watchlist</li>
      </router-link>
      <router-link to="/">
        <li class="nav-item">Logout</li>
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

<script setup>
  import { ref, onMounted } from 'vue';

  const navDisplay = ref(false);
  const user = ref([]);
  const windowsSize = ref(null);
  const navbar = ref(null);

  const toggleNav = () => {
    navDisplay.value = !navDisplay.value;
    if(navbar.value.style.visibility !== 'visible') {
      navbar.value.style.visibility = 'visible';
    } else {
      navbar.value.style.visibility = 'hidden';
    }
  }

  onMounted(() => {
    user.value = JSON.parse(localStorage.getItem('user'));
  });
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

.nav-list {
  padding: 85px 0;
}

.nav-item {
  list-style: none;
  text-align: center;
  padding: 20px 0;
  margin: 20px 0;
  font-size: 28px;
  color: black;
}

.nav-item:hover {
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

  .nav-list {
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .nav-item {
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
