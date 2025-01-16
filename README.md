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