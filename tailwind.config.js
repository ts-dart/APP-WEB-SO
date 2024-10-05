/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'defaultBackgroundColor': '#0A0A0A',
      },
      body: {
        backgroundColor: '#0A0A0A'
      }
    },
  plugins: [],
  }
}

