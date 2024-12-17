/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        blink: 'blink 1s infinite', // Tambahkan animasi berkedip
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 }, // Opasitas akan berubah menjadi transparan
        },
      }
    },
  },
  plugins: [],
}
