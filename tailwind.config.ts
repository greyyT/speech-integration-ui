/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '40em',
      // => @media (min-width: 640px) { ... }

      md: '48em',
      // => @media (min-width: 768px) { ... }

      lg: '64em',
      // => @media (min-width: 1024px) { ... }

      ml: '70em',

      xl: '80em',
      // => @media (min-width: 1280px) { ... }

      '2xl': '90em',
      // => @media (min-width: 1440px) { ... }

      '3xl': '96em',
      // => @media (min-width: 1536px) { ... }
    },
    borderRadius: {
      none: '0',
      sm: '0.625rem',
      xl: '1.25rem',
      '3xl': '3.75rem',
      half: '50%',
    },
    extend: {
      colors: {
        primary: '#104E97',
        'main-bg': '#F7F7F7',
        'name-tag': '#95C6FF',
        'portrait-circle': '#267CE1',
        paper: '#5B5B5B',
        'aide-main': '#0D7DC2',
        'level-basic': '#005FFF',
        'level-intermediate': '#FF7A00',
        'level-advanced': '#FF0707',
        'level-specialization': '#2FB400',
        'student-job': '#B9B9B9',
        form: '#717171',
        'blog-description': '#B9B9B9',
      },
      spacing: {
        '7.5': '1.875rem',
        '12.5': '3.125rem',
        15: '3.75rem',
        '18.75': '4.6875rem',
        19: '4.75rem',
        22: '5.5rem',
        25: '6.25rem',
        50: '12.5rem',
        187: '46.75rem',
        360: '90rem',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        futura: ['Futura', 'sans-serif'],
        georgia: ['Georgia', 'serif'],
      },
      lineHeight: {
        text: '1.8rem',
        h1: '4.125rem',
        h3: '1.575rem',
      },
      fontSize: {
        h1: ['3.125rem', '4.125rem'],
        h2: ['1.25rem', '1.5rem'],
        h3: ['0.875rem', '1.575rem'],
        p2: ['1.125rem', '2.025rem'],
      },
    },
  },
  plugins: [],
};
