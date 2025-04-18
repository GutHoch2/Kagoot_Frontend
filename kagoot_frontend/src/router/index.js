import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import StartPlayingView from "@/views/StartPlayingView.vue";
import SignInView from "@/views/SignInView.vue";
import SignUpView from "@/views/SignUpView.vue";
import AboutView from "@/views/AboutView.vue";
import DashboardView from "@/views/DashboardView.vue";
import MyQuizzesView from "@/views/MyQuizzesView.vue";
import QuestionAddComponent from "@/components/QuestionAddComponent.vue";
import QuizCreatorView from "@/views/QuizCreatorView.vue";
import QuizEditorView from "@/views/QuizEditorView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignInView,
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUpView,
    },
    {
      path: '/start-playing',
      name: 'start-playing',
      component: StartPlayingView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/my-quizzes',
      name: 'my-quizzes',
      component: MyQuizzesView,
    },
    {
      path: '/quiz-creator',
      name: 'quiz-creator',
      component: QuizCreatorView,
    },
    {
      path: '/:id/add-question',
      name: 'add-question',
      component: QuestionAddComponent
    },
    {
      path: '/quiz-editor/:id',
      name: 'quiz-editor',
      component: QuizEditorView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
