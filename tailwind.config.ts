import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors: {
      secondary: "#f5741c",
      logotipo: "#DC262A",
      logotipodos: "#757575",
      darkBg: "#131424"
     },
     backgroundImage:{
      "gradient-cover":
        "linear-gradient(90.21deg, rgba(170,54,124,0.5)-5.91%,rgba(74,47,189,0.5))"

      
     },
    },
  },
  plugins: [],
};
export default config;
