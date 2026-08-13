import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "c24_ui_loans_for_car",
            filename: "remoteEntry.js",
            exposes: {
                "./LoansForCarApp": "./src/LoansForCarApp",
            },
            shared: {
                react: {
                    singleton: true,
                },
                "react/": {
                    singleton: true,
                },
                "react-dom": {
                    singleton: true,
                },
                "react-dom/": {
                    singleton: true,
                },
                "react-router-dom": {
                    singleton: true,
                },
            },
        }),
    ],
    server: {
        port: 3004,
        origin: "http://localhost:3004",
    },
    preview: {
        port: 3004,
    },
    build: {
        target: "chrome89",
    },
});
