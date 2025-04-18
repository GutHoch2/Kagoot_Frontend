<script>
export default {
  name: "KeyFigureCardComponent",
  props: {
      header : {
        type : String,
        required : true,
      },
      figure : {
        type : String,
        required : true,
      }
    }
}
</script>

<template>
  <div class="card m-2">
    <div class="card-header">
      {{ header }}
    </div>
    <div class="card-body text-center">
      <h1 class="card-text text-info">{{ figure }}</h1>
    </div>
  </div>
</template>

<style scoped>


</style>
