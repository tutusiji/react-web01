import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `@use "@/styles/variables.scss" as *;`
      }
    },
    postcss: './postcss.config.js'
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
        manualChunks: {
          // React相关库
          'react-vendor': ['react', 'react-dom'],
          // 路由库
          'router': ['react-router-dom'],
          // Redux状态管理
          'redux': ['@reduxjs/toolkit', 'react-redux'],
          // 工具库
          'utils': ['axios', 'dayjs'],
          // Antd UI库
          'antd': ['antd', '@ant-design/icons']
        }
      }
    },
    // 设置chunk大小警告限制为200KB
    chunkSizeWarningLimit: 200
  }
})