<template>
  <div>
    <div class="header">
      <div class="content-container">
        <div class="header__content">
          <LanguageSwitchComponent />
          <NuxtLink :to="LocalizePath('/')">
            <img
              src="/blue-angel-stripclub-wortbildmarke.svg"
              alt="blue-angle-logo"
              title="blue-angle-logo"
              height="60"
            />
          </NuxtLink>
          <div
            class="burger__container"
            :class="toggleMenu ? 'active' : ''"
            @click="toggleMenu = !toggleMenu"
          >
            <div class="burger__line"></div>
            <div class="burger__line"></div>
            <div class="burger__line"></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="header-link-container"
      :class="toggleMenu ? 'active' : ''"
      @click="toggleMenu = false"
    >
      <NuxtLink :to="LocalizePath('/')">Home</NuxtLink>
      <NuxtLink :to="LocalizePath('/gallerie')">Gallerie</NuxtLink>
      <NuxtLink :to="LocalizePath('/#stripclub')">Der Stripclub</NuxtLink>
      <NuxtLink :to="LocalizePath('/#oeffnungszeiten')">Öffnungszeiten</NuxtLink>
      <NuxtLink :to="LocalizePath('/#faqs')">FAQ's</NuxtLink>
      <NuxtLink :to="LocalizePath('/kontakt')">Jobs</NuxtLink>
      <NuxtLink :to="LocalizePath('/kontakt')">Kontakt</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const toggleMenu = ref(false);

const closeMenu = () => {
  toggleMenu.value = false;
};

const LocalizePath = (path) => {
  return `/${locale.value}${path}`;
};
</script>

<style>
.header {
  height: 80px;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: var(--background-dark);
}

.header__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 15px 0;
}

.burger__container {
  display: flex;
  flex-direction: column;
}

.burger__line {
  width: 28px;
  height: 3px;
  border-radius: 5px;
  background-color: var(--red);
  margin: 3px 0;
}

.header-link-container {
  background-color: var(--red);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 99;
}

.header-link-container a {
  color: var(--background-dark);
  font-size: 30px;
  margin: 15px 0;
  text-decoration: none;
}

/* make links fade in one by one */
.header-link-container a:nth-child(1) {
  animation: fadeIn 0.3s ease-in-out 0.3s forwards;
}

.header-link-container a:nth-child(2) {
  animation: fadeIn 0.3s ease-in-out 0.4s forwards;
}

.header-link-container a:nth-child(3) {
  animation: fadeIn 0.3s ease-in-out 0.5s forwards;
}

.header-link-container a:nth-child(4) {
  animation: fadeIn 0.3s ease-in-out 0.6s forwards;
}

.header-link-container a:nth-child(5) {
  animation: fadeIn 0.3s ease-in-out 0.7s forwards;
}

.header-link-container a:nth-child(6) {
  animation: fadeIn 0.3s ease-in-out 0.8s forwards;
}

.header-link-container a:nth-child(7) {
  animation: fadeIn 0.3s ease-in-out 0.9s forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.header-link-container a:hover {
  color: var(--background-light);
}

.header-link-container.active {
  transform: translateY(0);
}

.burger__line {
  transition: 0.3s ease-in-out;
}

.burger__container.active .burger__line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
  transition: 0.3s ease-in-out;
}

.burger__container.active .burger__line:nth-child(2) {
  width: 0px;
  opacity: 0;
  transition: 0.3s ease-in-out;
}

.burger__container.active .burger__line:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
  transition: 0.3s ease-in-out;
}
</style>