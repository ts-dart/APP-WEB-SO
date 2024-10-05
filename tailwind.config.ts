import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'defaultBackgroundColor': '#0A0A0A',
    },
    extend: {
      body: {
        backgroundColor: '#0A0A0A',
      },
    },
  },
  plugins: [],
};
export default config;
