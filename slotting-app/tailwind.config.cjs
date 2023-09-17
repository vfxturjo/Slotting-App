/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  files: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {},
  },

  plugins: [
    require("flowbite/plugin"),
    // require("tailwindcss-animate"), // tailwind easy animations with css
  ],
};

module.exports = config;
