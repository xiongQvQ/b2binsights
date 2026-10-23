import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// 多页应用:每个 HTML 一个入口,build 后由 scripts/prerender.tsx 注入服务端可读的 HTML。
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        home: path.resolve(__dirname, 'index.html'),
        aiConsulting: path.resolve(__dirname, 'ai-consulting/index.html'),
        fde: path.resolve(__dirname, 'fde/index.html'),
        tradeLeads: path.resolve(__dirname, 'trade-leads/index.html'),
        about: path.resolve(__dirname, 'about/index.html'),
      },
    },
  },
})
