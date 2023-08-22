/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        bg1: "url('/public/images/courierServices.webp')",
        bg2: "url('/public/images/register now 1.webp')",
        bg3: "url('/public/images/delivery man.webp')"
      },
      colors: {
        antrakBlue: "#002E63",
        antrakLogin: "#FF9839",
        antrakWhite: "#fff",
        formColor: "rgba(0, 0, 0, 0.38)"
      },
      fontFamily: {
        ubuntu: 'ubuntu'
      },
    },
  },
  plugins: [],
}