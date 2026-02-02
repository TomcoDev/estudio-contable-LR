export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores extraídos de tu PDF de paleta oficial
        midnight: "#0D1126",
        gold: "#A68B5B",
        professionalGray: "#8C8C8C",
        pureWhite: "#FFFFFF",
      },
      fontFamily: {
        // Una fuente elegante para contabilidad
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}