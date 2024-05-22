/** @type {import('tailwindcss').Config} */
var defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans SC", "Noto Sans", "Inter"].concat(defaultTheme.fontFamily.sans),
        title: ["Familjen Grotesk", "Noto Sans SC", "Noto Sans"].concat(defaultTheme.fontFamily.sans),
      },
    },
  },
  plugins: [],
};
