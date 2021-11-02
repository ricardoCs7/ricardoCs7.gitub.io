
<template >
  <section class="movie-grid">
    <TRview v-for="movie in movies" :movie="movie" />
  </section>
</template>
<script>
import apiService from "@/services/api.service";
import TRview from "./TRview.vue";

export default {
  components: { TRview },
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    this.getTopRated();
  },
  methods: {
    async getTopRated() {
      const { data } = await apiService.getTopRated();
      this.movies = data.results;
      console.log(data);
    },
  },
};
</script>
<style >

</style>