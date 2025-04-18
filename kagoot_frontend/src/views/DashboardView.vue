<script>
import LayoutWrapper from "@/components/LayoutWrapper.vue";
import KeyFigureCardComponent from "@/components/KeyFigureCardComponent.vue";

export default {
  name: "DashboardView",
  components: {KeyFigureCardComponent, LayoutWrapper}
}
</script>

<template>
  <layout-wrapper>
    <div class="container-fluid bg-dark text-light py-5 min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <header class="text-center mb-5">
        <h1 class="display-3 fw-bold text-glow">Dashboard</h1>
        <p class="fs-4 text-secondary fst-italic">Alles wichtige auf einen Blick!</p>
      </header>
      <main>
        <h2>Kennzahlen</h2>
        <div class="d-flex justify-content-around">
          <key-figure-card-component header="Anzahl Quizze" figure="4"></key-figure-card-component>
          <key-figure-card-component header="Anzahl Spielsessions" figure="4"></key-figure-card-component>
        </div>
      </main>
    </div>
  </layout-wrapper>
</template>

<style scoped>

</style>
