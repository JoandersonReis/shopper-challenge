/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins"],
    },
    extend: {
      backgroundImage: {
        welcome: "url('../public/assets/images/welcome-background.svg')",
      },
    },
  },
  plugins: [],
}
