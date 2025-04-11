<template>
  <nav class="bg-info text-dark p-3 h-100">
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link class="nav-link text-black" to="/dashboard">
          <i class="fa-solid fa-gauge-simple-high me-2"></i> Dashboard
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-black" to="/my-quizzes">
          <i class="fa-solid fa-dice me-2"></i> Meine Quizze
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-black" to="/about">
          <i class="fa-solid fa-user-group me-2"></i> Über uns
        </router-link>
      </li>
      <li class="nav-item">
        <a
          class="nav-link dropdown-toggle text-black"
          data-bs-toggle="collapse"
          href="#moreLinks"
        >
          <i class="fas fa-ellipsis-h me-2"></i> More
        </a>
        <div class="collapse" id="moreLinks">
          <ul class="list-unstyled ps-3">
            <li>
              <router-link class="nav-link text-black" to="/action1">
                <i class="fas fa-bolt me-2"></i> Action
              </router-link>
            </li>
            <li>
              <router-link class="nav-link text-black" to="/action2">
                <i class="fas fa-puzzle-piece me-2"></i> Another action
              </router-link>
            </li>
            <li>
              <router-link class="nav-link text-black" to="/something-else">
                <i class="fas fa-random me-2"></i> Something else
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "SidebarComponent"
}
</script>

<style scoped>
</style>
