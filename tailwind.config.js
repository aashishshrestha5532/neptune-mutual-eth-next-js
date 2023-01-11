const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      ...colors,
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      neptune: "#fafafa",
      tab: {
        wrapper: "#F3F4F6",
        text: "#374151",
      },
      upcoming: {
        wrapper: "#FEF3C7",
      },
      ongoing: {
        wrapper: "#D1FAE5",
        text: "#065F46",
      },
      completed: {
        wrapper: "#F3F4F6",
        text: "#1F2937",
      },
      title: "#111827",
      muted: "#6B7280",
      lightgrey: "#D1D5DB",
    },

    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1c4683",
          secondary: "#f97316",
          accent: "#e55a28",
          neutral: "#222222",
          "base-100": "#2e2e2e",
          info: "#63A6E9",
          success: "#2AA766",
          warning: "#F1D027",
          outline: "#D1D5DB",
          error: "#F86F54",
          muted: "#6B7280",
          border: "#d9d9d9",
          background: "#000",
          "---upcoming-text": "blue",
          "--rounded-box": "0.25rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-text-case": "uppercase",
          "--btn-focus-scale": "0.95",
          "--border-btn": "2px",
          "--tab-border": "2px",
          "--tab-radius": "0.2rem",
        },
      },
    ],
  },
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
