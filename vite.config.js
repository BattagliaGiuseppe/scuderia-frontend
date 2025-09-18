import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',  // la root rimane la cartella principale
  build: {
    outDir: 'dist',
  },
})
