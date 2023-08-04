module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#3F4FE1',
        gray: '#444444',
      },
      animation: {
        fill: 'fill 4s linear infinite',
      },
      gradientColorStops: (theme) => ({
        'primary-start': '#3F4FE1',
        'primary-end': '#7E8FFA',
      }),
      fontFamily: {
        EB: ['f_eb', 'sans-serif'],
        L: ['f_l', 'sans-serif'],
        R: ['f_r', 'sans-serif'],
        B: ['f_b', 'sans-serif'],
      },
    },
    keyframes: {
      fill: {
        '0%': { width: '0%' },
        '100%': { width: '100%' },
      },
    },
  },
  variants: {},
  plugins: [],
};
