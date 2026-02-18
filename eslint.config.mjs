
import { dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const nextConfig = require("eslint-config-next/core-web-vitals");

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = [
    ...nextConfig,
    {
        ignores: [".next/**", "node_modules/**", "out/**", "build/**", "dist/**"],
        rules: {
            "@next/next/no-img-element": "off"
        }
    }
];

export default eslintConfig;
