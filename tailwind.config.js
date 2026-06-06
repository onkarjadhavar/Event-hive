export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glass: '0 10px 45px rgba(12, 16, 33, 0.12)',
      },
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d8e7ff',
          200: '#b3d1ff',
          300: '#84b4ff',
          400: '#5692ff',
          500: '#3267ff',
          600: '#274fcc',
          700: '#1f3f9f',
          800: '#1a377c',
          900: '#162e62'
        }
      }
    }
  },
  plugins: [],
};
