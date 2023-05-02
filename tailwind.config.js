/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textAsh: "#6A6B6B",
        orange: "#F26024",
        overlay: "rgba(0,0,0,0.3)",
        headerOverlay: "rgba(0, 0, 0, 0.37)",
        ash: "#515151",
        lightOrange: "rgba(242, 96, 36, 0.5)",
        purple: " rgba(151, 71, 255, 1)",
        lightgray: "rgba(0, 0, 0, 0.5);",
        veryLightGray: "rgba(255, 255, 255, 1)",
        lightShadow: "rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
