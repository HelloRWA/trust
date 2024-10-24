// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  extends: [process.env.WEB3_FULL_STACK_LAYER_SAAS_PATH || '@web3-fullstack/layer-saas'],
  imports: {
    dirs: ['server/utils/share-utils/*.ts'],
  },
  modules: [
    '@vue-macros/nuxt'
  ],
  macros: {
    reactivityTransform: true,
  },
  routeRules: {
    '/': { redirect: '/tf', prerender: false }
  },
})
