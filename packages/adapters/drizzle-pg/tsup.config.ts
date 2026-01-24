import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/schema/index.ts", "src/seeds/index.ts"], // entry point of core package
  format: ["cjs", "esm"], // CommonJS for WP, ESM for browser/mobile
  dts: true, // generate TypeScript declaration files
  sourcemap: true, // useful for debugging
  clean: true, // clean dist folder before build
  external: ["react", "react-dom"], // mark peer deps external
  minify: false, // optional, you can enable later
  splitting: false, // no code splitting for node
});
