/** @type {import('tailwindcss').Config} */
// Paleta tirada das fotos da Andreza: o coral e o vinho dos vestidos e do batom,
// a lavanda das saias, o dourado do tabuleiro e dos brincos, o marfim das
// cortinas iluminadas e a noite do vestido com as fases da lua.
export default {
  theme: {
    extend: {
      colors: {
        ivory: { DEFAULT: '#FBF6EE', deep: '#F4EADC' },
        coral: { DEFAULT: '#C2471F', dark: '#A23A18', light: '#F4B79C', soft: '#FBE3D6' },
        wine: { DEFAULT: '#6E2433', dark: '#4E1824' },
        lavender: { DEFAULT: '#B49AD8', dark: '#7D5FAE', light: '#ECE4F7' },
        gold: { DEFAULT: '#C89B4C', dark: '#9C7533', light: '#EBD7A8' },
        night: { DEFAULT: '#221B29', soft: '#3A3043' },
        ink: { DEFAULT: '#2B2226', soft: '#5E5155' },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: { container: '1200px' },
      borderRadius: { arch: '999px 999px 24px 24px' },
    },
  },
  plugins: [],
}
