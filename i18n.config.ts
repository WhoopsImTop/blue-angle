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
    de: {
      welcome: 'Willkommen'
    },
    en: {
      welcome: 'Welcome'
    },
    fr: {
      welcome: 'Bienvenue'
    },
  },
  vueI18n: {
    fallbackLocale: 'de',
  },
  vueI18nLoader: true,
}))
