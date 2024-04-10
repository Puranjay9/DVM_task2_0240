/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'logo-txt': '#9FAEB5',
        'web-blue': '#00358d',
        'txt-clr': '#00112e',
      },
      margin: {
        '145px': '145px',
      },

    },
  },
  plugins: [],
}

