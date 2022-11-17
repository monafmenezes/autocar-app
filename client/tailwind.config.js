/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#3374db',
      'blue-100': '#80a6ff',
      'white': '#FFFFFF',
      'gray-100': '#333',
      'gray-200': '#898989'
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans'],
      'inter': ['Inter', 'sans']
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    borderRadius: {
      DEFAULT: '4px',
    },
    extend: {},
  },
  plugins: [],
}
