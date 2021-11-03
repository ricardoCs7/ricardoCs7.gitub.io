<template >
<router-link id="peli" :to="{ name: 'Movie', params: { id: movie.id }}">
    <article>
    <header>
       <span>
        <img
          id="img"
          :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          :alt="movie.title"
      /></span>
      
    </header>
    <div>
     <span id="title"
        ><strong>{{ movie.title }}</strong>
        <br />
      </span>
    </div>
    <div id="dato"><b>Valoración:</b> {{ movie.popularity }}
      <span><i style="color: gold;" class="bi bi-star-fill"></i>
    </span>
    </div>
 
  </article>
</router-link>
  <router-view/>

</template>
<script>
export default {
  props: {
    movie: { Object, required: true },
  },
};
</script>
<style >
</style>