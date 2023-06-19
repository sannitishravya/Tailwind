/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "287p": "287px",
        "149p": "149px",
        "120p": "120px",
        "127p": "127px",
        "50p": "50px",
        "6p": "6px",
        "8p": "14px",
        "10p": "10px",
        "230p": "230px",
        "100p": "100px",
        "42p": "42px",
        "15p": "15px",
        "30p": "30px",
        "4p": "10px",
        "89p": "89px",
        "5p": "5px",
        "53p": "53px",
        "20p": "20px",
        "16p": "16px",
        "12p": "12px",
        "14p": "14px",
        "85p": "85px",
        "11p": "11px",
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
