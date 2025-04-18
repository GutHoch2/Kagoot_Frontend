<script>

import trueFalseImage from "@/assets/images/true_false.png";
import multipleChoiceImage from "@/assets/images/true_false.png";

export default {
  name: "QuestionCardComponent",
  props: {
    imagePath : {
      type: String,
      required: true
    },
    counter : {
      type: Number,
      required: true
    },
    question : {
      type: String,
      required: true
    },
    questionType : {
      type: String,
      required: true
    }
  },
  data(){
    return {
      trueFalseImage,
      multipleChoiceImage,
      currentImage: ''
    }
  },
  methods: {
    getQuestionTypeText(){
      if(this.questionType === "TrueOrFalseQuestionDTO"){
        return "Wahr-Falsch-Frage"
      }
    },
    setImage(){
      if(this.questionType === "TrueOrFalseQuestionDTO"){
        this.currentImage = this.trueFalseImage
      }
    }
  },
  mounted() {
    this.setImage();
  }
}
</script>

<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-4 d-none d-md-block">
        <img :src="currentImage" class="img-fluid rounded-start" alt="Bild Quiz Typ">
      </div>
      <div class="col-md-8 col-12">
        <div class="card-body">
          <h5 class="card-title">Frage {{counter}}:</h5>
          <p class="card-text">{{question}}</p>
          <p class="card-text"><small class="text-body-secondary">{{getQuestionTypeText()}}</small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 992px) {
  .card{
    max-width: 800px
  }
}
</style>
