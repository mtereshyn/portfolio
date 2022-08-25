<template>
  <main class="general" :class="{ 'general--light': !isDark }">
    <div class="general-container">
      <general-description :is-dark="isDark" />
    </div>
    <general-circle :is-dark="isDark" />
  </main>
</template>

<script>
import GeneralCircle from "@/components/General/GeneralCircle";
import GeneralDescription from "@/components/General/GeneralDescription";

export default {
  name: "general",
  components: {
    GeneralCircle,
    GeneralDescription,
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
.general
  padding-bottom: 125px

.general-container
  padding: 0 2.5rem
</style>
