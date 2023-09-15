import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/proxy": {
        target: "https://www.emsifa.com/",
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: path => path.replace(/^\/proxy/, '')
      },
    },
  },
})
