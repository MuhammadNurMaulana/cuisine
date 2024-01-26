import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "./module/**/*.{js,ts,jsx,tsx,mdx}", "./common/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-restaurant": "url('https://firebasestorage.googleapis.com/v0/b/maulana-cuisine.appspot.com/o/cuisine%2Fhome-header.webp?alt=media&token=bb44d637-2fb4-41e6-be30-a8741ddbd195')",
      },
      colors: {
        primary: "#ED5700",
        secondary: "#4D592B",
      },
    },
  },
  plugins: [],
};
export default config;
