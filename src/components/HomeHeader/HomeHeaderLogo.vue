<template>
  <div class="home-header-logo__wrapper">
    <router-link to="/">
      <img :src="logo" alt="main logo" class="home-header-logo" />
    </router-link>

    <router-link
      to="/"
      :class="{ 'home-header-logo__slogan--dark': !isDark }"
      class="home-header-logo__slogan"
    >
      mtereshyn
    </router-link>
  </div>
</template>

<script>
import logo from "@/assets/svg/logo.svg";

import { ROUTES } from "@/router/routes";

export default {
  name: "home-header-logo",
  props: {
    isDark: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      logo,
      ROUTES,
    };
  },
};
</script>

<style lang="sass">
@import '@/assets/styles/variables.sass'

.home-header-logo__wrapper
  display: flex
  align-items: center

.home-header-logo__slogan
  text-decoration: none
  color: #CFD8DC
  font-weight: 700
  font-size: 18px
  line-height: 22px
  &--dark
    color: #263238
</style>
