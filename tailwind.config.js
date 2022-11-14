/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    minHeight: {
      '80' : '80vh',
    },
    extend: {
      width: {
        '128': '40rem',
      },
      height: {
        '128': '40rem',
      }
    },
  },
  plugins: [],
}