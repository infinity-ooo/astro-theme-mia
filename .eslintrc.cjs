module.exports = {
  extends: ["plugin:astro/recommended"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      env: {
        node: true,
        "astro/astro": true,
        es2020: true,
      },
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
    {
      files: ["**/*.js", "**/*.ts"],
      env: {
        browser: true,
        es2020: true,
      },
      parser: "@typescript-eslint/parser",
      rules: {
        "no-unused-vars": "error",
        "prettier/prettier": "off",
      },
    },
  ],
};
