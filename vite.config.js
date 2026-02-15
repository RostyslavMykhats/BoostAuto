import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Якщо ваш репозиторій називається не "BoostAuto", змініть назву тут:
const REPO_NAME = 'BoostAuto';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Для GitHub Pages потрібен base з назвою репозиторію
  base: process.env.NODE_ENV === 'production' ? `/${REPO_NAME}/` : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
