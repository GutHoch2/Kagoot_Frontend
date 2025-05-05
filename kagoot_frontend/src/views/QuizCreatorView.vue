<script>
import axios from "axios";
import LayoutWrapper from "@/components/LayoutWrapper.vue";
import ErrorMessageComponent from "@/components/ErrorMessageComponent.vue";
import ImageFilePickerComponent from "@/components/ImageFilePickerComponent.vue";

export default {
  name: "QuizCreatorView",
  components: {ImageFilePickerComponent, ErrorMessageComponent, LayoutWrapper},
  data() {
    return {
      imagePath: "",
      title: '',
      description: '',
      quizImageBase64: null,
      buttonLink: '',
      errors: []
    }
  },
  methods: {
    handleImageFileSelected(base64String){
      this.quizImageBase64 = base64String
    },
    submitForm() {
      const quiz = {
        title: this.title,
        description: this.description,
        image: this.quizImageBase64
      };

      const token = localStorage.getItem('token');

      axios
        .post('api/quizmanager/quiz/add', quiz,  {
          headers: {
            Authorization: `Bearer ${token}`
          }})
        .then((response) => {
          console.log(response.data)
          const quizId = response.data.ID
          console.log(quizId);
          this.$router.push(`/quiz-editor/${quizId}`);
        })
    }
  }
}
</script>

<template>
  <layout-wrapper>
    <div
      class="container-fluid bg-dark text-light py-5 d-flex flex-column align-items-center justify-content-center">
      <header class="text-center mb-5">
        <h1 class="display-3 fw-bold text-glow">Neues Quiz erstellen</h1>
        <p class="fs-4 text-secondary fst-italic">Gestalte dein ganz besonderes Quiz!</p>
      </header>
      <!-- Formular-Bereich -->
      <div class="row w-100 justify-content-center gx-5">
        <div class="col-md-8 col-12 mb-4">
          <div class="card bg-dark border-light text-light">
            <div class="card-body p-5">
              <form @submit.prevent="submitForm">
                <div class="mb-3">
                  <label for="titel" class="form-label">Quiz-Titel</label>
                  <input
                    v-model="title"
                    type="text"
                    class="form-control bg-dark text-light border-light"
                    id="title"
                    placeholder="Bitte gib einen Quiz-Titel ein"
                    required>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Quiz-Beschreibung</label>
                  <textarea
                    v-model="description"
                    type="textarea"
                    rows="5"
                    class="form-control bg-dark text-light border-light"
                    id="description"
                    placeholder="Kurze Beschreibung deines Quizzes">
                    </textarea>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Quiz-Coverbild</label>
                  <image-file-picker-component
                  @onImageFileSelected="handleImageFileSelected"></image-file-picker-component>
                </div>
                <button type="submit" class="btn btn-info w-100">Quiz erstellen</button>
                <error-message-component
                  class="mt-3"
                  v-if="errors.length"
                  :errors="errors"
                ></error-message-component>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout-wrapper>
</template>

<style scoped>

</style>
