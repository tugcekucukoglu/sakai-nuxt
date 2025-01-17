# Sakai-Nuxt

1) ```bash
    npx nuxi@latest init sakai-nuxt
```

2) ```bash
    npm install primevue @primevue/themes tailwindcss-primeui primeicons
    npm install --save-dev @primevue/nuxt-module
```

3) Add to nuxt.config.js
```javascript
    modules: [
        '@primevue/nuxt-module',
    ]
```

4) Install Tailwind CSS with Nuxt: https://tailwindcss.com/docs/guides/nuxtjs

5) Add to tailwind.config.js
```javascript
    plugins: [require('tailwindcss-primeui')]
```

5) Create assets/tailwind.css
```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

6) Add to nuxt.config.js
```javascript
    css: ['~/assets/tailwind.css']
```

7) Add theme to nuxt.config.js
```javascript
    import Aura from '@primevue/themes/aura';

    primevue: {
        options: {
            theme: {
                preset: Aura,
                options: {
                    darkModeSelector: '.app-dark'
                }
            }
        }
    }
```

8) Copy src/assets file and paste them to assets folder
```javascript
    css: ['~/assets/styles.scss']
```

9) Change app.vue
```javascript
    <template>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </template>
```

10) Create layouts/default.vue and paste this code and replace router-view with NuxtPage in AppLayout.vue
```javascript
    <script setup>
import AppLayout from './AppLayout.vue';
</script>

<template>
    <AppLayout></AppLayout>
</template>

```

11) Create layouts folder and copy src/layout folder and paste it to layouts folder and create composables/use-layout.js and replca it with composables/layout.js and then remove these lines
```javascript
    import { useLayout } from '@/layout/composables/layout';
```

12) Copy public/demo folder and paste it to public folder
Copy src/components folder and paste it to components folder
Copy src/service folder and paste it to service folder
Copy src/views/uikit folder and paste it to pages/uikit folder
Copy src/views/pages folder and paste it to pages folder