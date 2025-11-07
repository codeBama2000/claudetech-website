import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Changé de "./" à "/"
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    assetsDir: 'assets',
    copyPublicDir: true,
    rollupOptions: {
      onwarn: (warning, warn) => {
        if (warning.code === 'THIS_IS_UNDEFINED') return
        warn(warning)
      },
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'icons-vendor': ['lucide-react', 'react-icons'],
          'analytics-vendor': ['react-ga4', '@emailjs/browser'],
          'helmet-vendor': ['react-helmet-async']
        },
        chunkSizeWarningLimit: 1000
      }
    },
    // Optimisations de performance
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})