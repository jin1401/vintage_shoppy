/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ad8b73", // 주요 색상
        secondary: "#ad9873", // 보조 색상
        accent: "#a76f75", // 액센트 색상
        primary_text: "#fce8db", // 주요 글자 색상
        secondary_text: "#fcf0db",
        accent_text: "#f3d4d7",
      },
    },
  },
  plugins: [],
};
