/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        geist: ['"Geist VF"', "sans-serif"],
        "base-neue-black": ['"Base Neue Black"', "sans-serif"],
        "base-neue-bold": ['"Base Neue Bold"', "sans-serif"],
        "base-neue-expanded-black": [
          '"Base Neue Expanded Black"',
          "sans-serif",
        ],
        "base-neue-super-expanded-black": [
          '"Base Neue Super Expanded Black"',
          "sans-serif",
        ],
        "syne-medium": ['"Syne Medium"', "sans-serif"],
        "syne-semibold": ['"Syne SemiBold"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
