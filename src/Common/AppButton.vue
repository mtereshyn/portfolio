<template>
  <button class="app-button" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: "app-button",
};
</script>

<style lang="sass">
@import '@/assets/styles/mixins'

.app-button
  text-decoration: none
  &--dark
    background-color: #263238
    @include app-button--circle
  &--light
    background-color: #CFD8DC
    @include app-button--circle
  &--general
    background-color: #263238
    color: #CFD8DC
    padding: 13px 41px
    @include app-button--rectangle
    box-shadow: 0px 0px 13px rgba(207, 216, 220, 0.8)
    text-transform: uppercase
    &--light
      background-color: #CFD8DC
      color: #263238
      box-shadow: 0px 0px 13px rgba(33, 33, 33, 0.8)
  &--download
    background-color: #263238
    color: #CFD8DC
    @include app-button--rectangle
    padding: 13px 35px
    box-shadow: 0px 0px 13px rgba(207, 216, 220, 0.8)
    text-transform: uppercase
    &--light
      background-color: #CFD8DC
      color: #263238
      box-shadow: 0px 0px 13px rgba(33, 33, 33, 0.8)

.arrow
  border: none
  background-color: inherit
  max-height: 30px
  &--prev
    transform: rotate(180deg)

.app-button__image
  width: 100%
</style>
e
