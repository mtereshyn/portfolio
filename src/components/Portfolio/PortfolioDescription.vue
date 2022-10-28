<template>
  <div class="portfolio-description">
    <h2
      class="portfolio-description__slogan"
      :class="{ 'portfolio-description__slogan--light': !isDark }"
    >
      Portfolio
    </h2>
    <portfolio-list :is-dark="isDark" :interval="3000" />
  </div>
</template>

<script>
import PortfolioList from "@/components/Portfolio/PortfolioList";
export default {
  name: "portfolio-desciption",
  components: {
    PortfolioList,
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
.portfolio-description
  padding: 0 2.5rem
  display: flex
  flex-direction: column
  gap: 30px

.portfolio-description__slogan
  text-align: center
  text-transform: uppercase
  color: #cfd8dc
  font-size: 40px
  &--light
    color: #263238
</style>
