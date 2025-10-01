import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import viteReact from "@vitejs/plugin-react";
import path from "path";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  server: {
    port: 9999,
  },
  plugins: [
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tanstackStart({ customViteReactPlugin: true }),
    viteReact(),
  ],
  resolve: {
    alias: isProd
      ? {} // use npm package in production
      : {
          "@reactforums/core": path.resolve(
            __dirname,
            "../../packages/core/src"
          ),
          "@reactforums/common": path.resolve(__dirname, "../common"),
        },
  },
});
