import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  server: {
    headers: { "cache-control": "no-store" },
    hmr: true,
  },
  plugins: [react(), tailwindcss()],
});
