/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        287: "287px",
        149: "149px",
        120: "120px",
        127: "127px",
        50: "50px",
        6: "6px",
        8: "14px",
        10: "10px",
        230: "230px",
      },
      height: {
        100: "100px",
        42: "42px",
        15: "15px",
        30: "30px",
        6: "6px",
        4: "10px",
        10: "10px",
        89: "89px",
      },
      lineHeight: {
        15: "15px",
        14: "14px",
        12: "12px",
      },

      colors: {
        "regal-blue": "#006FE0",
        "grad-one": "hsla(249, 74%, 61%, 1)",
        "grad-two": "hsla(249, 67%, 69%, 1)",
        borde: "hsla(40, 14%, 92%, 1)",
        yelloww: "hsla(43, 100%, 60%, 1)",
      },
      margin: {
        "5px": "5px",
        "53px": "53px",
        "20px": "20px",
        "16px": "16px",
        "12px": "12px",
        "14px": "14px",
        "8px": "8px",
        "85px": "85px",
        "11px": "11px",
      },
      fontSize: {
        ms: "14px",
        fs: "12px",
      },
    },
    screen: {
      sm: "390px",
    },
  },
  plugins: [],
};
