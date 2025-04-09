<script>

export default {
  name: "HomeView",
}
</script>

<template>
  <div class="container-fluid bg-dark text-light py-5 min-vh-100 d-flex flex-column align-items-center justify-content-center">
    <header class="text-center mb-5">
      <h1 class="display-3 fw-bold text-glow">Willkommen bei Kagoot</h1>
      <p class="fs-4 text-secondary fst-italic">Gut, besser, Kagoot!</p>
    </header>

    <!-- Kacheln-Bereich -->
    <div class="row w-100 justify-content-center gx-5">
      <!-- Kachel: Quiz spielen -->
      <div class="col-md-5 col-10 mb-4">
        <router-link class="card selection-card text-center" to="start-playing">
          <img src="./../assets/images/playing_jump.jpg" class="card-img-top img-fluid" alt="Playing">
          <div id="playing" class="card-body text-light">
            <h2 class="card-title mb-3"><i class="fa-solid fa-dice me-4"></i>An Quiz teilnehmen</h2>
            <p class="card-text">Tritt gegen andere Spieler an und teste dein Wissen in spannenden Quiz-Runden!</p>
          </div>
        </router-link>
      </div>

      <!-- Kachel: Quiz erstellen -->
      <div class="col-md-5 col-10 mb-4">
        <router-link class="card selection-card text-center" to="quizmaster">
          <img src="./../assets/images/creating.jpg" class="card-img-top img-fluid" alt="Creating">
          <div class="card-body text-light">
            <h2 class="card-title mb-3"><i class="fa-solid fa-compass-drafting me-4"></i>Quiz erstellen & hosten</h2>
            <p class="card-text">Erstelle eigene Quizze, teile sie mit anderen und werde zum Quiz-Master!</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/custom_styles.scss";

.body{
  background-image: url("./../assets/images/chalkboard.jpg");
}

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
  height: 30vh;
  object-fit: cover;
}

@media (min-width: 768px) and (max-width: 1200px) {
  .card-body {
    height: 30vh;
  }
}

</style>
