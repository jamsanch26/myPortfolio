import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://jamsanch26.github.io/myPortfolio',
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
