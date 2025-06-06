export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixelify: ['"Pixelify Sans"', 'sans-serif'],
        silkscreen: ['"Silkscreen"', 'sans-serif'],
      },
      colors: {
        'highlight-purple': '#8F87F1',
        'secondary-purple': '#C68EFD',
        'thrtiary-purple': '#E9A5F1',
        'background-pink': '#FED2E2',
      },
    },
  },
  plugins: [],
};