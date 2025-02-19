import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Это позволяет подключиться с других устройств в сети
    port: 5050
  },
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  build: {
    outDir: "dist"
  },
  base: "/"
});
