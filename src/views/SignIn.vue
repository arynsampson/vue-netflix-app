<template>
  <div class="app">
    <Logo />
    <div class="container">
      <h1>Sign In</h1>
      <div class="form-wrapper">
        <form>
          <div class="input-wrapper">
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              :class="{ inputFieldError: usernameError }"
              v-model="usernameInput"
            />
            <p v-if="usernameError" class="error-validation">
              Please enter a valid username with at least 8 characters
            </p>
          </div>
          <div class="input-wrapper">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              :class="{ inputFieldError: usernameError }"
              v-model="passwordInput"
            />
            <p v-if="passwordError" class="error-validation">
              Your password must be greater than 6 characters
            </p>
          </div>
        </form>
        <router-link to="/home">
          <button class="submit-btn" @click.prevent="handleSignIn">
            Sign In
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Home from './Home.vue';
import Logo from '../components/Logo.vue';

export default {
  name: 'SignIn',
  components: { Home, Logo },
  data() {
    return {
      usernameInput: '',
      passwordInput: '',
      user: [],
      usernameError: false,
      passwordError: false,
    };
  },
  methods: {
    handleSignIn() {
      if (this.usernameInput.length < 8) {
        this.usernameError = true;
      } else {
        this.usernameError = false;
      }
      if (this.passwordInput.length < 8) {
        this.passwordError = true;
      } else {
        this.passwordError = false;
      }
      if (!this.usernameError && !this.passwordError) {
        this.user = [this.usernameInput, this.passwordInput];
        localStorage.setItem('user', JSON.stringify(this.user));
        this.$router.push({ name: 'Home' });
      }
    },
  },
  mounted() {
    localStorage.clear();
  },
};
</script>

<style scoped>
.app {
  margin: 0;
  padding: 90px 0;
  width: 100%;
  height: 100%;
  background-image: url('https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/bb41f8e5-e48c-4721-b150-f4b664f05254/ZA-en-20220822-popsignuptwoweeks-perspective_alpha_website_small.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

h1 {
  color: white;
  text-align: left;
}

.container {
  max-width: 350px;
  height: 100%;
  padding-top: 3rem;
  margin: 0 auto;
}

.input-wrapper {
  margin: 15px 0;
}

input,
.submit-btn {
  width: 100%;
  padding: 15px;
  color: white;
  background: #333;
  border: 1px solid #333;
  border-radius: 5px;
}

.inputFieldError {
  border-bottom: 2px solid rgb(244, 117, 7);
}

.error-validation {
  text-align: left;
  color: white;
  font-size: 14px;
  padding: 7px 3px;
  background: #e50914;
  margin-top: 5px;
}

.submit-btn {
  background: #e50914;
  border: 1px solid #e50914;
}

.submit-btn:hover {
  opacity: 0.9;
}
</style>
