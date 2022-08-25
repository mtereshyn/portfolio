<template>
  <header class="home-header" :class="{ 'home-header--light': !isDark }">
    <div class="home-header__container">
      <div class="home-header__wrapper">
        <home-header-logo :is-dark="isDark" />
        <home-header-toggle :is-open="isOpen" @open="open" :is-dark="isDark" />
      </div>
      <home-header-nav :is-open="isOpen" :is-dark="isDark" @change="change" />
    </div>
  </header>
</template>

<script>
import HomeHeaderLogo from "@/components/HomeHeader/HomeHeaderLogo.vue";
import HomeHeaderToggle from "@/components/HomeHeader/HomeHeaderToggle.vue";
import HomeHeaderNav from "@/components/HomeHeader/HomeHeaderNav.vue";

const EVENTS = {
  open: "open",
  change: "change",
};

export default {
  name: "home-header",
  components: {
    HomeHeaderLogo,
    HomeHeaderNav,
    HomeHeaderToggle,
  },
  props: {
    isDark: {
      type: Boolean,
      default: true,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      EVENTS,
    };
  },
  methods: {
    change() {
      this.$emit(EVENTS.change);
    },
    open() {
      this.$emit(EVENTS.open);
    },
  },
};
</script>

<style lang="sass">
.home-header
  position: relative
  padding-bottom: 30px
  &--light
    background-color: #CFD8DC
.home-header__container
  display: flex
  flex-direction: column
  padding: 0 2.5rem

.home-header__wrapper
  display: flex
  justify-content: space-between
  align-items: center

// .home-header::after
//   content: ''
//   width: 100%
//   height: 1px
//   border-radius: 50%
//   background-color: #cfd8dc
//   position: absolute

// .home-header--light::after
//   content: ''
//   width: 100%
//   height: 1px
//   background-color: #212121
//   position: absolute
</style>
