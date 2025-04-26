<script>
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
  methods: {
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
</template>

<style scoped>
/* optional */
</style>
