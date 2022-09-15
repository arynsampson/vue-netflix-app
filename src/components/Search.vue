<template>
  <div class="input-wrapper">
    <label for="search"></label>
    <input type="text" v-model="searchVal" maxlength="64" placeholder="search movies" @change="onChange" @keyup="onChange" class="search" />
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      searchVal: '',
    };
  },
  methods: {
    onChange() {
      this.$emit('search', this.searchVal);
    },
  },
};
</script>

<style scoped>
.input-wrapper {
  margin: 20px 0;
}

.search {
  border-radius: 15px;
  width: 350px;
  padding: 15px 25px;
}

.search:focus {
  outline: none;
}
</style>
