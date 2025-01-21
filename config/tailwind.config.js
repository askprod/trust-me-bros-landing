const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'custom-pastel-blue': '#BDDCE0',
        'custom-bordeaux': '#892245',
        'custom-red': '#FF4367'
      },
      animation: {
        'tilt-slow': 'tilt 2s ease-in-out infinite',
      },
      keyframes: {
        tilt: {
          '0%, 100%': {
            transform: 'rotate(0deg)', // Starting point (no tilt)
          },
          '50%': {
            transform: 'rotate(10deg)', // Maximum tilt at 50% of animation
          },
        },
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/container-queries'),
  ]
}
