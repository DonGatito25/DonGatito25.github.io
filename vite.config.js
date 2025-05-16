import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './', // Use root path for user sites 
  build: { outDir: 'dist', assetsDir: 'assets', rollupOptions: { output: { manualChunks: undefined, entryFileNames: 'assets/[name].[hash].js', chunkFileNames: 'assets/[name].[hash].js', assetFileNames: 'assets/[name].[hash].[ext]' } }}
})
