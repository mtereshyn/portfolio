<template>
  <div class="about-skills">
    <h2 class="about-skills__slogan" :class="{ dark: !isDark }">My skills</h2>
    <about-skills-list :is-dark="isDark" />
  </div>
</template>

<script>
import AboutSkillsList from "@/components/About/AboutSkills/AboutSkillsList";
export default {
  name: "about-skills",
  components: { AboutSkillsList },
  props: {
    isDark: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="sass">
.about-skills
  padding: 0 2.5rem
  display: flex
  flex-direction: column
  gap: 20px
.about-skills__slogan
  font-weight: 700
  text-align: center
  color: #cfd8dc
  text-transform: uppercase
  font-size: 40px
.dark
  color: #263238
</style>
