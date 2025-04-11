<script>
export default {
  name: "ErrorMessageComponent",
  props: {
    errors: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    errorMessage() {
      return this.errors.join("\n");
    }
  }
}
</script>

<template>
  <div class="alert alert-danger d-flex align-items-center" role="alert">
    <div>
      <div v-for="(error, index) in errors" :key="index">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
