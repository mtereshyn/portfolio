<template>
  <div class="about">
    <about-description :is-dark="isDark" />
    <about-skills :is-dark="isDark" />
  </div>
</template>

<script>
import AboutDescription from "@/components/About/AboutDescription";
import AboutSkills from "@/components/About/AboutSkills";
export default {
  name: "about",
  components: {
    AboutDescription,
    AboutSkills,
  },
  props: {
    isDark: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="sass">
.about
  padding-bottom: 100px

  display: flex

@media screen and (max-width: 768px)
  .about
    flex-direction: column
    gap: 30px
    
</style>
