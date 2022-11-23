<template>
  <div class="sign-in-content-container">
    <Logo class="bigLogo" />
    <div class="content-container">
      <h1 class="sign-in-header">Sign In</h1>
      <div class="form-wrapper">
        <form>
          <div class="input-wrapper">
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              :class="{ inputFieldError: usernameError }"
              v-model.trim="usernameInput"
            />
            <p v-if="usernameError" class="error-validation">Please enter a valid username with at least 8 characters</p>
          </div>
          <div class="input-wrapper">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              :class="{ inputFieldError: usernameError }"
              v-model.trim="passwordInput"
            />
            <p v-if="passwordError" class="error-validation">Your password must be greater than 8 characters</p>
          </div>
        </form>
        <router-link to="/home">
          <button class="submit-btn" @click.prevent="handleSignIn">Sign In</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import Logo from '../components/Logo.vue';
  import { validateInput } from '../modules/validation.js'

  const usernameInput = ref(''); 
  const passwordInput = ref(''); 
  const user = ref([]); 
  const usernameError = ref(false);
  const passwordError = ref(false);
  const router = useRouter();

  const handleSignIn = () => {
    usernameError.value = validateInput(usernameInput.value);
    passwordError.value = validateInput(passwordInput.value);

    if (!usernameError.value && !passwordError.value) {
      user.value = [usernameInput.value, passwordInput.value];
      localStorage.setItem('user', JSON.stringify(user.value));
      router.push({ name: 'Home' });
    }
  }

  onMounted(() => {
    localStorage.clear();
  });
    
</script>

<style scoped>
.sign-in-content-container {
  margin: 0;
  padding: 25px 0;
  width: 100%;
}

.sign-in-header {
  color: white;
  text-align: left;
}

.content-container {
  max-width: 350px;
  height: 100%;
  padding: 1.5rem;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.75);
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
