import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    ViteImageOptimizer({
      jpeg: { quality: 70, mozjpeg: true },
      jpg: { quality: 70, mozjpeg: true },
      png: { quality: 75 },
      webp: { quality: 75 },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("framer-motion")) return "vendor-motion";
            if (id.includes("recharts") || id.includes("d3-"))
              return "vendor-charts";
            if (id.includes("@radix-ui")) return "vendor-radix";
            if (
              id.includes("react-dom") ||
              id.includes("react-router") ||
              id.includes("react/")
            )
              return "vendor-react";
            if (id.includes("@tanstack")) return "vendor-query";
            if (id.includes("lenis")) return "vendor-lenis";
          }
        },
      },
    },
  },
}));
