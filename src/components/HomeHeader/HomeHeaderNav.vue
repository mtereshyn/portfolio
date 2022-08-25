<template>
  <nav class="home-header-nav" v-if="isOpen">
    <ul class="home-header-nav__list">
      <router-link
        class="home-header-nav__item"
        :class="{ 'home-header-nav__item--light': !isDark }"
        to="/home"
        exact
        >Home</router-link
      >
      <router-link
        class="home-header-nav__item"
        :class="{ 'home-header-nav__item--light': !isDark }"
        to="/portfolio"
        exact
        >Portfolio</router-link
      >
      <router-link
        to="/blog"
        class="home-header-nav__item"
        exact
        :class="{ 'home-header-nav__item--light': !isDark }"
      >
        Blog
      </router-link>
      <router-link
        to="/contact"
        class="home-header-nav__item"
        exact
        :class="{ 'home-header-nav__item--light': !isDark }"
      >
        Contact
      </router-link>
    </ul>
    <div class="home-header-nav__wrapper">
      <app-button v-if="!isDark" class="app-button--dark" @click="change">
        <img :src="dark" alt="dark mode icon" class="app-button__image" />
      </app-button>
      <app-button v-else-if="isDark" class="app-button--light" @click="change">
        <img :src="light" alt="light mode icon" class="app-button__image" />
      </app-button>
    </div>
  </nav>
</template>

<script>
import dark from "@/assets/svg/dark-icon.svg";
import light from "@/assets/svg/light-icon.svg";
import { ROUTES } from "@/router/routes";

import AppButton from "@/Common/AppButton";

const EVENTS = {
  change: "change",
};

export default {
  name: "home-header-nav",
  components: { AppButton },
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
      dark,
      light,
      ROUTES,
    };
  },
  methods: {
    change() {
      this.$emit(EVENTS.change);
    },
  },
};
</script>

<style lang="sass">


.home-header-nav__item:hover
  opacity: 1

.router-link-exact-active
  opacity: 1

.router-link-exact-active::after
  display: block
  position: absolute
  height: 1px
  width: 35px
  background-color: #00C4F0
  content: ""

.home-header-nav
  display: flex
  align-items: center
.home-header-nav__list
  display: flex
.home-header-nav__item
  position: relative
  color: #cfd8dc
  text-decoration: none
  font-weight: 300
  font-style: normal
  letter-spacing: .05em
  font-size: 18px
  line-height: 22px
  opacity: .7
  &--light
    color: #263238

@media screen and (max-width: 768px)
  .home-header-nav
    padding: 40px 0
    flex-direction: column
    gap: 20px
  .home-header-nav__list
    flex-direction: column
    gap: 10px
    align-items: center
</style>
