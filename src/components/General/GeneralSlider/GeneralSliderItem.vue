<template>
  <div class="general-slider-item">
    <img
      :src="require('@/assets/images/' + item.img)"
      class="general-slider-item__image"
      :alt="item.name"
    />
  </div>
</template>

<script>
export default {
  name: "general-slider-item",
  props: {
    item: {
      type: Object,
      reqired: false,
    },
  },
};
</script>

<style lang="sass">

.general-slider-item
  max-height: 250px
  max-width: 250px

.general-slider-item__image
  height: 100%
@media screen and (max-width: 786px)
  .general-slider-item
    max-width: 100px
    max-height: 100px
</style>
