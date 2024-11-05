/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primaryColor": "#F87171",
        "secondaryColor" : "#fff",
        "darkMode":"rgb(17, 24, 39)",
        'custom-red': 'rgba(255, 0, 0, 0.5)',
        "gradient": "from-red-500 to-white", 
        pastelBlue: '#A3C1DA',
        pastelPink: '#F2A6B6',
        pastelYellow: '#FCEAA1',
        pastelGreen: '#B8E6B8',
        pastelPurple: '#D7B2E4',
        pastelOrange: '#FFB3A6',
        pastelRed: '#FF9F9F',
        pastelGray: '#D3D3D3',
      },
      backgroundImage: {
        'blue-purple': 'linear-gradient(to right, #007BFF, #6F42C1)',
        'red-yellow': 'linear-gradient(to right, #FF5733, #FFC107)',
        'pink-green': 'linear-gradient(to right, #D5006D, #28A745)',
        'blue-pink': 'linear-gradient(to right, rgba(163, 193, 218, 1), rgba(242, 166, 182, 0.5))',
        'yellow-green': 'linear-gradient(to right, #FCEAA1, #B8E6B8)',
        'purple-orange': 'linear-gradient(to right, #D7B2E4, #FFB3A6)',
      },
      fontSize:{
        13: "13px",
        14: "14px",
        16: "16px",
        20: "20px",
        26: "26px",
        24: "24px",
        32: "32px",
        36: "36px",
        48: "48px",
      },
      fontFamily:{
        montserrat:["Montserrat"],
      },
      margin: {
        '5p': '5%',
        '10p': '10%',
        '15p': '15%',
      },
    },
  },
  plugins: [],
}