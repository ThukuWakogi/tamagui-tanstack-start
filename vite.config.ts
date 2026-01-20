import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import { fileURLToPath, URL } from "url";
import { tamaguiPlugin } from "@tamagui/vite-plugin";

import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";
import { BatchedBridge } from "react-native/types_generated/Libraries/ReactPrivate/ReactNativePrivateInterface";
import config from "@/tamagui.config";
import { config } from "process";

const config = defineConfig({
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  plugins: [
    devtools(),
    nitro(),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact({
      babel: {
        plugins: [
          [
            "@tamagui/babel-plugin",
            {
              components: ["tamagui"],
              config: "./tamagui.config.ts",
              importsWhitelist: ["constants.js", "colors.js"],
              logTimings: true,
              disableExtraction: process.env.NODE_ENV === "development",
            },
          ],
        ],
      },
    }),
    tamaguiPlugin({
      optimize: true,
      components: ["tamagui"],
      config: "src/tamagui.config.ts",
    }),
  ],
});

export default config;
