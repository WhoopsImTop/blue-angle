export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'de',
  locales: [
    {
      code: 'de',
      iso: 'de-DE',
      name: 'Deutsch',
    },
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
    },
    {
      code: 'fr',
      iso: 'fr-FR',
      name: 'Français',
    },
  ],
  messages: {
    en: {
      welcome: 'Welcome'
    },
    fr: {
      welcome: 'Bienvenue'
    },
    de: {
      welcome: 'Willkommen'
    },
  },
  vueI18n: {
    fallbackLocale: 'de',
  },
  vueI18nLoader: true,
}))
