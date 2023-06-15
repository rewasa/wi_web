/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontSize: {
        lg: "1.25rem",
      },
    },
    fontFamily: {
      sans: ["Questrial", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
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
