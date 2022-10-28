<template>
  <div class="wrapper wrapper--list">
    <div
      class="portfolio-list"
      :style="{ 'margin-left': '-' + 100 * currentSlideIndex + '%' }"
    >
      <portfolio-item v-for="item in portfolio" :key="item.id" :item="item" />
    </div>
    <div class="button__wrapper">
      <app-button @click="prevSlide" class="arrow arrow--prev">
        <img :src="require('@/assets/svg/arrow-icon.svg')" alt="arrow icon" />
      </app-button>
      <app-button @click="nextSlide" class="arrow arrow--next">
        <img :src="require('@/assets/svg/arrow-icon.svg')" alt="arrow icon" />
      </app-button>
    </div>
  </div>
</template>

<script>
import { portfolio } from "@/api/database";
import PortfolioItem from "@/components/Portfolio/PortfolioItem";
import AppButton from "@/Common/AppButton.vue";

export default {
  name: "portfolio-list",
  components: {
    PortfolioItem,
    AppButton,
  },

  props: {
    isDark: {
      type: Boolean,
      default: true,
    },
    interval: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      portfolio,
      currentSlideIndex: 0,
    };
  },

  methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      }
    },
    nextSlide() {
      if (this.currentSlideIndex >= this.portfolio.length - 1) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex++;
      }
    },
  },

  mounted() {
    if (this.interval > 0) {
      let vm = this;
      setInterval(function () {
        vm.nextSlide();
      }, vm.interval);
    }
  },
};
</script>

<style lang="sass">

.wrapper
  &--list
    padding-bottom: 100px
    display: flex
    flex-direction: column
    gap: 30px

.portfolio-list
  display: flex
  transition: all ease .5s
  max-width: 240px

.button__wrapper
  display: flex
  justify-content: center
  gap: 30px
</style>
