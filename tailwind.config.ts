import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       moderateCyan: "hsl(176, 50%, 47%)",
       darkCyan: "hsl(176, 72%, 28%)",
       black: "hsl(0, 0%, 0%)",
       darkGray: "hsl(0, 0%, 48%)",
      },
      fontFamily: {
        commissioner:['var(--font-commissioner)', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
