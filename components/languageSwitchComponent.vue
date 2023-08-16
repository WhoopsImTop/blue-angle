<template>
  <div
    class="language-switch"
    :class="isActive ? 'active' : ''"
    @click="isActive = !isActive"
  >
    <div class="language-switch__container">
      <div class="language-switch__current">
        <img
          :src="
            languages.find(
              (language) => language.language_code === currentLanguage
            ).language_image
          "
          :alt="
            languages.find(
              (language) => language.language_code === currentLanguage
            ).language_name
          "
          :title="
            languages.find(
              (language) => language.language_code === currentLanguage
            ).language_name
          "
        />
      </div>
      <div class="language-switch__list">
        <NuxtLink
          v-for="language in languages"
          :key="language.language_code"
          class="language-switch__item"
          :to="switchLocale(language.language_code)"
          @click="currentLanguage = language.language_code"
        >
          <img
            :src="language.language_image"
            :alt="language.language_name"
            :title="language.language_name"
          />
          <p>{{ language.language_name }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLanguage: "de",
      isActive: false,
      languages: [
        {
          language_code: "de",
          language_name: "Deutsch",
          language_image: "/languages/de.svg",
        },
        {
          language_code: "en",
          language_name: "English",
          language_image: "/languages/en.svg",
        },
        {
          language_code: "fr",
          language_name: "Français",
          language_image: "/languages/fr.svg",
        },
      ],
    };
  },
  methods: {
    switchLocale(language) {
      return this.switchLocalePath(language);
    },
  },
  created() {
    this.currentLanguage = this.$i18n.locale;
  },
};
</script>

<style>
.language-switch {
  position: relative;
  cursor: pointer;
}

.language-switch__container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.language-switch__current {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid var(--red);
  margin-right: 10px;
  overflow: hidden;
}

.language-switch__container img {
  height: 100%;
}

.language-switch__list {
  position: absolute;
  top: 120%;
  left: 0;
  display: none;
}

.language-switch__item {
  display: flex;
  align-items: center;
  padding: 4px 20px;
  background-color: var(--red);
  text-decoration: none;
  color: var(--red-light)
}

.language-switch__item:hover {
  background-color: var(--red-hover);
}

.language-switch__item:first-child {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.language-switch__item:last-child {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.language-switch.active .language-switch__list {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.language-switch__item {
  display: inline-flex;
}

.language-switch__list p {
  margin-left: 10px;
}

.language-switch__list img {
  height: 20px;
}
</style>