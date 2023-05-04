/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      contact:
        'url("https://res.cloudinary.com/nhubnacademy/image/upload/v1683205246/Frame_1144_lmrctx.png")',
      courses:
        'url("https://res.cloudinary.com/nhubnacademy/image/upload/v1683206377/Frame_1144_2_r5xrts.png")',
      gallery:
        'url("https://res.cloudinary.com/nhubnacademy/image/upload/v1683206490/Frame_1144_4_uuxzyk.png")',
    },
    extend: {
      colors: {
        textAsh: "#6A6B6B",
        orange: "#F26024",

        lightBlue: "rgba(170, 170, 170, 0.12)",

        overlay: "rgba(0,0,0,0.2)",
        headerOverlay: "rgba(0, 0, 0, 0.37)",

        ash: "#515151",
        lightOrange: "rgba(242, 96, 36, 0.5)",
        purple: " rgba(151, 71, 255, 1)",
        lightgray: "rgba(0, 0, 0, 0.5);",
        veryLightGray: "rgba(255, 255, 255, 3)",
        lightShadow: "rgba(0, 0, 0, 0.25)",
        darkPurple: "#3B16A7",
      },
    },
  },
  plugins: [],
};
