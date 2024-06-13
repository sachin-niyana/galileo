/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "rich-black": "#010101",
        orange: "#EB484C",
        grey: "#DFDEDE",
        "light-grey": "#f7f7f7",
        "light-white": "#FEFEFE",
        red: "#96151D",
      },
      fontFamily: {
        Inter: "Inter",
        Poppins: "Poppins",
        OpenSansHebrew: ["Open Sans Hebrew", "sans-serif"],
      },
    },
  },
  plugins: [],
};
