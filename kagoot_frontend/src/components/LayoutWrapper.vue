<template>
  <div class="vh-100 d-flex flex-column">
    <navbar-component @toggleSidebar="toggleSidebar" />

    <div class="d-flex flex-grow-1 position-relative bg-dark">
      <sidebar-component
        v-show="!isMobile || !isCollapsed"
        class="sidebar bg-info"
      />
      <main class="flex-grow-1 p-4 overflow-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
import NavbarComponent from './NavbarComponent.vue'
import SidebarComponent from './SidebarComponent.vue'

export default {
  name: 'LayoutWrapper',
  components: { NavbarComponent, SidebarComponent },
  data() {
    return {
      isMobile: false,
      isCollapsed: false,
    }
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed
    },
    checkScreen() {
      this.isMobile = window.innerWidth < 768
      if (!this.isMobile) {
        this.isCollapsed = false
      }
    }
  },
  mounted() {
    this.checkScreen()
    window.addEventListener('resize', this.checkScreen)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreen)
  }
}
</script>

<style scoped>
.sidebar {
  width: 200px;
}

@media (max-width: 575px) {
  .sidebar {
    position: absolute;
    left: 0;
    z-index: 1040;
  }
}
</style>
