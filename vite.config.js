import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: '/mobile-suggester-app/',
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
        },
      },
    },
});