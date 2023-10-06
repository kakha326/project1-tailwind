/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
   
    screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
    xl1: '1100px',
    } ,
    extend: {
      // backgroundImage:{
      //   'divImg' : "url('img/img 20.png')",
      // },
  colors: {
    mainBgColor: '#F7F6F0',
  }
    },
  },
  plugins: [],
}

