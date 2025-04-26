<script>
import axios from "axios";

export default {
  name: "TrueFalseQuestionComponent",
  emits: ["update:questionData"],
  data() {
    return {
      trueFalseAnswer: null,
    };
  },
  watch: {
    trueFalseAnswer() {
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
    initialLoad() {
      const token = localStorage.getItem('token');
      const endpoint = '/api/quizmanager/question/get';

      axios.post(endpoint, this.questionId, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      }).then((response) => {
        this.trueFalseAnswer = response.data.OBJECT.correct
      }).catch(error => {
        console.error(error);
      });
    },
    emitQuestionData() {
      this.$emit('update:questionData', {
        correct: this.trueFalseAnswer === 'true', // string -> boolean
      });
    }
  }
}
</script>

<template>
  <div class="mb-3">
    <label class="form-label">Lösung</label>
    <div class="form-check">
      <input class="form-check-input" type="radio" id="true" value="true"
             v-model="trueFalseAnswer">
      <label class="form-check-label" for="true">Richtig</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" id="false" value="false"
             v-model="trueFalseAnswer">
      <label class="form-check-label" for="false">Falsch</label>
    </div>
  </div>
</template>

<style scoped>
/* optional */
</style>
