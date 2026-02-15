/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "system-ui", "sans-serif"],
        montserrat: ["Montserrat", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};
