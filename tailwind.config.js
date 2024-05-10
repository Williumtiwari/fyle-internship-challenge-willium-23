/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        "translate-ease": "translate-ease 3s infinite",
      },
      keyframes: {
        "translate-ease": {
          "0%": { transform: "translateY(-30px)" },
          "100%": { transform: "translateY(-30px)" },
          "50%": { transform: "translateY(30px)" },
        },
      },
    },
  },
  plugins: [],
};
