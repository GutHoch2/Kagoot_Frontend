<template>
  <div class="d-flex flex-column">
    <!-- Navbar oben -->
    <navbar-component @toggleSidebar="toggleSidebar"/>

    <!-- Mobile Sidebar unter Navbar -->
    <sidebar-component
      v-if="isMobile && !isCollapsed"
      class="bg-info px-3 py-2"
    />

    <!-- Mobile Content -->
    <div
      v-if="isMobile"
      class="flex-grow-1 px-4 py-3 bg-dark"
    >
      <slot/>
    </div>

    <!-- Desktop Layout mit Sidebar links -->
    <div
      v-else
      class="d-flex bg-dark"
      style="height: calc(100vh - 56px);"
    >
      <sidebar-component
        v-show="!isCollapsed"
        class="sidebar bg-info overflow-auto"
      />
      <main class="flex-grow-1 p-4 overflow-auto">
        <slot/>
      </main>
    </div>
  </div>
</template>

<script>
import NavbarComponent from './NavbarComponent.vue'
import SidebarComponent from './SidebarComponent.vue'

export default {
  name: 'LayoutWrapper',
  components: {
    NavbarComponent,
    SidebarComponent
  },
  data() {
    return {
      isMobile: false,
      isCollapsed: true
    }
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed
    },
    checkScreen() {
      this.isMobile = window.innerWidth < 576
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
  overflow-y: auto;
}

@media (max-width: 575px) {
  .sidebar {
    width: 100%;
    height: auto;
    overflow: visible;
  }
}
</style>
