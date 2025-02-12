import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"/Nikitha_Portfolio"
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    }
  }
})
