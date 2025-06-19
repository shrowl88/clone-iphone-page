/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // pastikan semua JSX/TSX tercover
  ],
  theme: {
    extend: {
      colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      },
      screens: {
        xs: "480px", // tambahan ukuran kecil untuk hp kecil
        "3xl": "1600px", // tambahan layar sangat besar
      },
      spacing: {
        nav: "calc(100vh - 60px)",
      },
      fontSize: {
        "2xs": "0.625rem", // 10px
      },
    },
  },
  plugins: [],
};
