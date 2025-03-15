import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Ensure "@" points to the "src" directory
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables.scss" as *;`,
      },
    },
  },
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    mimeTypes: {
      ".woff": "font/woff",
      ".woff2": "font/woff2",
    },
  },
});
