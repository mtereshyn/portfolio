<template>
  <div class="home-footer-list__wrapper">
    <div class="home-footer-list">
      <home-footer-item
        :item="item"
        v-for="item in phone"
        :key="item.id"
        :is-dark="isDark"
      />
    </div>
    <div class="home-footer-list">
      <home-footer-item
        :item="item"
        v-for="item in social"
        :key="item.id"
        :is-dark="isDark"
      />
    </div>
  </div>
</template>

<script>
import HomeFooterItem from "@/components/HomeFooter/HomeFooterItem";
export default {
  name: "home-footer-list",
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
  data() {
    return {
      state: "phone",
    };
  },
  components: {
    HomeFooterItem,
  },
};
</script>

<style lang="sass">
.home-footer-list__wrapper
  width: 100%

  display: flex
  flex-direction: column
  gap: 30px

.home-footer-list
  display: flex
  flex-direction: column
  gap: 10px
</style>
