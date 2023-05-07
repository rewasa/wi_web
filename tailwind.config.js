/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Questrial", "ui-sans-serif", "system-ui"],
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "1.363rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
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
