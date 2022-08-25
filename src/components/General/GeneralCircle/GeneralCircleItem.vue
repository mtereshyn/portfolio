<template>
  <div
    class="general-circle-item"
    :class="{ 'general-circle-item--light': !isDark }"
  >
    <img
      :src="require('@/assets/svg/' + item.img)"
      :alt="item.name"
      class="general-circle-item__image"
    />
    <slot />
  </div>
</template>

<script>
export default {
  name: "general-circle-item",
  props: {
    isDark: {
      type: Boolean,
      default: true,
    },
    item: {
      type: Object,
      required: false,
    },
  },
};
</script>

<style lang="sass">
.general-circle-item
  width: 90px
  height: 90px
  background-color: #00C4F0
  border-radius: 50%
  display: flex
  align-items: center
  justify-content: center
  &--light
    background-color: #CFD8DC

@media screen and (max-width: 768px)
  .general-circle-item
    width: 45px
    height: 45px
    &--light
      background-color: #CFD8DC
  .general-circle-item__image
    height: 30px
    width: 30px
</style>
