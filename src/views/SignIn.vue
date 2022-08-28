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
              Please enter a valid username
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

          <router-link to="/home">
            <button class="submit-btn">Sign In</button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Home from './Home.vue';
import Logo from '../components/Logo.vue';

export default {
  name: 'SignIn',
  components: {
    Home,
    Logo,
  },
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
      // this.user.push(this.usernameInput);
      // this.user.push(this.passwordInput);
      // localStorage.setItem('user', JSON.stringify(this.user));
    },
  },
};
</script>

<style scoped>
.app {
  margin: 0;
  padding: 60px 0;
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/bb41f8e5-e48c-4721-b150-f4b664f05254/ZA-en-20220822-popsignuptwoweeks-perspective_alpha_website_small.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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
  color: rgb(244, 117, 7);
  font-size: 14px;
  padding: 7px 3px;
}

.submit-btn {
  background: #e50914;
  border: 1px solid #e50914;
}

.submit-btn:hover {
  opacity: 0.9;
}
</style>
