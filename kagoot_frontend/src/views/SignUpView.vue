<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import axios from 'axios'
import ErrorMessageComponent from "@/components/ErrorMessageComponent.vue";
import PasswordFieldComponent from "@/components/PasswordFieldComponent.vue";

export default {
  name: "SignUp",
  components: {PasswordFieldComponent, ErrorMessageComponent, NavbarComponent},
  data() {
    return {
      username: '',
      email: '',
      password: '',
      passwordRepetition: '',
      errors: []
    }
  },
  methods: {
    submitForm() {
      console.log('Form submitted');

      this.errors = [];

      if (this.username === '') {
        this.errors.push('Bite Benutzernamen angeben.');
      }

      if (this.email === '') {
        this.errors.push('Bitte Email-Adresse angeben.');
      }

      if (this.password === '') {
        this.errors.push('Bitte Passwort eingeben.');
      }

      if (this.passwordRepetition !== this.password) {
        this.errors.push('Passwörter stimmen nicht überein.');
      }

      if (!this.errors.length) {
        const formData = {
          mail: this.email,
          plaintextPassword: this.password,
          name: this.username
        }
        console.log(formData);
        axios.post('api/signup/quizmaster', formData)
          .then((response) => {
            console.debug(response); // Gibt die gesamte Antwort aus
            this.$router.push({name: 'sign-in'});
          })
          .catch(error => {
            if (error.response) {
              for (const property in error.response.data) {
                this.errors.push(`${property}: ${error.response.data[property]}`);
              }
              console.log(JSON.stringify(error.response.data));
            } else if (error.message) {
              this.errors.push('Hat leider nicht geklappt. Versuch\'s nochmals!');
              console.log(JSON.stringify(error));
            }
          })
      } else {
        console.log(this.errors)
      }
    }
  }
}
</script>

<template>
  <navbar-component :show-additional-content="false"></navbar-component>
  <div
    class="container-fluid bg-dark text-light py-5 d-flex flex-column align-items-center justify-content-center">
    <header class="text-center mb-5">
      <h1 class="display-3 fw-bold text-glow">Erstelle ein Konto</h1>
      <p class="fs-4 text-secondary fst-italic">Werde Teil von Kagoot und starte deine
        Quiz-Reise!</p>
    </header>

    <!-- Formular-Bereich -->
    <div class="row w-100 justify-content-center gx-5">
      <div class="col-md-6 col-12 mb-4">
        <div class="card bg-dark border-light text-light">
          <div class="card-body p-5">
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="username" class="form-label">Benutzername</label>
                <input
                  v-model="username"
                  type="text"
                  class="form-control bg-dark text-light border-light"
                  id="username"
                  placeholder="Benutzername">
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">E-Mail Adresse</label>
                <input
                  v-model="email"
                  type="email"
                  class="form-control bg-dark text-light border-light"
                  id="email"
                  placeholder="E-Mail Adresse">
              </div>
              <password-field-component label-text="Passwort"
                                        v-model="password"></password-field-component>
              <password-field-component label-text="Passwort bestätigen"
                                        v-model="passwordRepetition"></password-field-component>
              <button type="submit" class="btn btn-primary w-100">Konto erstellen</button>
              <error-message-component
                class="mt-3"
                v-if="errors.length"
                :errors="errors"
              ></error-message-component>
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
