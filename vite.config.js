import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
       // IMPORTANT: must match your repo name
  plugins: [react(),tailwindcss(),]

})
