/** @type {import('tailwindcss').Config} */
export default {
  important: '#root',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      exl: { max: "1535px" },

      xl: { max: "1279px" },

      lg: { max: "1024px" },

      md: { max: "767px" },
      
      sm: { max: "600px" },
      mb: { max: "425px" },
      yu: {max: "100px"}
    },
  },
  plugins: [],
}

