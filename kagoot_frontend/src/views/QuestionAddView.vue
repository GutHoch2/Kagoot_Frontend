<script>
import ErrorMessageComponent from "@/components/ErrorMessageComponent.vue";
import axios from "axios";

export default {
  name: "QuestionAddComponent",
  components: {ErrorMessageComponent},
  data() {
    return {
      questionType: '',
      question: '',
      answerTimeSeconds: 20,
      trueFalseAnswer: false,
      multipleChoiceOptions: ['', '', ''],
      multipleChoiceCorrectOptionIndex: null,
      quizId: '',
      errors: []
    }
  },
  mounted() {
    this.quizId = this.$route.params.id;
  },
  methods: {
    executeRequest(urlPath, payload) {
      const token = localStorage.getItem('token');

      axios
        .post(urlPath, payload, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })
    },
    addOption() {
      this.multipleChoiceOptions.push('');
    },
    removeOption(index) {
      this.multipleChoiceOptions.splice(index, 1);
    },
    submitForm() {
      let payload = {
        "score": 10,
        "seconds": 20,
        text: this.question,
        "positionInQuiz": 0,
        "quizUUID": this.quizId,
      };

      if (this.questionType === 'multipleChoice') {
        payload.options = this.multipleChoiceOptions;
        payload.seconds = this.answerTimeSeconds;
        if(!(this.multipleChoiceCorrectOptionIndex === null)){
          payload.correctOptionNumber = 0;
          this.executeRequest('/api/quizmanager/question/one-of-x/add', payload);
        }else{
          this.errors.push("Bitte die richtige Antwort als richtig markieren.")
        }
      } else if (this.questionType === 'trueFalse') {
        payload.correct = this.trueFalseAnswer;
        this.executeRequest('api/quizmanager/question/true-or-false/add', payload);
      }
      console.log("Abgeschickte Frage:", payload);
      this.$router.push(`/quiz-editor/${this.quizId}`);

    }
  }
}
</script>

<template>
  <div class="row w-100 justify-content-center gx-5 mt-3">
    <div class="col-md-8 col-12 mb-4">
      <div class="card bg-dark border-light text-light">
        <div class="card-body p-5">
          <div class="mb-3">
            <label for="questionType" class="form-label">Fragetyp</label>
            <select
              v-model="questionType"
              class="form-select bg-dark text-light border-light"
              id="questionType"
              required>
              <option disabled selected hidden value="">Bitte wähle einen Fragetyp</option>
              <option value="multipleChoice">Multiple Choice</option>
              <option value="trueFalse">Wahr / Falsch</option>
            </select>
          </div>
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="titel" class="form-label">Frage</label>
              <input
                v-model="question"
                type="text"
                class="form-control bg-dark text-light border-light"
                id="title"
                placeholder="Bitte gib einen Quiz-Titel ein"
                required>
            </div>
            <div class="mb-3">
              <label for="questionType" class="form-label">Antwortdauer</label>
              <select
                v-model="answerTimeSeconds"
                class="form-select bg-dark text-light border-light"
                id="questionType"
                required>
                <option disabled selected hidden value="">Bitte wähle die Antwortdauer</option>
                <option value=10>10 Sekunden</option>
                <option value=20>20 Sekunden</option>
                <option value=30>30 Sekunden</option>
                <option value=45>45 Sekunden</option>
                <option value=60>1 Minute</option>
                <option value=120>2 Minuten</option>
                <option value=180>3 Minuten</option>
                <option value=300>5 Minuten</option>
              </select>
            </div>

            <!-- Dynamische Eingabefelder basierend auf Fragetyp -->
            <div v-if="questionType === 'multipleChoice'" class="mb-3">
              <label class="form-label">Antwortmöglichkeiten</label>
              <div v-for="(option, index) in multipleChoiceOptions" :key="index"
                   class="mb-2 d-flex align-items-center">
                <!-- Versteckter Radio Button -->
                <input
                  v-model="multipleChoiceCorrectOptionIndex"
                  type="radio"
                  :value="index"
                  name="correctAnswer"
                  class="d-none"
                  :id="'correctAnswer' + index"
                />

                <!-- Häkchen als Label für den versteckten Radio -->
                <label :for="'correctAnswer' + index" class="me-2" style="cursor: pointer;">
                  <i
                    class="fa-solid"
                    :class="multipleChoiceCorrectOptionIndex === index ? 'fa-check-circle text-success' : 'fa-circle-xmark text-danger'"
                    style="font-size: 1.2rem;"
                  ></i>
                </label>
                <input
                  v-model="multipleChoiceOptions[index]"
                  type="text"
                  class="form-control bg-dark text-light border-light"
                  :placeholder="'Antwort ' + (index + 1)">
                <button type="button" v-if="multipleChoiceOptions.length > 3"
                        class="btn btn-outline-light btn-sm ms-2" @click="removeOption(index)">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
              <button type="button" v-if="multipleChoiceOptions.length < 8" class="btn btn-outline-light btn-sm mt-2" @click="addOption">
                <i class="fa-solid fa-square-plus me-2"></i> Antwort hinzufügen
              </button>
            </div>

            <div v-else-if="questionType === 'trueFalse'" class="mb-3">
              <label class="form-label">Richtige Antwort</label>
              <div class="form-check">
                <input class="form-check-input" type="radio" id="true" value="true"
                       v-model="trueFalseAnswer">
                <label class="form-check-label" for="true">Wahr</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" id="false" value="false"
                       v-model="trueFalseAnswer">
                <label class="form-check-label" for="false">Falsch</label>
              </div>
            </div>

            <button type="submit" class="btn btn-primary w-100">Frage erstellen</button>
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
</template>

<style scoped>

</style>
