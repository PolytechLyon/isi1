import { defineConfig } from "vite";

export default defineConfig({
    base: process.env.CI ? '/isi1/' : undefined,
    build: {
        chunkSizeWarningLimit: 2048,
    },
});
