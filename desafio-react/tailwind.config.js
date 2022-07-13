/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundImage: {
        "hero-bg": "url('./src/assets/background.jpg')",
      },
      fontFamily: {
        Barlow: "Barlow Condensed",
        Bellefair: "Bellefair",
      },
    },
  },
  plugins: [],
}
