<template>
  <div class="afrianska">
    <header class="main-header">
      <div class="container">
        <div class="main-header--block">
          <div class="main-header--block__logo">
            <a href="./index.html" class="main-header-logo--link">
              <img src="./assets/images/header-logo.svg" alt=""
            /></a>
          </div>
          <div class="main-header--block__create">
            <a href="../index.html" class="main-header--block__create--link"
              ><span>by </span>mtereshyn</a
            >
          </div>
          <div class="main-header--block--toggle" @click="open">
            <span class="main-header--block--toggle-bar"></span
            ><span class="main-header--block--toggle-bar"></span
            ><span class="main-header--block--toggle-bar"></span>
          </div>
        </div>
        <nav
          class="main-header-nav main-header-nav--nojs main-header-nav--closed"
          id="navbar"
          v-if="isOpen"
        >
          <ul class="main-header-nav__list">
            <li class="main-header-nav__list__item">
              <a href="#intro" class="main-header-nav__list__item--link"
                >Intro</a
              >
            </li>
            <li class="main-header-nav__list__item">
              <a href="#about" class="main-header-nav__list__item--link"
                >About us</a
              >
            </li>
            <li class="main-header-nav__list__item">
              <a href="#projects" class="main-header-nav__list__item--link"
                >Projects</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="main">
      <section class="tool">
        <div class="container">
          <div class="tool-texts">
            <a name="intro"></a>
            <h2 class="tool-texts__intro">
              New Automation <br />
              Tool for Your Home
            </h2>
            <p class="tool-texts__slogan">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              tristique vulputate ultrices ut mauris tellus at. Posuere
              sollicitudin odio tellus elit.
            </p>
            <button class="tool-texts__button">See Our Project</button>
          </div>
          <div class="tool--image">
            <img src="./assets/images/first-main-image.png" alt="" />
          </div>
        </div>
      </section>
      <section class="about-us">
        <a name="about"> </a>
        <div class="container">
          <div class="about-us--first">
            <h2 class="about-us--first__intro">
              What we do to help our client grow in digital era
            </h2>
            <ul class="about-us--first__block">
              <li class="about-us--first__block--item">
                <div class="about-us--first__block--item--image">
                  <img src="./assets/images/about-us--first.png" alt="" />
                </div>
                <h2 class="about-us--first__block--item__intro">
                  Make Your business To Be Better Famous In Internet
                </h2>
                <p class="about-us--first__block--item__slogan">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button class="about-us--first__block--item__button">
                  Learn more <img src="./assets/images/arrow.png" alt="" />
                </button>
              </li>
            </ul>
          </div>

          <div class="about-us--second">
            <ul class="about-us--second__list">
              <li class="about-us--second__list__item">
                <div class="about-us--second__list__item--image">
                  <img src="./assets/images/about-us--second.png" alt="" />
                </div>
                <h2 class="about-us--second__list__item--intro">
                  Bring Technology To Your Comfrotable Home
                </h2>
                <p class="about-us--second__list__item--slogan">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button class="about-us--second__list__item--button">
                  Learn more<img src="./assets/images/arrow.png" alt="" />
                </button>
              </li>
              <li class="about-us--second__list__item">
                <div class="about-us--second__list__item--image">
                  <img src="./assets/images/about-us--third.png" alt="" />
                </div>
                <h2 class="about-us--second__list__item--intro">
                  Build Your Digital Product That Suitable For Your Need
                </h2>
                <p class="about-us--second__list__item--slogan">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button class="about-us--second__list__item--button">
                  Learn more<img src="./assets/images/arrow.png" alt="" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="projects">
        <div class="container">
          <div class="projects-texts">
            <a name="projects"></a>
            <h2 class="projects-texts__intro">
              Our Finished <br />
              Project
            </h2>

            <p class="projects-texts__slogan">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              <br />
              enim ad minim veniam.
            </p>
          </div>
          <div class="projects-first">
            <div class="projects-first--texts">
              <h2 class="projects-first--texts__intro">
                Smart Home Installation
              </h2>
              <p class="projects-first--texts__slogan">
                In Muarakana Housing Estate
              </p>
            </div>
            <div class="projects-first--image">
              <img src="./assets/images/projects-first.png" alt="" />
            </div>
          </div>
          <ul class="projects__list">
            <li class="projects__list__item">
              <h2 class="projects__list__item--intro">Sparklite App</h2>
              <p class="projects__list__item--slogan">Marketplace</p>
              <img src="./assets/images/projects-second.png" alt="" />
            </li>
            <li class="projects__list__item">
              <h2 class="projects__list__item--intro">Car-Rapetition App</h2>
              <p class="projects__list__item--slogan">Board</p>
              <img src="./assets/images/projects-third.png" alt="" />
            </li>
          </ul>
        </div>
      </section>
    </main>
    <footer class="main-footer">
      <nav class="main-footer-nav">
        <div class="main-header--block__logo">
          <a href="./index.html" class="main-header-logo--link">
            <img src="./assets/images/header-logo.svg" alt=""
          /></a>
        </div>
        <div class="main-header--block__create">
          <a href="../index.html" class="main-header--block__create--link"
            ><span>by </span>mtereshyn</a
          >
        </div>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  name: "afrianska",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style src="@/web/afrianska/assets/css/style.css"></style>
