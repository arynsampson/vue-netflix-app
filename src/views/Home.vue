<template>
  <div class="app">
    <div class="logo-wrapper">
      <img src="../assets/logo.png" alt="netflix-logo" class="logo" />
    </div>
    <div class="container">
      <h1>Sign In</h1>
      <div class="form-wrapper">
        <form>
          <div class="input-wrapper">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              :class="{ inputError: usernameError }"
            />
            <p v-if="usernameError" class="error-validation">
              Please enter a valid username
            </p>
          </div>
          <div class="input-wrapper">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              :class="{ inputError: usernameError }"
            />
            <p v-if="passwordError" class="error-validation">
              Your password must be greater than 6 characters
            </p>
          </div>
          <input type="submit" value="Sign in" class="submit-btn" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      usernameError: false,
      passwordError: false,
    };
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

.logo-wrapper {
  max-width: 350px;
  display: flex;
  justify-content: center;
  margin: -30px auto;
}

.logo {
  display: block;
  max-width: 250px;
  height: auto;
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

input {
  width: 100%;
  padding: 15px;
  color: white;
  background: #333;
  border: 1px solid #333;
  border-radius: 5px;
}

.inputError {
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
