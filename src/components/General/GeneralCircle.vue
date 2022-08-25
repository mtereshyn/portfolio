<template>
  <div class="general-circle">
    <general-circle-item
      v-for="item in newList.slice(0, 1)"
      :key="item.id"
      :item="item"
    />
    <div class="general-circle__wrapper">
      <general-circle-item
        v-for="item in newList.slice(1, 3)"
        :key="item.id"
        :item="item"
      />
    </div>
    <div class="general-circle__slider">
      <general-circle-item
        v-for="item in newList.slice(3, 4)"
        :key="item.id"
        :item="item"
      />
      <general-slider :emoji="emoji" :interval="2000" />
      <general-circle-item
        v-for="item in newList.slice(4, 5)"
        :key="item.id"
        :item="item"
      />
    </div>
    <div class="general-circle__wrapper">
      <general-circle-item
        v-for="item in newList.slice(5, 7)"
        :key="item.id"
        :item="item"
      />
    </div>
    <general-circle-item
      v-for="item in newList.slice(7, 8)"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
import GeneralSlider from "@/components/General/GeneralSlider";
import GeneralCircleItem from "@/components/General/GeneralCircle/GeneralCircleItem.vue";

import { iconDark, iconLight, iconBlue, emoji } from "@/api/database.json";

export default {
  name: "general-circle",
  components: {
    GeneralSlider,
    GeneralCircleItem,
  },
  props: {
    isDark: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      iconDark,
      iconLight,
      iconBlue,
      emoji,
    };
  },

  computed: {
    newList: function () {
      if (this.isDark) {
        return this.iconLight;
      } else if (this.isDark && window.screen.width > 768) {
        return this.iconBlue;
      } else if (window.screen.width > 768) {
        return this.iconBlue;
      } else {
        return this.iconDark;
      }
    },
  },
};
</script>

<style lang="sass">

@media screen and (max-width: 768px)
  .general-circle
    display: flex
    flex-direction: column
    align-items: center
    max-width: 280px
    margin: 0 auto

  .general-circle__wrapper
    display: flex
    align-items: center
    width: 100%
    justify-content: center
    gap: 54%

  .general-circle__slider
    display: flex
    align-items: center
    width: 100%
    justify-content: space-between
</style>
