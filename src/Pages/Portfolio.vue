<template>
  <div class="portfolio" :class="{ 'portfolio--light': !isDark }">
    <home-header
      :is-open="isOpen"
      :is-dark="isDark"
      @change="changeTheme"
      @open="openMenu"
    />
    <portfolio-description :is-dark="isDark" />
    <home-footer :is-dark="isDark" @change="changeTheme" />
  </div>
</template>

<script>
import HomeHeader from "@/components/HomeHeader";
import HomeFooter from "@/components/HomeFooter";
import PortfolioDescription from "@/components/Portfolio/PortfolioDescription";
export default {
  name: "portfolio",
  components: {
    HomeHeader,
    HomeFooter,
    PortfolioDescription,
  },
  data() {
    return {
      isDark: true,
      isOpen: false,
    };
  },
  methods: {
    changeTheme() {
      this.isDark = !this.isDark;
    },
    openMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="sass">
.portfolio
  font-family: 'Montserrat'
  background-color: #263238
  &--light
    background-color: #cfd8dc
</style>
