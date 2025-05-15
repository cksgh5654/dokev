import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      "@header-img": path.resolve(__dirname, "./src/assets/images/header"),
      "@gallery-img": path.resolve(
        __dirname,
        "./src/assets/images/gallery-section-img"
      ),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
