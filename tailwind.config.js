/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'customDesaturatedCyan': 'hsl(180, 29%, 50%)',
        'customLightCyan': 'hsl(180, 52%, 96%)',
        'customVeryLightCyan': 'hsl(180, 31%, 95%)',
        'customDarkCyan': 'hsl(180, 8%, 52%)',
        'customVeryDarkCyan': 'hsl(180, 14%, 20%)',
      },
      backgroundImage: {
        'desktop': "url('./assets/bg-header-desktop.svg')",
        'mobile': "url('./assets/bg-header-mobile.svg')",
      }
    },
  },
  plugins: [],
}