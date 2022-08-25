<template>
  <div
    class="home-header-toggle__wrapper"
    @click="open"
    :class="{ active: isOpen }"
  >
    <div
      class="home-header-toggle__line line-1"
      :class="{ 'home-header-toggle__line--light': !isDark }"
    ></div>
    <div
      class="home-header-toggle__line line-2"
      :class="{ 'home-header-toggle__line--light': !isDark }"
    ></div>
    <div
      class="home-header-toggle__line line-3"
      :class="{ 'home-header-toggle__line--light': !isDark }"
    ></div>
  </div>
</template>

<script>
const EVENTS = {
  open: "open",
};

export default {
  name: "home-header-toggle",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    isDark: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    open() {
      this.$emit(EVENTS.open);
    },
  },
};
</script>

<style lang="sass">
.home-header-toggle__wrapper
  width: 20px
  height: auto
  cursor: pointer
  position: relative


.home-header-toggle__line
  position: absolute
  border-radius: 3px
  width: 100%
  height: 2px
  background-color: #cfd8dc
  top: 0
  transition: all 0.6s cubic-bezier(0.5, 0.1, 0, 1.2)
  &--light
    background-color: #263238

.line-1
  top: -5px

.line-2
  top: 0px

.line-3
  top: 5px



.active .line-1
  top: 0
  transform: rotate(45deg)
.active .line-2
  display: none
.active .line-3
  top: 0
  transform: rotate(-45deg)
</style>
