<template>
  <div>
    <input type="file" accept="image/*" @change="onFileSelected" />
    <div v-if="previewUrl">
      <img :src="previewUrl" alt="Vorschau" width="200" class="rounded mt-2" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      previewUrl: null,   // Für <img> Vorschau (mit Prefix)
      pureBase64: null,   // Nur Base64 ohne Prefix
    };
  },
  methods: {
    onFileSelected(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const fullBase64 = e.target.result; // Das komplette "data:image/jpeg;base64,...."
          this.previewUrl = fullBase64; // Für die Vorschau wird der komplette String gebraucht

          // Jetzt nur den reinen Base64-Teil extrahieren:
          const base64Only = fullBase64.split(',')[1];
          this.pureBase64 = base64Only;
          this.$emit('onImageFileSelected', base64Only);
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>
