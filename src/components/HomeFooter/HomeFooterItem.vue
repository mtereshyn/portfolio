<template>
  <div class="home-footer-item">
    <a
      :href="item.href"
      class="home-footer-item__link"
      :class="{ 'home-footer-item__link--light': !isDark }"
      >{{ item.name }}</a
    >
    <a :href="item.href">
      <img
        :src="require('@/assets/svg/' + item.img)"
        class="home-footer-item__image"
        alt="item.name"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "home-footer-item",
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

.home-footer-item
  display: flex
  flex-direction: row-reverse
  align-items: center
  justify-content: space-between

.home-footer-item__link
  text-decoration: none
  font-size: 16px
  line-height: 22px
  font-weight: 300
  color: #cfd8dc
  &--light
    color: #263238
@media screen and (max-width: 768px)
  .home-footer-item__image
    max-width: 40px
    max-height: 40px
</style>
