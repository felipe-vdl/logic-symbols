/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: {
          1: "#161616",
          2: "#282828",
          3: "#323232",
          4: "#333333",
        },
        light: {
          1: "#FAFAFA",
          2: "#D2D2D2",
          3: "#C3C3C3",
          4: "#7d7d7d",
        },
        accent: "#346899",
      },
      backgroundImage: {
        "radial": "radial-gradient(circle, var(--tw-gradient-stops));"
      }
    },
  },
  plugins: [],
};
