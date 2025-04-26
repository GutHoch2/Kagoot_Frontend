<script>
import MultipleChoiceQuestionComponent from "@/components/MultipleChoiceQuestionComponent.vue";
import TrueFalseQuestionComponent from "@/components/TrueFalseQuestionComponent.vue";
import ErrorMessageComponent from "@/components/ErrorMessageComponent.vue";
import axios from "axios";

export default {
  name: "QuestionEditorView",
  components: {
    MultipleChoiceQuestionComponent,
    TrueFalseQuestionComponent,
    ErrorMessageComponent,
  },
  data() {
    return {
      questionType: "multipleChoice",
      title: "",
      answerTimeSeconds: 30,
      amountPoints: 20,
      questionTypeSpecificData: {},
      quizId: "",
      questionId: "",
      errors: [],
    };
  },
  mounted() {
    this.quizId = this.$route.params.quizId;
    this.questionId = this.$route.params.questionId ?? '';
  },
  methods: {
    submitForm() {
      const payload = {
        quizUUID: this.quizId,
        text: this.title,
        seconds: this.answerTimeSeconds,
        ...this.questionTypeSpecificData, // Spread-Operator, ergänzt alles von questionTypeSpecificData zu payload
      };

      if (!this.validatePayload(payload)) {
        return;
      }

      const endpoint =this.setEndpoint();

      const token = localStorage.getItem('token');
      axios.post(endpoint, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      }).then(() => {
        this.goBackToQuizEditorView();
      }).catch(error => {
        console.error(error);
        this.errors.push("Fehler beim Speichern der Frage.");
      });
    },
    setEndpoint(){
      if(this.questionId === ''){
        switch(this.questionType){
          case 'multipleChoice' :
            return '/api/quizmanager/question/one-of-x/add';
          case 'trueFalse':
            return '/api/quizmanager/question/true-or-false/add';
        }
      }else {
        switch (this.questionType) {
          case 'multipleChoice' :
            return '/api/quizmanager/question/one-of-x/update';
          case 'trueFalse':
            return '/api/quizmanager/question/true-or-false/update';
        }
      }
    },
    goBackToQuizEditorView() {
      this.$router.push(`/quiz-editor/${this.quizId}`);
    },
    validatePayload(payload) {
      this.errors = [];

      if (this.questionType === 'multipleChoice') {
        if (payload.correctOptionNumber === undefined || payload.correctOptionNumber === null) {
          this.errors.push("Bitte eine richtige Antwort auswählen.");
        }
      } else if (this.questionType === 'trueFalse') {
        if (payload.correct === undefined) {
          this.errors.push("Bitte 'Wahr' oder 'Falsch' auswählen.");
        }
      }

      return this.errors.length === 0;
    }
  }
};
</script>

<template>
  <div class="container mt-4">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="questionType" class="form-label">Fragetyp</label>
        <select v-model="questionType" class="form-select bg-dark text-light border-light" id="questionType">
          <option value="multipleChoice">Multiple Choice</option>
          <option value="trueFalse">Richtig & falsch</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="title" class="form-label">Fragetitel</label>
        <input
          v-model="title"
          type="text"
          class="form-control bg-dark text-light border-light"
          id="title"
          placeholder="Bitte Frage eingeben!"
          required
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Antwortdauer</label>
        <select v-model="answerTimeSeconds" class="form-select bg-dark text-light border-light">
          <option value="10">10 Sekunden</option>
          <option value="20">20 Sekunden</option>
          <option value="30">30 Sekunden</option>
          <option value="45">45 Sekunden</option>
          <option value="60">1 Minute</option>
          <option value="120">2 Minuten</option>
          <option value="180">3 Minuten</option>
          <option value="300">5 Minuten</option>
        </select>
      </div>

      <div class="mb-3">
        <label class="form-label">Punktezahl</label>
        <select v-model="amountPoints" class="form-select bg-dark text-light border-light">
          <option value="10">10 Punkte</option>
          <option value="20">20 Punkte</option>
          <option value="30">30 Punkte</option>
        </select>
      </div>

      <!-- Dynamische Fragetyp-Komponente -->
      <multiple-choice-question-component
        v-if="questionType === 'multipleChoice'"
        :question-id="questionId"
        @update:questionData="questionTypeSpecificData = $event"
      />
      <true-false-question-component
        v-else-if="questionType === 'trueFalse'"
        @update:questionData="questionTypeSpecificData = $event"
      />

      <div class="d-flex justify-content-between gap-2">
        <button @click="goBackToQuizEditorView" class="btn btn-primary flex-fill mt-3 mb-3">
          <i class="fa-solid fa-arrow-left me-2"></i>Zurück</button>
        <button type="submit" class="btn btn-primary flex-fill mt-3 mb-3">
          Frage speichern<i class="fa-solid fa-floppy-disk ms-2"></i></button>
      </div>
      <error-message-component v-if="errors.length" :errors="errors" class="mt-3"/>
    </form>
  </div>
</template>

<style scoped>
/* optionales Styling */
</style>
