import { readFileSync } from 'node:fs'

export default defineNuxtConfig({
  extends: ['docus'],
  css: ['~/assets/css/main.css'],
  site: {
    name: 'Cambo'
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'one-light',
            dark: 'one-dark-pro'
          },
          langs: [
            JSON.parse(
              readFileSync('./app/assets/kh.tmLanguage.json', 'utf-8')
            )
          ]
        }
      }
    }
  }
})
