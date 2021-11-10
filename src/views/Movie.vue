<template>
  <div id="infoPeli" class="container">
    <div class="row">
      <div class="col" style="align-content: center">
        <img
          id="foto"
          :src="`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`"
        />
      </div>
      <div id="titulares" class="col">
        <h1>{{ movie.title }}</h1>
        <h5>Título Original: {{ movie.original_title }}</h5>
        <span><b>Duración:</b> {{ movie.runtime }} minutos</span>
        <div id="genero">
          <span v-for="genre in movie.genres">{{ genre.name }}</span>
        </div>
        <p id="resumen">{{ movie.overview }}</p>
      </div>
    </div>
    <br />
    <div class="row" id="data">
      <div class="col">
        <b>FECHA:</b> {{ movie.release_date }}
        <i class="bi bi-calendar-event" style="color: red"></i>
      </div>
      <div class="col">
        <b>POPULARIDAD: </b> {{ movie.popularity
        }}<i class="bi bi-hand-thumbs-up-fill"></i>
      </div>
      <div class="col">
        <b>VALORACION: </b> {{ movie.vote_average }}
        <i style="color: gold" class="bi bi-star-fill"></i>
      </div>
    </div>
    <hr />
    <div id="multimedia" class="row">
      <div class="col">
        <button type="button" class="btn btn-primary">
          <i class="bi bi-play-circle"></i> Reproducir
        </button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-info">
          <i class="bi bi-translate"></i> Cambiar Idioma
        </button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-warning">
          <i class="bi bi-star"></i> Calificar
        </button>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col">
        <button @click="$router.go(-1)" type="button" class="btn btn-danger">
          <i class="bi bi-arrow-left-circle"></i> Regresar
        </button>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import apiService from "@/services/api.service";
import Movie from "@/models/Movie";

export default {
  beforeRouteUpdate(to, from) {
    // called when the route that renders this component has changed.
    // This component being reused (by using an explicit `key`) in the new route or not doesn't change anything.
    // For example, for a route with dynamic params `/foo/:id`, when we
    // navigate between `/foo/1` and `/foo/2`, the same `Foo` component instance
    // will be reused (unless you provided a `key` to `<router-view>`), and this hook will be called when that happens.
    // has access to `this` component instance.
    console.log(from, to);
    this.movieId = to.params.id;
    this.movie = this.getMovie();
  },
  data() {
    return {
      movieId: {},
      movie: {},
    };
  },

  mounted() {
    this.movieId = this.$route.params.id;
    this.getMovie();
  },
  methods: {
    async getMovie() {
      const { data } = await apiService.getMovie(this.movieId);
      this.movie = new Movie(data);
      console.log(data);
    },
  },
};
</script>
<style >
</style>