<script>

import trueFalseImagePath from "@/assets/images/monkey/True_or_False_Question_Hell.png";
import multipleChoiceImagePath from "@/assets/images/monkey/One_of_X_Question.png";
import axios from "axios";

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
    },
    quizId: {
      type: String,
      required: true
    },
    questionId: {
      type: String,
      required: true
    },
    isAdvertising: {
      type: Boolean,
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
    editQuestion(){
      this.$router.push({path: `/${this.quizId}/edit-question/${this.questionId}`});
    },
    deleteQuestion() {
      const token = localStorage.getItem('token');

      const payload = {
        quizId: this.quizId,
        questionId: this.questionId,
      }

      axios
        .post('api/quizmanager/question/delete', payload, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'

          }
        })
        .then((response) => {
          console.log(response.data);
          // Emit Event an Parent, damit die Frage entfernt wird
          this.$emit('question-deleted', this.questionId);
        }).catch((err) => {
        console.error("Fehler beim Löschen:", err);
      });
    },
    setImage() {
      if (this.questionType === "TrueOrFalseQuestionWithAnswerDTO") {
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
      <div class="col-md-8 col-12 d-flex flex-column justify-content-between">
        <div class="card-body">
          <h5 class="card-title">Frage {{ counter }}</h5>
          <p class="card-text">{{ question }}</p>
          <p class="card-text">
            <small class="text-body-secondary">{{ getQuestionTypeText() }}</small></p>
        </div>
        <div class="m-3 d-flex justify-content-end gap-2">
          <button @click="editQuestion" class="btn btn-info" :disabled="isAdvertising">
            <i class="fa-solid fa-pencil fa-2x"></i>
          </button>
          <button @click="deleteQuestion" class="btn btn-danger" :disabled="isAdvertising">
            <i class="fa-solid fa-trash-alt fa-2x"></i>
          </button>
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
