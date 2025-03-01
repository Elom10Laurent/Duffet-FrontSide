import path from "path"
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    cors: true,
    allowedHosts: ["duffet.onrender.com"],
    proxy: {
      "/api": {
        target: "https://duffet.onrender.com",
        changeOrigin: true,
        secure: false
      }
    }
  }
  
})
