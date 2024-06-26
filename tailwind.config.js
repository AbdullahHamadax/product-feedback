/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "background-color": "var(--background-color)",
        "sidebar-color": "var(--sidebar-color)",
      },
      fontFamily: {
        josta: "Josta",
      },
    },
  },
  plugins: [],
};
