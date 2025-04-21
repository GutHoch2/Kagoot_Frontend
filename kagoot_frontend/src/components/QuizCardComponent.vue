<script>
export default {
  name: "QuizCardComponent",
  props: {
    imagePath: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    buttonLink: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <a href="#">
    <div class="card m-2" style="width: 18rem;">
      <img v-bind:src="imagePath" class="card-img-top" alt="quiz image">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ description }}</p>
        <hr>
        <div class="d-flex justify-content-center align-items-center">
        <button @click="addNewQuestion" class="btn btn-info w-50 me-3"><i class="fa-solid fa-play"></i></button>
        <button @click="addNewQuestion" class="btn btn-info w-50 me-3"><i class="fa-solid fa-pencil"></i></button>
        </div>
      </div>
    </div>
  </a>
</template>

<style scoped lang="scss">
@import "@/custom_styles.scss";


a{
  text-decoration: none;
}
.card {
  border: 1px solid $light;
  transition: all 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 0 20px whitesmoke;
  border-color: $secondary;
}
</style>
