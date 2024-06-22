/* eslint-disable no-undef */
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    server: {
        hmr: {
            overlay: false,
        },
    },
    plugins: [react()],
    resolve: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@shared': path.resolve(__dirname, 'src/shared'),
    },
});