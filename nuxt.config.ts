// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'service-worker',
  },
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Blue Angle | Nightclub, Striptease, Cabaret in Breisach',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://use.typekit.net/wik8vol.css' },
      ],
    },
  },
  css: ['@/assets/fonts.css', '@/assets/variables.css'],
  modules: ['@nuxtjs/i18n', '@nuxt/content'],

  i18n: {
    locales: ['de', 'en', 'fr'],
    defaultLocale: 'de',
  },
})
