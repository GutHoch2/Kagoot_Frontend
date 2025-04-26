<script>
import axios from "axios";

export default {
  name: "MultipleChoiceQuestionComponent",
  emits: ["update:questionData"],
  props: {
    updateOptions : {
      type: Array,
      required: false,
    }
  },
  data() {
    return {
      options: ['', '', ''],
      correctOptionIndex: null,
    };
  },
  watch: {
    options: {
      handler() { // da deep, braucht es eine wrapper function
        this.emitQuestionData();
      },
      deep: true, // wird gebraucht, dass auch Änderungen innerhalb vom Array registriert werden
    },
    correctOptionIndex() {
      this.emitQuestionData();
    }
  },
  mounted() {
    this.questionId = this.$route.params.questionId ?? '';
    if(this.questionId !== ''){
      this.initialLoad();
    }
  },
  methods: {
    initialLoad(){
      const token = localStorage.getItem('token');
      const endpoint = '/api/quizmanager/question/get';

      axios.post(endpoint, this.questionId, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      }).then((response) => {
        this.options = [];
        const dataOptions = response.data.OBJECT.options;
        for(let i = 0; i < dataOptions.length; i++) {
          this.options.push(dataOptions[i].text)
          if(dataOptions[i].correct === true){
            this.correctOptionIndex = i;
          }
        }
      }).catch(error => {
        console.error(error);
      });
    },
    emitQuestionData() {
      this.$emit('update:questionData', {
        options: this.options,
        correctOptionNumber: this.correctOptionIndex,
      });
    },
    addOption() {
      if (this.options.length < 8) {
        this.options.push('');
      }
    },
    removeOption(index) {
      if (this.options.length > 3) {
        this.options.splice(index, 1);
      }
    }
  }
}
</script>

<template>
  <div class="mb-3">
    <label class="form-label">Antwortmöglichkeiten</label>

    <div
      v-for="(option, index) in options"
      :key="index"
      class="mb-2 d-flex align-items-center"
    >
      <!-- Versteckter Radio-Button -->
      <input
        v-model="correctOptionIndex"
        type="radio"
        :value="index"
        name="correctAnswer"
        class="d-none"
        :id="'correctAnswer' + index"
      />

      <!-- Icon als Label -->
      <label :for="'correctAnswer' + index" class="me-2" style="cursor: pointer;">
        <i
          class="fa-solid"
          :class="correctOptionIndex === index ? 'fa-check-circle text-success' : 'fa-circle-xmark text-danger'"
          style="font-size: 1.2rem;"
        ></i>
      </label>

      <input
        v-model="options[index]"
        type="text"
        class="form-control bg-dark text-light border-light"
        required
        :placeholder="'Antwort ' + (index + 1)"
      />

      <button
        v-if="options.length > 3"
        type="button"
        class="btn btn-outline-light btn-sm ms-2"
        @click="removeOption(index)"
      >
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>

    <!-- Antwort hinzufügen Button -->
    <button
      type="button"
      v-if="options.length < 8"
      class="btn btn-outline-light btn-sm mt-2"
      @click="addOption"
    >
      <i class="fa-solid fa-square-plus me-2"></i> Antwort hinzufügen
    </button>
  </div>
</template>

<style scoped>
/* optionales Styling */
</style>
