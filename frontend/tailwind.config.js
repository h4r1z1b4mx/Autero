/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",  // Include new Next.js app directory
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          amber: {
            700:"#ff4f00"
          }, slate:{
            100:"#ebe9df"
          }
        },
      },
    },
    plugins: [],
  };
  