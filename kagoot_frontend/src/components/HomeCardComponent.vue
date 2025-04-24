<script>
export default {
  name: "HomeCardComponent",
  props: {
    routerPath: {
      type: String,
      required: true
    },
    imagePath: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  }
}

</script>

<template>
  <div class="col-md-5 col-10 mb-4">
    <router-link class="card selection-card text-center" v-bind:to="routerPath">
      <img v-bind:src="imagePath" class="card-img-top img-fluid" alt="card icon">
      <div id="playing" class="card-body text-light">
        <h2 class="card-title mb-3"><i v-bind:class="icon"></i>{{ title }}</h2>
        <p class="card-text">{{subtitle}}</p>
      </div>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
@import "@/custom_styles.scss";

.selection-card {
  border: 1px solid $light;
  box-shadow: 0 0 15px $light;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
}

.selection-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 0 30px whitesmoke;
  border-color: $secondary;
}

.card-img-top {
  height: 50vh;
  object-fit: cover;
}

@media (min-width: 768px) and (max-width: 1200px) {
  .card-body {
    height: 30vh;
  }
}
</style>
