/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navBar": "#070707",
        "linear-escuro": "#181B2D",
        "background-tes": "#0F111B",
        "linear-mais-escuro": "#181B2D",
        "line-linear-azul": "#498CF1",
        "line-linear-rosa": "#EC2158",
        "line-linear-red":  "#EC2158",
        "line-linear-azul-1":  "#3B53A9",
        "saturation-azul-claro": "#4461C6",
        "saturation-azul-escuro": "#283563",
        "saturation-preto": "#02081A",
        "saturation-red": "#E82134",
        "saturation-green": "#44F26B",
        "lights-azul-400": "#657AC2",
        "lights-azul-300": "#90AAF7",
        "lights-red-claro": "#F04F5F",
        "lights-green": "#A5F7B7",
        "bg-azul-claro": "#181B2D",
        "bg-azul-escuro": "#11141F",
      },
      fontSize: {
        "display-large": '4.5rem',
        "display-medium": '3.6rem',
        "display-small": '3rem',
      },

      lineHeight: {
        "custom-leading": '5rem'
      },

      fontFamily: {
        'russo-one': ['Russo One', 'sans-serif']
      },
      
      height: {
        'altura-person': '90%',
      },

      width: {
        "largura-person": '90%',
      }
    },
    screens: {
      // min-width
      "full": '1920px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '1440': "1440px",
      '2xl': '1536px',
    }
  },

  plugins: [],
}

