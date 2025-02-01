/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        system: {
          purple: "#7e47be",
          red: "#fe393c",
          green: "#a1e633",
          pink: "#ffd7ef",
        },
      },
    },
  },
  plugins: [],
};
