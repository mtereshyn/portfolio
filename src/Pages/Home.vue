<template>
  <div class="home" :class="{ 'home--light': !isDark }">
    <home-header
      :is-open="isOpen"
      :is-dark="isDark"
      @change="changeTheme"
      @open="openMenu"
    />
    <general :is-dark="isDark" @change="changeTheme" />
    <about :is-dark="isDark" @change="changeTheme" />
    <home-footer :is-dark="isDark" @change="changeTheme" />
  </div>
</template>

<script>
import HomeHeader from "@/components/HomeHeader";
import General from "@/components/General";
import About from "@/components/About.vue";
import HomeFooter from "@/components/HomeFooter";
export default {
  name: "home",
  components: {
    HomeHeader,
    General,
    About,
    HomeFooter,
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
@import '@/assets/styles/variables.sass'

.home
  font-family: 'Montserrat'
  background-color: #263238
  &--light
    background-color: #CFD8DC
</style>
