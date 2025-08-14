module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './ConfettiEngine.js'
  ],
  theme: {
    extend: {
      keyframes: {
        huepulse: { '0%, 100%': { filter: 'hue-rotate(0deg)' }, '50%': { filter: 'hue-rotate(45deg)' } },
        floaty: { '0%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-10px)' }, '100%': { transform: 'translateY(0px)' } },
        shimmer: { '0%': { backgroundPosition: '0% 50%' }, '100%': { backgroundPosition: '100% 50%' } }
      },
      animation: {
        huepulse: 'huepulse 6s ease-in-out infinite',
        floaty: 'floaty 4s ease-in-out infinite',
        shimmer: 'shimmer 12s linear infinite'
      }
    }
  },
  plugins: [],
};
