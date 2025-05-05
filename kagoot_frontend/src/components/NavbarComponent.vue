<script>
export default {
  name: "NavbarComponent",
  props:{
    showAdditionalContent: {
      type: Boolean,
      required: false,
      default: true,
    },

  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push({ name: 'sign-in' })
    }
  }
}
</script>


<template>
  <nav class="navbar navbar-dark px-3 justify-content-between bg-black">
    <router-link class="navbar-brand" to="/">Kagoot</router-link>

    <div class="d-flex align-items-center">
      <!-- Hamburger only on small screens -->
      <button
        class="btn btn-outline-light d-sm-none me-3"
        @click="$emit('toggleSidebar')"
        v-show="showAdditionalContent"
      >
        ☰
      </button>
      <template v-if="!isLoggedIn">
        <router-link class="nav-link text-light ms-3" to="/sign-up">
          <i class="fa-solid fa-user-plus me-2"></i> Sign up
        </router-link>
        <router-link class="nav-link text-light ms-3" to="/sign-in">
          <i class="fa-solid fa-right-to-bracket me-2"></i> Login
        </router-link>
      </template>
      <template v-else>
        <button @click="logout" class="btn btn-outline-light btn-sm">Logout</button>
      </template>
    </div>
  </nav>
</template>

<style scoped>
</style>
