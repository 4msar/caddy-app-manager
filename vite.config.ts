import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    css: {
        postcss: {
            plugins: [tailwind(), autoprefixer()],
        },
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
