import tailwindClipPath from "tailwind-clip-path";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // important: "#root",
  darkMode: "selector",
  theme: {
    clipPath: {
      full: "polygon(0% 100 %, 0% 0 %, 100% 0 %, 100% 100 %)",
      left: "polygon(0% 100%, 0% 0%, 100% 0%, 80% 100%)",
      right: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
    },
    extend: {
      fontFamily: {
        title: "Sansation",
        page: "Roboto",
      },
      gridTemplateColumns: {
        14: "repeat(14, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
      },
      height: {
        // screen: "100dvh",
      },
      boxShadow: {
        von: "#1b1c1d 0 0 5px",
        "von-inset": "inset #1b1c1d 0 0 5px",
      },
      colors: {
        von: {
          darkGray: "#1b1c1d",
          lightGray: "#dedede",
          teal: "#16b2ab",
        },
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [tailwindClipPath],
};
