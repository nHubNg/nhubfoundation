/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textAsh: "#6A6B6B",
        orange: "#F26024",
        overlay: "rgba(0,0,0,0.3)",
        ash: "#515151",
        lightOrange: "rgba(242, 96, 36, 0.5)",
      },
    },
  },
  plugins: [],
};
