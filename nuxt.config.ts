// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { 
    enabled: true
  },
  typescript: {
    strict: true,
  },
  modules: ['@nuxtjs/strapi'],
  plugins: ['./plugins/markdown.ts'],
  strapi: {
    url: process.env.STRAPI_URL || 'https://api.shots-arw.de'
  },
});
