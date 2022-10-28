<template>
  <div class="about-skills-item" :class="{ dark: !isDark }">
    {{ skill.name }}
    <vue-ellipse-progress
      class="about-skills-item__progress"
      v-bind="options"
      :progress="skill.value"
    />
  </div>
</template>

<script>
export default {
  name: "about-skills-item",
  props: {
    isDark: {
      type: Boolean,
      default: true,
    },
    skill: {
      type: Object,
      required: false,
    },
  },

  data() {
    return {
      options: {
        color: "#00C4F0",
        "empty-color": `${this.borderColor}`,
        animation: "rs 700 1000",
        size: 25,
        "font-size": 0,
      },

      light: "#cfd8dc",
      dark: "#263328",
    };
  },

  computed: {
    borderColor() {
      return !this.isDark ? this.light : this.dark;
    },
  },
};
</script>

<style lang="sass">
.about-skills-item
  display: flex
  align-items: center
  justify-content: space-between
  letter-spacing: .05em
  font-size: 16px
  font-weight: 400
  color: #CFD8DC

.dark
  color: #263238
</style>
