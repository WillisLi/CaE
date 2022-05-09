module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'webBG': "url('../src/assets/background.png')",
      },
      colors: {
        'light-main': '#0978b3',
      },
      animation: {
        slideUp: "slideUp 850ms forwards ease-out",
        slideLeft: "slideLeft 900ms forwards ease-in-out",
        floating: 'floating 3s ease-in-out infinite'
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
        },
        slideLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(10%);'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0);'
          }
        },
        floating: {
          '0%': { transform: 'translate(0,  0px)' },
          '50%': { transform: 'translate(0, 15px)' },
          '100%': { transform: 'translate(0, -0px)' }   
        }
      },
  },
  plugins: [],
}
}
