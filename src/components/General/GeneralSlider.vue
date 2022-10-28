<template>
  <div class="wrapper">
    <div
      class="general-slider"
      :style="{ 'margin-left': '-' + 100 * currenctEmojiIndex + '%' }"
    >
      <general-slider-item v-for="item in emoji" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import GeneralSliderItem from "@/components/General/GeneralSlider/GeneralSliderItem";
export default {
  name: "general-slider",
  props: {
    emoji: {
      type: Array,
      required: false,
    },
    interval: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      currenctEmojiIndex: 0,
    };
  },
  components: {
    GeneralSliderItem,
  },
  methods: {
    nextEmojiSlide() {
      if (this.currenctEmojiIndex >= this.emoji.length - 1) {
        this.currenctEmojiIndex = 0;
      } else {
        this.currenctEmojiIndex++;
      }
    },
  },
  mounted() {
    if (this.interval > 0) {
      let vm = this;
      setInterval(function () {
        vm.nextEmojiSlide();
      }, vm.interval);
    }
  },
};
</script>

<style lang="sass">
@media screen and (max-width: 768px)
  .wrapper
    overflow: hidden
  .general-slider
    display: flex
    transition: all ease .5s
    max-width: 100px
</style>
