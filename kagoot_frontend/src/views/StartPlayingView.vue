<script>
import NavbarComponent from "@/components/NavbarComponent.vue";

export default {
  name: "StartPlayingView",
  components: {NavbarComponent}
}
</script>

<template>
  <navbar-component :show-additional-content="false"></navbar-component>
  <div
    class="container-fluid bg-dark text-light py-5 d-flex flex-column align-items-center justify-content-center">
    <header class="text-center mb-5">
      <h1 class="display-3 fw-bold text-glow">Playing Area</h1>
      <p class="fs-4 text-secondary fst-italic">Lass uns spielen!</p>
    </header>
  </div>
</template>

<style scoped>

</style>
