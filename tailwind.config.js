/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '0',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
      'print': { 'raw': 'print' },
    },
    colors: {
      'blueDark': '#157FB2',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'black-bg': '#242B2C',
      'black-decoration': '#3B4647',
      'blue': '#6EC9F2',
      'white-decoration': '#CECECE',
      'white-border': '#D9D9D9',
      
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'shadow-button-right': '16px 16px 16px 0px rgba(0, 0, 0, 0.25)',
        'shadow-button-left': '-16px 16px 16px 0px rgba(0, 0, 0, 0.25)',
        'shadow-image-left': '-32px 32px 32px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
