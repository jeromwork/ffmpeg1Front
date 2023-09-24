// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    modules: ['@nuxtjs/ionic'],
    ssr: false,
    css: [
        '@ionic/core/css/core.css',
        '@ionic/core/css/normalize.css',
        '@ionic/core/css/structure.css',
        '@ionic/core/css/typography.css',
        '@ionic/core/css/ionic.bundle.css',
    ]
})
