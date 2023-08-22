/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      contact:
        'url("https://res.cloudinary.com/nhubnacademy/image/upload/v1683205246/Frame_1144_lmrctx.png")',
      courses:
        'url("https://res.cloudinary.com/nhubnacademy/image/upload/v1690461153/nHubFoundation/IMG-20230715-WA0037_wgiprc.jpg")',
      gallery:
        'url("https://res.cloudinary.com/nhubnacademy/image/upload/v1690462069/nHubFoundation/IMG-20230715-WA0106_wuhru8.jpg")',
      desktopContact:
        'url("https://res.cloudinary.com/nhubnacademy/image/upload/v1683559027/nHubFoundation/Frame_1144_6_cgw6on.png")',
      about:
        'url("https://res.cloudinary.com/nhubnacademy/image/upload/v1683646832/nHubFoundation/Frame_1048_nsmske.png")',
    },

    extend: {
      colors: {
        textAsh: "#6A6B6B",
        orange: "#F26024",
        brown: "#303030",
        lightBlue: "rgba(170, 170, 170, 0.12)",
        gray: " rgba(16, 24, 40, 1)",
        lightgrey: "rgba(71, 84, 103, 1)",
        overlay: "rgba(0,0,0,0.2)",
        cardOverlay: "rgba(0,0,0,0.6)",
        headerOverlay: "rgba(0, 0, 0, 0.37)",
        ash: "#515151",
        lightOrange: "rgba(242, 96, 36, 0.5)",
        purple: " rgba(151, 71, 255, 1)",
        lightgray: "rgba(0, 0, 0, 0.5);",
        veryLightGray: "rgba(255, 255, 255, 3)",
        lightShadow: "rgba(0, 0, 0, 0.25)",
        darkPurple: "#3B16A7",
        buttonPurple:"#7F56D9",
        red: "#FF0000",
        skyBlue: "#C6D4ED",
        blue: "#4DA0FF",
        darkBlue:"#101828",
        adminBlue: " rgba(25, 55, 91, 1)",
        adminGray: "rgba(236, 236, 236, 1)",
        adminBorder: "rgba(25, 55, 91, 0.3)",
        adminText: "rgba(0, 0, 0, 1) ",
        grey: "#D0D5DD",
        transparent: "rgba(255, 255, 255, 0.15)",
        btnGreen : "rgba(7, 215, 28, 1)",
        btnRed : "rgba(246, 27, 27, 1)",
        btnYellow : "rgba(234, 112, 0, 1)",
        btnMaroon : " rgba(234, 112, 0, 1)",


      },
    },
  },
  plugins: [],
};
