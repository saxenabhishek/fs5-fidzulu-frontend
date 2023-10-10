/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#111827",
      },
    },
  },
  plugins: [require("daisyui")],
};