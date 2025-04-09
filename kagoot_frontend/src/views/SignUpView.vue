<script>
import NavbarComponent from "@/components/NavbarComponent.vue";

export default {
  name: "SignUp",
  components: {NavbarComponent}
}
</script>

<template>
  <navbar-component></navbar-component>
  <div class="container-fluid bg-dark text-light py-5 min-vh-100 d-flex flex-column align-items-center justify-content-center">
    <header class="text-center mb-5">
      <h1 class="display-3 fw-bold text-glow">Erstelle ein Konto</h1>
      <p class="fs-4 text-secondary fst-italic">Werde Teil von Kagoot und starte deine Quiz-Reise!</p>
    </header>

    <!-- Formular-Bereich -->
    <div class="row w-100 justify-content-center gx-5">
      <div class="col-md-6 col-12 mb-4">
        <div class="card bg-dark border-light text-light">
          <div class="card-body p-5">
            <form>
              <div class="mb-3">
                <label for="username" class="form-label">Benutzername</label>
                <input type="text" class="form-control bg-dark text-light border-light" id="username" placeholder="Benutzername">
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">E-Mail Adresse</label>
                <input type="email" class="form-control bg-dark text-light border-light" id="email" placeholder="E-Mail Adresse">
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Passwort</label>
                <input type="password" class="form-control bg-dark text-light border-light" id="password" placeholder="Passwort">
              </div>
              <div class="mb-3">
                <label for="confirm-password" class="form-label">Passwort bestätigen</label>
                <input type="password" class="form-control bg-dark text-light border-light" id="confirm-password" placeholder="Passwort bestätigen">
              </div>
              <button type="submit" class="btn btn-primary w-100">Konto erstellen</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/custom_styles.scss";

.card {
  border: 1px solid $light;
  box-shadow: 0 0 15px $light;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 0 30px whitesmoke;
  border-color: $secondary;
}

.card-body {
  padding: 2rem;
}
</style>
