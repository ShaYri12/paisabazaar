/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
       'green-border': 'rgba(96, 187, 81, 0.2)',
      },
      boxShadow: {
        'custom-green': '0 4px 12px rgba(96, 187, 81, 0.5)',  
        'hover-blue': '0 4px 12px rgba(0, 112, 243, 0.2)',
      },
    },
  },
  plugins: [],
};
