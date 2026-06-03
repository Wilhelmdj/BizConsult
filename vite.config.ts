import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  appType: "spa",
  plugins: [tailwindcss(), tsconfigPaths({ projects: ["./tsconfig.json"] }), react()],
  build: {
    outDir: "dist/client",
    emptyOutDir: true,
  },
});
