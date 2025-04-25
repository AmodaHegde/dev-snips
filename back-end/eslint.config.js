import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: { js, typescriptEslint: typescriptEslint },
    extends: ["js/recommended", "prettier"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  eslintConfigPrettier,
]);
