<script>

import HomeCardComponent from "@/components/HomeCardComponent.vue";
import playingImage from "@/assets/images/monkey/Play_Game_Grun_Schwanz.png";
import creatingImage from "@/assets/images/monkey/Create_Game_Gelb_Schwanz_Brille.png";

export default {
  name: "HomeView",
  components: {HomeCardComponent},
  data() {
    return {
      playingImage,
      creatingImage
    };
  },
  computed : {
    routerPath() {
      return this.$store.getters.isLoggedIn ? 'dashboard' : 'sign-in'
    }
  }
}
</script>

<template>
  <div class="container-fluid bg-dark text-light py-5 min-vh-100 d-flex flex-column align-items-center justify-content-center">
    <header class="text-center mb-5">
      <h1 class="display-3 fw-bold text-glow">Willkommen bei Kagoot</h1>
      <p class="fs-4 text-secondary fst-italic">Gut, besser, Kagoot!</p>
    </header>

    <main>
      <div class="row w-100 justify-content-center gx-5">
        <home-card-component
          router-path="start-playing"
          :image-path="playingImage"
          icon="fa-solid fa-dice me-4"
          title="An Quiz teilnehmen"
          subtitle="Tritt gegen andere Spieler an und teste dein Wissen in spannenden Quiz-Runden!"
        ></home-card-component>

        <home-card-component
          :router-path="routerPath"
          :image-path="creatingImage"
          icon="fa-solid fa-compass-drafting me-4"
          title="Quiz erstellen & hosten"
          subtitle="Erstelle eigene Quizze, teile sie mit anderen und werde zum Quiz-Master!"
        ></home-card-component>
      </div>
    </main>

  </div>
</template>

<style scoped lang="scss">
</style>
