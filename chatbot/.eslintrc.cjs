module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "@electron-toolkit",
    // "@electron-toolkit/eslint-config-prettier",
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    ".eslint.json",
    "./src/randomExports/*",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/prop-types": "off",
    "react/jsx-uses-react": "warn",
    "react/jsx-uses-vars": "warn",
    "no-unused-vars": [
      "warn",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
  },
};
