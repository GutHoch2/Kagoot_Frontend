<script>
import LayoutWrapper from "@/components/LayoutWrapper.vue";
import QuizCardComponent from "@/components/QuizCardComponent.vue";
import axios from "axios";

import quizImage from "@/assets/images/quiz.png";

export default {
  name: "MyQuizzesView",
  components: {QuizCardComponent, LayoutWrapper},
  data() {
    return {
      quizzes: [],
      quizImage
    }
  },
  methods: {
    goToQuiz(id) {
      this.$router.push(`/quiz-editor/${id}`);
    }
  },
  mounted() {
    const token = localStorage.getItem('token');

    axios.get('api/quizmaster/get-all-about-me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data.OBJECT.quizzes);
        this.quizzes = response.data.OBJECT.quizzes;
      })
      .catch((error) => {
        console.error('Fehler beim Laden der Quizzes:', error);
      });
  }
}
</script>

<template>
  <layout-wrapper>
    <div
      class="container-fluid bg-dark text-light py-5 align-items-center justify-content-center">
      <header class="text-center mb-5">
        <h1 class="display-3 fw-bold text-glow">Deine Quizzes</h1>
        <p class="fs-4 text-secondary fst-italic">Erstellen, ändern, hosten - alles an einem
          Ort!</p>
      </header>
      <main>
        <div class="d-flex flex-wrap justify-content-evenly">
          <div v-for="quiz in quizzes" :key="quiz.id">
            <quiz-card-component
              :title="quiz.title" button-link="link"
              :image-path="quizImage"
              @click="goToQuiz(quiz.id)"></quiz-card-component>
          </div>
        </div>
      </main>

    </div>
  </layout-wrapper>
</template>


<style scoped>

</style>
