<template>
  <div class="router-list">
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
  </div>
</template>

<script>
export default {
  name: "router-list",
  props: {
    array: {
      type: Array,
      required: false,
    },
  },
};
</script>

<style lang="sass"></style>
