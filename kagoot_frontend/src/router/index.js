import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import QuizmasterView from "@/views/QuizmasterView.vue";
import StartPlayingView from "@/views/StartPlayingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/quizmaster',
      name: 'quizmaster',
      component: QuizmasterView,
    },
    {
      path: '/start-playing',
      name: 'start-playing',
      component: StartPlayingView,
    }
  ],
})

export default router
