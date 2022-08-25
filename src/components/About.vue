<template>
  <div class="about">
    <div class="about-container">
      <h2 class="about__slogan" :class="{ dark: !isDark }">About me</h2>
      <p class="about__text" :class="{ dark: !isDark }">
        <span class="about__text-slogan">Hello again everyone!</span>
        I am Maksym. A little about me: I'm a student, I'm 21, I live in Kyiv,
        Ukraine.
      </p>
      <p class="about__text" :class="{ dark: !isDark }">
        <span class="about__text-slogan">Why should you choose me?</span>
        I’l quickly and well join the team, I am hardworking and I want to
        develop in the field of programming, as I saw this as my favorite thing.
      </p>
      <p class="about__text" :class="{ dark: !isDark }">
        <span class="about__text-slogan">Goal?</span>
        To obtain position of a Markup/FrontEnd Developer in order to master my
        skills, such as: <br />
        VueJs, JavaScript, HTML(PUG/BEM), CSS(SCSS/SASS), Gulp, npm
      </p>
      <p class="about__text" :class="{ dark: !isDark }">
        <span class="about__text-slogan">Work experience?</span>
        Everything is in cv
      </p>
      <div class="about__text">
        <span class="about__text-slogan">My Blog?</span>
        <router-link to="/blog" class="about__text" :class="{ dark: !isDark }"
          >Blog link</router-link
        >
      </div>
      <ul class="about__list">
        <span class="about__text-slogan">Hobbies?</span>
        <li
          class="about__item"
          v-for="hobby in hobbies"
          :key="hobby.id"
          :class="{ dark: !isDark }"
        >
          {{ hobby.name }}
        </li>
      </ul>
      <a
        :href="require('@/assets/pdf/CV.pdf')"
        download
        class="app-button--download app-button about__button"
        :class="{ 'app-button--download--light': !isDark }"
        >Download cv</a
      >
    </div>
  </div>
</template>

<script>
import { hobbies } from "@/api/database.json";

export default {
  name: "about",
  props: {
    isDark: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      hobbies,
    };
  },
};
</script>

<style lang="sass">
.about
  padding-bottom: 100px
.about-container
  padding: 0 2.5rem
  display: flex
  flex-direction: column
  gap: 20px

.about__slogan
  font-weight: 700
  text-align: center
  color: #CFD8DC
  text-transform: uppercase
  font-size: 44px

.about__text
  font-weight: 400
  font-size: 20px
  color: #CFD8DC
  text-decoration: none
  display: flex
  flex-direction: column
  gap: 5px

.about__text:last-child
  gap: 15px

.about__text-slogan
  font-weight: 700
  font-size: 20px
  color: #00C4F0

.about__button
  align-self: flex-start

.about__list
  list-style: none
  display: flex
  flex-direction: column
.about__item
  font-weight: 400
  color: #cfd8dc
  font-size: 20px

.dark
  color: #263238
</style>
