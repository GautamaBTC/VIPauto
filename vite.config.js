import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/vipauto/',  // <- имя вашего репозитория с косой чертой
  plugins: [vue()]
})
