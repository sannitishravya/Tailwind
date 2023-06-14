/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        '128': '287px',
        '149':'149px',
        '120':'120px',
        '127':'127px',
        '50':'50px',
        '6':'6px',
        '8':'8px',


      },
      height:{
        '128':'100px',
        '42':'42px',
        '15':'15px',
        '30':'30px',
        '6':'6px',
        '4':'4px',
      },
      colors: {
        "regal-blue": "#006FE0",
        "grad-one":"hsla(249, 74%, 61%, 1)",
        "grad-two":"hsla(249, 67%, 69%, 1)",
        "borde":"hsla(40, 14%, 92%, 1)",
        "yelloww":"hsla(43, 100%, 60%, 1)"
      },
      fontSize: {
        ms: '14px',
        fs:'12px',
      },  
    },
  },
  plugins: [],
};
