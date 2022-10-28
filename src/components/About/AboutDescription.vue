<template>
  <div class="about-description">
    <h2 class="about-description__slogan" :class="{ dark: !isDark }">
      About me
    </h2>
    <p class="about-description__text" :class="{ dark: !isDark }">
      <span class="about-description__text-slogan">Hello again everyone!</span>
      I am Maksym. A little about me: I'm a student, I'm 21, I live in Kyiv,
      Ukraine.
    </p>
    <p class="about-description__text" :class="{ dark: !isDark }">
      <span class="about-description__text-slogan"
        >Why should you choose me?</span
      >
      I’l quickly and well join the team, I am hardworking and I want to develop
      in the field of programming, as I saw this as my favorite thing.
    </p>
    <p class="about-description__text" :class="{ dark: !isDark }">
      <span class="about-description__text-slogan">Goal?</span>
      To obtain position of a Markup/FrontEnd Developer in order to master my
      skills, such as: <br />
      VueJs, JavaScript, HTML(PUG/BEM), CSS(SCSS/SASS), Gulp, npm
    </p>
    <p class="about-description__text" :class="{ dark: !isDark }">
      <span class="about-description__text-slogan">Work experience?</span>
      Everything is in cv
    </p>
    <div class="about-description__text">
      <span class="about-description__text-slogan">My Blog?</span>
      <router-link
        to="/blog"
        class="about-description__text"
        :class="{ dark: !isDark }"
        >Blog link</router-link
      >
    </div>
    <about-description-list :is-dark="isDark" />
    <a
      :href="require('@/assets/pdf/CV.pdf')"
      download
      class="app-button--download app-button about-description__button"
      :class="{ 'app-button--download--light': !isDark }"
      >Download cv</a
    >
  </div>
</template>

<script>
import AboutDescriptionList from "@/components/About/AboutDescription/AboutDescriptionList";
export default {
  name: "about-description",
  components: {
    AboutDescriptionList,
  },
  props: {
    isDark: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="sass">

.about-description
  padding: 0 2.5rem
  display: flex
  flex-direction: column
  gap: 20px

.about-description__slogan
  font-weight: 700
  text-align: center
  color: #CFD8DC
  text-transform: uppercase
  font-size: 40px

.about-description__text
  font-weight: 400
  font-size: 20px
  color: #CFD8DC
  text-decoration: none
  display: flex
  flex-direction: column
  gap: 5px

.about-description__text:last-child
  gap: 15px

.about-description__text-slogan
  font-weight: 700
  font-size: 20px
  color: #00C4F0

.about-description__button
  align-self: flex-start

.about-description__item
  font-weight: 400
  color: #cfd8dc
  font-size: 20px

.dark
  color: #263238
</style>
