<template >
  <section class="movie-grid">
    <MPview v-for="movie in movies" :movie="movie" />
  </section>
  
</template>
<script>
import apiService from "@/services/api.service";
import MPview from "./MPview.vue";

export default {
  components: { MPview },
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    this.getPopular();
  },
  methods: {
    async getPopular() {
      const { data } = await apiService.getPopular();
      this.movies = (data.results);
      console.log(data);
    },
  },
};
</script>
<style >
</style>