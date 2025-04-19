<script>
import LayoutWrapper from "@/components/LayoutWrapper.vue";
import axios from "axios";
import QuestionCardComponent from "@/components/QuestionCardComponent.vue";

export default {
  name: "QuizEditorView",
  components: {QuestionCardComponent, LayoutWrapper},
  data(){
    return {
      quiz : {},
      quizId : ''
    }
  },
  mounted() {
    const token = localStorage.getItem('token');
    this.quizId = this.$route.params.id;
    console.log(this.quizId);

    axios
    .post('api/quizmanager/quiz/get', this.quizId, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        this.quiz = response.data.OBJECT;
        console.log(response.data.OBJECT);
      })
  },
  methods: {
    addNewQuestion(){
      this.$router.push({path: `/${this.quizId}/add-question/`});
    }
  }
}
</script>

<template>
  <layout-wrapper>
    <div
      class="container-fluid bg-dark text-light py-5 min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <header class="text-center mb-5">
        <h1 class="display-3 fw-bold text-glow">Quiz: {{quiz.title}}</h1>
        <p class="fs-4 text-secondary fst-italic">Gestalte dein ganz besonderes Quiz!</p>
        <div class="row">
          <div>
            <div v-for="(question, index) in quiz.questions" :key="question.id">
            <question-card-component
              :question-type="question['@type']"
              :question="question.text"
              :counter="index + 1">
            </question-card-component>
            </div>
            <button @click="addNewQuestion" class="btn btn-primary w-100">Neue Frage hinzufügen</button>
          </div>
        </div>
      </header>
    </div>
  </layout-wrapper>
</template>

<style scoped>

</style>
