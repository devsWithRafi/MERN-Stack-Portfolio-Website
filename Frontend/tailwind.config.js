/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            font1: ['Poppins', 'sans-serif'],
            font2: ['Josefin Sans', 'sans-serif'],
            font3: ['Abel', 'sans-serif'],
        },
        extend: {
            colors: {
                green: '#77c642',
            },
        },
    },
    plugins: [],
};
