import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // 1. Tell ESLint to ignore the build output
  {
    ignores: [".next/**", "node_modules/**", "out/**"],
  },
  // 2. Load the Next.js config
  ...compat.extends("next/core-web-vitals"),
  // 3. Add this empty object to "reset" the configuration scope
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;