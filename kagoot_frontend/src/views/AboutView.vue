<script>
import NavbarComponent from "@/components/NavbarComponent.vue";

export default {
  name: "AboutView",
  components: {NavbarComponent}
}
</script>

<template>
  <navbar-component></navbar-component>
  <div class="container-fluid bg-dark text-light py-5 min-vh-100 d-flex flex-column align-items-center justify-content-center">
    <header class="text-center mb-5">
      <h1 class="display-3 fw-bold text-glow">Wer sind wir?</h1>
      <p class="fs-4 text-secondary fst-italic">Zwei Brüder aus der Familie Gut</p>
    </header>

    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/images/logo_GutHoch2.png" class="d-block w-100 carousel-img" alt="...">
          <div class="carousel-caption d-none d-md-block bg-dark text-light opacity-75">

            <h5>Gründer von Kagoot & begeisterte Informatiklehrer</h5>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/images/andreas.png" class="d-block w-100 carousel-img" alt="...">
          <div class="carousel-caption d-none d-md-block bg-dark text-light opacity-75">
            <h3>Andreas Gut</h3>
            <h5>Backend-Entwickler von Kagoot</h5>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/images/manuel.png" class="d-block w-100 carousel-img" alt="...">
          <div class="carousel-caption d-none d-md-block bg-dark text-light opacity-75">
            <h3>Manuel Gut</h3>
            <h5>Frontend-Entwickler von Kagoot</h5>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
#carouselExampleCaptions {
  max-width: 60vw;
}


</style>
