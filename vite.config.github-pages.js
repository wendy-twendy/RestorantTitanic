import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// GitHub repository name - replace this with your actual repository name
const repoName = 'restaurant-titanic';

export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages
  base: `/${repoName}/`,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
  // Define environment variables for production build
  define: {
    // Flag to indicate this is a static build for GitHub Pages
    'import.meta.env.VITE_STATIC_BUILD': JSON.stringify(true),
  }
});