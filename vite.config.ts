import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: 'Portfolio Hendrik Van Beersel',
        short_name: 'Portfolio HVB',
        description: 'My personal portfolio to show my skills and projects',
        theme_color: '#024b30',
        icons: [
          {
            src: '/icons/pwa-icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/pwa-icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ url }) => {
              return url.pathname.startsWith('/api')
            },
            handler: 'CacheFirst' as const,
            options: {
              cacheName: 'api-cache',
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
