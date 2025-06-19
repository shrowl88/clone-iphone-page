import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/clone-iphone-page/", // WAJIB! Sesuai nama repo GitHub kamu
  plugins: [react()],
});
