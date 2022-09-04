<template>
  <p>Movie item view page</p>
  <p>{{ id }}</p>
</template>

<script>
export default {
  name: 'Movie',
  props: ['id'],
  //   data() {
  //     return {
  //       id: this.$route.params.id,
  //     };
  //   },
};
</script>

<style></style>
