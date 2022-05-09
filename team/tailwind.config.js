module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'top': '0 20px 45px -5px rgba(0, 0, 0, 0.3)',
        'cards': '0 10px 20px -5px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        'light-main': '#0978b3',
      },
      animation: {
        slideUp: "slideUp 850ms forwards ease-out",
        slideLeft: "slideLeft 900ms forwards ease-in-out",
      },
      keyframes: {
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(90%);'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0);'
          }
        },slideLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(10%);'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0);'
          }
        },
      }
    },
  },
  plugins: [],
}
