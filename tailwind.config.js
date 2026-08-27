/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          forest: '#173330',
          cream: '#F9F1D2',
          orange: '#F99B32',
          orangeDeep: '#F17024',
          teal: '#2D878D',
          leaf: '#165646',
          leafLight: '#1b725e',
          ink: '#081325',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        display: ['var(--font-fredoka)', 'ui-rounded', 'sans-serif'],
        body: ['var(--font-karla)', 'ui-sans-serif', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
