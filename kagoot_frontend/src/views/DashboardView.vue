<script>
import LayoutWrapper from "@/components/LayoutWrapper.vue";

export default {
  name: "DashboardView",
  components: {LayoutWrapper}
}
</script>

<template>
  <layout-wrapper>
    <div class="container-fluid bg-dark text-light py-5 min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <header class="text-center mb-5">
        <h1 class="display-3 fw-bold text-glow">Dashboard</h1>
        <p class="fs-4 text-secondary fst-italic">Alles wichtige auf einen Blick!</p>
      </header>
    </div>
  </layout-wrapper>
</template>

<style scoped>

</style>
