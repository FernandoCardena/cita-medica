/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Yeseva One', 'sans-serif'],
        title: ['Work Sans', 'sans-serif'],
        caption: ['Work Sans', 'sans-serif'],
        body: ['Work Sans', 'sans-serif'],
        button: ['Work Sans', 'sans-serif'],
      },
      fontSize: {
        'display-1': '3rem', // 48px
        'display-2': '2rem', // 32px
        'title': '1.625rem', // 26px
        'caption': '1.125rem', // 18px
        'body': '1rem', // 16px
        'body-2': '1.125rem', // 18px
        'button': '1rem', // 16px
        'small': '0.875rem', // 14px
      },
      colors: {
        'azul': '#0060AD',
        'azul-oscuro': '#1F2B6C',
        'celeste': '#159EEC',
        'celeste-claro': '#BFD2F8',
        'verde': '#01A5A6',
      },
    },
  },
  plugins: [],
};
