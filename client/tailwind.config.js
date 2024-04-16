/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    colors: {
      'oscuro0': '#003459',
      'oscuro1' : '#1B4965',
      'oscuro2' : '#62B6CB',
      'oscuro3' : '#5FA8D3',
      'claro1' : '#CAE9FF',
      'amarillo' : '#fdf0d5',
      'logoClaro' : '#60C2E5',
      'logoOscuro' : '#0F639F',
      'amarillo-tarjeta': '#ffc300',
      'rojo-tarjeta': '#d90429'
    },
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      minWidth:{
        goles:"25px"
      
      },
      screens: {
        mf: "1000px",
        break: "1050px",
        mini: "400px",
      },
      keyframes: {
        "slide-in": {
          "0%": { 
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
        "slide-out": {
          "100%": { 
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "0%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        }
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
        "slide-out": "slide-out 0.5s ease-out",
      },
    },
  },
  plugins: [],
}