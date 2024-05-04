// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
import path from "path";
import fs from 'fs';
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose'
        }
      ]
    }
  },
  devtools: { enabled: false },
  alias: {"@": resolve(__dirname, '/')},
  css: ["~/assets/main.scss"],
  buildModules: ['@nuxtjs/pwa'],
  pwa: {
    manifest: {
      name: 'ZwiekszSwiadomosc',
      short_name: 'ZSwiadomosc',
      theme_color: '#4DBA87',
      useWebmanifestExtension: false,
      icons: [
        {
          src: '/pwa.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/pwa_large.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    }
  },
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'localhost+2-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'localhost+2.pem'))
    }
  }
})
