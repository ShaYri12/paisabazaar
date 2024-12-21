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
        greenish: "#19b24d",
        background: "var(--background)",
        "green-border": "rgba(96, 187, 81, 0.2)",
      },
      boxShadow: {
        "custom-green": "0px 8px 10px rgba(96, 187, 81, 0.3)",
        "hover-blue": "0px 8px 10px rgba(0, 112, 243, 0.1)",
      },
    },
  },
  plugins: [],
};
