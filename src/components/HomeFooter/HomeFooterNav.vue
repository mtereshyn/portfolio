<template>
  <nav class="home-footer-nav">
    <home-header-logo :is-dark="isDark" />
    <ul class="home-footer-nav__list">
      <router-link
        class="home-footer-nav__item"
        :class="{ 'home-footer-nav__item--light': !isDark }"
        to="/home"
        exact
        >Home</router-link
      >
      <router-link
        class="home-footer-nav__item"
        :class="{ 'home-footer-nav__item--light': !isDark }"
        to="/portfolio"
        exact
        >Portfolio</router-link
      >
      <router-link
        class="home-footer-nav__item"
        :class="{ 'home-footer-nav__item--light': !isDark }"
        to="/blog"
        exact
        >Blog</router-link
      >
      <router-link
        class="home-footer-nav__item"
        :class="{ 'home-footer-nav__item--light': !isDark }"
        to="/contact"
        exact
        >Contact</router-link
      >
    </ul>
    <home-footer-list :phone="phone" :social="social" :is-dark="isDark" />
  </nav>
</template>

<script>
import HomeHeaderLogo from "@/components/HomeHeader/HomeHeaderLogo";
import HomeFooterList from "@/components/HomeFooter/HomeFooterList";

export default {
  name: "home-footer-nav",
  props: {
    isDark: {
      type: Boolean,
      default: true,
    },
    social: {
      type: Array,
      required: false,
    },
    phone: {
      type: Array,
      required: false,
    },
  },
  components: {
    HomeHeaderLogo,
    HomeFooterList,
  },
};
</script>

<style lang="sass">
.home-footer-nav
  display: flex
  align-items: flex-start
  flex-direction: column
  gap: 30px

.home-footer-nav__list
  display: flex
  flex-direction: column
  align-items: flex-start
  gap: 10px

.home-footer-nav__item
  color: #cfd8dc
  text-decoration: none
  font-weight: 300
  font-style: normal
  letter-spacing: .05em
  font-size: 18px
  line-height: 22px
  &--light
    color: #263238

@media screen and (max-width: 768px)
  .home-footer-nav
    align-items: center
  .home-footer-nav__list
    align-items: center
</style>
