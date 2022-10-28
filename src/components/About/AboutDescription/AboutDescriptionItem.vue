<template>
  <div class="about-description-item" :class="{ dark: !isDark }">
    {{ hobby.name }}
  </div>
</template>

<script>
export default {
  name: "about-description-item",
  props: {
    isDark: {
      type: Boolean,
      default: true,
    },
    hobby: {
      type: Object,
      required: false,
    },
  },
};
</script>

<style lang="sass">
.about-description-item
  font-weight: 400
  font-size: 20px
  color: #cfd8dc

.dark
  color: #263238
</style>
