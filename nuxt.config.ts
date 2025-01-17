// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    app: {
        head: {
            title: 'Sakai Nuxt',
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.cdnfonts.com/css/lato'
                }
            ]
        }
    },
    modules: ['@primevue/nuxt-module'],
    primevue: {
        options: {
            theme: {
                preset: Aura,
                options: {
                    darkModeSelector: '.app-dark'
                }
            }
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    css: ['~/assets/tailwind.css', '~/assets/styles.scss'],
    vite: {
        optimizeDeps: {
            noDiscovery: true
            // include: ['quill']
        }
    }
});
