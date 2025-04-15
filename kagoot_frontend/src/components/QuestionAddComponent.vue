<script>
import ErrorMessageComponent from "@/components/ErrorMessageComponent.vue";

export default {
  name: "QuestionAddComponent",
  components: {ErrorMessageComponent},
  data(){
    return{
      questionType : '',
      question : '',
      trueFalseAnswer: false,
      multipleChoiceOptions: ['',''],
      errors : []
    }
  },
  methods : {
    addOption() {
      this.multipleChoiceOptions.push('');
    },
    removeOption(index){
      this.multipleChoiceOptions.splice(index, index+1);
    },
    submitForm() {
      let payload = {
        question: this.question,
        type: this.questionType
      };

      if (this.questionType === 'multipleChoice') {
        payload.options = this.multipleChoiceOptions;
      } else if (this.questionType === 'trueFalse') {
        payload.correctAnswer = this.trueFalseAnswer === 'true';
      }

      console.log("Abgeschickte Frage:", payload);

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
              <option value="shortAnswer">Kurzantwort</option>
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
            <!-- Dynamische Eingabefelder basierend auf Fragetyp -->
            <div v-if="questionType === 'multipleChoice'" class="mb-3">
              <label class="form-label">Antwortmöglichkeiten</label>
              <div v-for="index in multipleChoiceOptions" :key="index" class="mb-2">
                <input
                  v-model="multipleChoiceOptions[index]"
                  type="text"
                  class="form-control bg-dark text-light border-light"
                  :placeholder="'Antwort ' + (index + 1)">
                <button type="button" v-if="multipleChoiceOptions.length >= 2" class="btn btn-outline-light btn-sm mt-2" @click="removeOption(index)">
                  + Antwort entfernen
                </button>
              </div>
              <button type="button" class="btn btn-outline-light btn-sm mt-2" @click="addOption">
                + Antwort hinzufügen
              </button>
            </div>

            <div v-else-if="questionType === 'trueFalse'" class="mb-3">
              <label class="form-label">Richtige Antwort</label>
              <div class="form-check">
                <input class="form-check-input" type="radio" id="true" value="true" v-model="trueFalseAnswer">
                <label class="form-check-label" for="true">Wahr</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" id="false" value="false" v-model="trueFalseAnswer">
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
