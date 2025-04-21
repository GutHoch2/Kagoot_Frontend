<script>
export default {
  name: "PasswordFieldComponent",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    labelText: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      showPassword: false
    }
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    }
  }
}
</script>

<template>
  <div class="mb-3">
    <label for="password" class="form-label">{{labelText}}</label>
    <div class="position-relative">
      <input
        :type="showPassword ? 'text' : 'password'"
        class="form-control bg-dark text-light border-light pe-5"
        id="password"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        placeholder="Passwort">

      <i
        :class="showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"
        class="position-absolute top-50 translate-middle-y end-0 me-3 text-light cursor-pointer"
        @click="togglePassword"
      ></i>
    </div>
  </div>
</template>
