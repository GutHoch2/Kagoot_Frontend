<script>

import trueFalseImagePath from "@/assets/images/true_false.png";
import multipleChoiceImagePath from "@/assets/images/multiple_choice.png";

export default {
  name: "QuestionCardComponent",
  props: {
    counter: {
      type: Number,
      required: true
    },
    question: {
      type: String,
      required: true
    },
    questionType: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      trueFalseImagePath: trueFalseImagePath,
      multipleChoiceImagePath: multipleChoiceImagePath,
    }
  },
  methods: {
    getQuestionTypeText() {
      if (this.questionType === "TrueOrFalseQuestionDTO") {
        return "Richtig-Falsch-Frage"
      } else if (this.questionType === "OneOfXQuestionDTO") {
        return "Multiple-Choice-Frage"
      }
    },
    setImage() {
      if (this.questionType === "TrueOrFalseQuestionDTO") {
        return this.trueFalseImagePath
      }
      if (this.questionType === "OneOfXQuestionDTO") {
        return this.multipleChoiceImagePath
      }
    }
  }
}
</script>

<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-4 d-none d-md-block">
        <img :src="setImage()" class="img-fluid rounded-start" alt="Bild Quiz Typ">
      </div>
      <div class="col-md-8 col-12">
        <div class="card-body">
          <h5 class="card-title">Frage {{ counter }}:</h5>
          <p class="card-text">{{ question }}</p>
          <p class="card-text"><small
            class="text-body-secondary">{{ getQuestionTypeText() }}</small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 992px) {
  .card {
    max-width: 800px
  }
}
</style>
