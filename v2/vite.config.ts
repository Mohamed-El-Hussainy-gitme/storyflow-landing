import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // For local development and custom domain deployments, keep base at root.
  // If you ever deploy under a sub-path (e.g. GitHub Project Pages), set this accordingly.
  base: "/",
});
