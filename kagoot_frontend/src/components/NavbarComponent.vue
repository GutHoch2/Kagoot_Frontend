<script>
export default {
  name: "NavbarComponent",
  methods: {
    isActive(path){
      return path === this.$route.path;
    }
  }
}

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand text-light" to="/">Kagoot</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbar">
        <!-- Linke Navigation -->
        <ul class="navbar-nav me-auto my-2 my-lg-0 " style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <router-link class="nav-link text-light" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/about">Über uns</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              More
            </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item text-light" to="/action1">Action</router-link></li>
              <li><router-link class="dropdown-item text-light" to="/action2">Another action</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link class="dropdown-item text-light" to="/something-else">Something else</router-link></li>
            </ul>
          </li>
        </ul>

        <!-- Rechte Navigation -->
        <ul class="navbar-nav d-flex">
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/sign-in">Anmelden</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/sign-up">Registrieren</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>
