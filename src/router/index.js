import { createRouter, createWebHistory } from 'vue-router';


import Movie from '@/views/Movie.vue';



const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    },
    {
        path: '/rated',
        name: 'Rated',
        component: () => import(/* webpackChunkName: "rated" */ '@/views/Rated.vue'),
    },
    {
        path: '/popular',
        name: 'Popular',
        component: () => import(/* webpackChunkName: "popular" */ '@/views/Popular.vue'),
    },
    {
        path:'/movie/:id',
        name: 'Movie',
        component: Movie,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;