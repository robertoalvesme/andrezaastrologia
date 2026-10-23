// https://nuxt.com/docs/api/configuration/nuxt-config
// Site da Andreza Astrologia (00028): layout proprio, com as paginas de loja do
// @ocahub/kit - prateleira em /loja, produto, carrinho, conta, checkout e mapa astral.
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@ocahub/kit'],
  css: ['~/assets/css/main.css', '~/assets/css/loja.css'],

  rhfactor: {
    storeId: process.env.RHFACTOR_STORE_ID ?? '',
    apiBase: process.env.RHFACTOR_API_BASE ?? 'http://localhost:8085',
    iamBase: process.env.RHFACTOR_IAM_BASE ?? 'http://localhost:8080',
    contractsBase: process.env.RHFACTOR_CONTRACTS_BASE ?? 'http://localhost:8082',
    paymentsBase: process.env.RHFACTOR_PAYMENTS_BASE ?? 'http://localhost:8089',
    // A home e do site; a prateleira do kit fica na Loja.
    pages: { shelf: '/loja' }
  },

  app: {
    head: {
      title: 'Andreza Astrologia — Mapa astral, Astrologia e Tarot',
      htmlAttrs: { lang: 'pt-BR' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#FBF6EE' },
        {
          name: 'description',
          content: 'Andreza Astrologia — mapa astral digital, sessões de astrologia e de tarot, e a loja com produtos para o seu autoconhecimento.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap',
        },
      ],
    },
  },
})
