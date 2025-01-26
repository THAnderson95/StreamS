import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  server: {
    proxy: {
      "/api": {
        target: "https://graph.facebook.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/platform/profilepic": {
        target: "https://platform-lookaside.fbsbx.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/platform\/profilepic/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});