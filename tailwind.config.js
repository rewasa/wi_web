/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontSize: {
        lg: "1.25rem",
      },
      margin: {
        d1: "1%",
        d2: "2%",
        d3: "3%",
        d4: "4%",
        d5: "5%",
        d6: "6%",
        d7: "7%",
        d8: "8%",
        d9: "9%",
        d10: "10%",
      },
    },
    fontFamily: {
      sans: ["Questrial", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light",
    themes: [
      {
        light: {
          "base-content": "#222",
          primary: "#3E3D3D",
          "primary-content": "#FFFFFF",
          secondary: "#5C5C5B",
          "secondary-focus": "#AD9A81",
        },
      },
    ],
  },
};
