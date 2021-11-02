<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import PopularMovies from "./components/PopularMovies.vue";
import TopRatedMovies from "./components/TopRatedMovies.vue";
export default {
  components: {
    PopularMovies,
    TopRatedMovies,
  },
};
</script>


<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="/">
    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="Logo" style="width:200px;">
  </a>
    <button
      class="navbar-toggler d-lg-none"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapsibleNavId"
      aria-controls="collapsibleNavId"
      aria-expanded="false"
      aria-label="Toggle navigation"
    ></button>
    <div class="collapse navbar-collapse" id="collapsibleNavId" >
      <ul class="navbar-nav me-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/rated" class="nav-link">Rated</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/popular" class="nav-link">Popular</router-link>
        </li>
      </ul>
    </div>
  </nav>

  <router-view/>

</template>

<style>


</style>
