<template>
  <div class="about-skills-list">
    <about-skills-item
      v-for="skill in skills"
      :key="skill.id"
      :skill="skill"
      :is-dark="isDark"
    />
  </div>
</template>

<script>
import { skills } from "@/api/database";
import AboutSkillsItem from "@/components/About/AboutSkills/AboutSkillsItem";
export default {
  name: "about-skills-list",
  components: {
    AboutSkillsItem,
  },
  props: {
    isDark: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      skills,
    };
  },
};
</script>

<style lang="sass">
.about-skills-list
  display: flex
  flex-direction: column
  gap: 10px
</style>
