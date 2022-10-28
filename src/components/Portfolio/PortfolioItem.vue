<template>
  <div class="portfolio-item">
    <router-link :to="item.href" class="portfolio-item__link">
      <img
        class="portfolio-item__image"
        :src="require('@/assets/images/' + item.img)"
        :alt="item.name"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "portfolio-item",

  props: {
    item: {
      type: Object,
      required: false,
    },
  },
};
</script>

<style lang="sass">
@media screen and (max-width: 768px)
  .portfolio-item
    max-width: 240px
    max-height: 240px
  .portfolio-item__image
    height: 100%
    width: 240px
    border-radius: 10px
    box-shadow: 0px 4px 15px rgba(27, 27, 27, 0.28)
</style>
