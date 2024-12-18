/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      boxShadow: {
        "left-bottom": "-3px 3px 4px rgba( 206, 206, 206 )",
        "left-top": "-3px -3px 4px rgba(206, 206, 206 )",
        "right-bottom": "3px 3px 4px rgba(206, 206, 206 )",
        "right-top": "3px -3px 4px rgba(206, 206, 206 )",
      },
      borderWidth: {
        none: "0px",
      },
    },
  },
};
