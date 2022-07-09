import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  server: {
    proxy: {
      "/games_api": {
        target: "https://api.igdb.com/v4",
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace(/^\/games_api/, ""),
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  build: {
outDir: "./docs"
  },
});
