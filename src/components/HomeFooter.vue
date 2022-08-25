<template>
  <footer class="home-footer" :class="{ 'home-footer--light': !isDark }">
    <div class="container">
      <home-footer-nav :is-dark="isDark" :social="social" :phone="phone" />
    </div>
  </footer>
</template>

<script>
import HomeFooterNav from "@/components/HomeFooter/HomeFooterNav.vue";

import { social, phone } from "@/api/database.json";
export default {
  name: "home-footer",
  components: { HomeFooterNav },
  props: {
    isDark: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      social,
      phone,
    };
  },
};
</script>

<style lang="sass">
.container
  padding: 1rem 2.5rem

.home-footer
  background-color: #272727
  &--light
    background-color: #CFD8DC
</style>
