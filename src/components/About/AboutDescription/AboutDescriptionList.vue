<template>
  <div class="about-description-list">
    <span class="about-description-list__slogan slogan"> Hobbies? </span>
    <about-description-item
      v-for="hobby in hobbies"
      :key="hobby.id"
      :hobby="hobby"
      :is-dark="isDark"
    />
  </div>
</template>

<script>
import AboutDescriptionItem from "@/components/About/AboutDescription/AboutDescriptionItem";
import { hobbies } from "@/api/database";
export default {
  name: "about-description-list",
  components: {
    AboutDescriptionItem,
  },
  props: {
    isDark: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      hobbies,
    };
  },
};
</script>

<style lang="sass">
.slogan
  margin-bottom: 5px
.about-description-list__slogan
  font-size: 20px
  color: #00c4f0
  font-weight: 700
.about-description-list
  list-style: none
  display: flex
  flex-direction: column
</style>
