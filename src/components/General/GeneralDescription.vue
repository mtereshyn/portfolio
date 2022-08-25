<template>
  <div class="general-description">
    <div class="general-description__wrapper">
      <h2
        class="general-description__greetings light"
        :class="{ dark: !isDark }"
      >
        Hello
      </h2>
      <p class="general-description__name light" :class="{ dark: !isDark }">
        I’m Maksym Tereshyn
      </p>
      <p class="general-description__text light" :class="{ dark: !isDark }">
        I am a Frontend Developer. I want and continue to develop in this area.
        Interested? Click the button and contact me
      </p>
      <a
        class="app-button--general app-button"
        :class="{ 'app-button--general--light': !isDark }"
        href="mailto:max.tereshyn@gmail.com"
        >Contact me</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "general-description",
  props: {
    isDark: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="sass">
.general-description__wrapper
  display: flex
  flex-direction: column
  align-items: flex-start
  gap: 10px
  margin-bottom: 50px

.light
  color: #cfd8dc
.dark
  color: #263238

.general-description__greetings
  font-weight: 600
  font-size: 48px
  line-height: 59px

.general-description__name
  font-weight: 700
  font-size: 64px
  line-height: 78px

.general-description__text
  font-weight: 400
  font-size: 18px
  line-height: 22px
  margin-bottom: 10px
</style>
