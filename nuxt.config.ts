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
  app: {
    head: {
      title: 'shots.arw',
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'shortcut icon', href: '/misc/favicon/favicon.ico', type: 'image/x-icon' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/misc/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/misc/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/misc/favicon/favicon-16x16.png' },
        { rel: 'manifest', href: '/misc/favicon/site.webmanifest' },
        { rel: 'mask-icon', href: '/misc/favicon/safari-pinned-tab.svg', color: '#3ec4d6' },
        { rel: 'shortcut icon', href: '/misc/favicon/favicon.ico' },
        { rel: 'stylesheet', href: '/misc/fonts/FontAwsome/css/all.css' },
        { rel: 'stylesheet', href: '/misc/fonts/fonts.css' },
        { rel: 'stylesheet', href: '/misc/index.css' },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'msapplication-TileColor', content: '#f9f9f9' },
        { name: 'msapplication-config', content: '/misc/favicon/browserconfig.xml' },
        { name: 'theme-color', content: '#f9f9f9' },
      ],
    },
  }
});



