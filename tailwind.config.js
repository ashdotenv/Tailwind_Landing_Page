module.exports = {
  content: [
    "./public/**/*.html", // Include all HTML files in the public folder
    "./src/**/*.{js,jsx,ts,tsx}", // Include JavaScript/TypeScript files in the src folder
  ],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
};
