/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#38628c",
        "brand-primary-light": "#477cb0",
        "brand-secondary": "#BE9F86",
        "brand-secondary-light": "#CCB4A3",
        "ui-text-primary": "#333333",
        "ui-text-secondary": "#797C80",
        "ui-text-tertiary": "#B3ABBC",
        "ui-text-success": "#1C7EBA",
        "ui-text-error": "#DD6B5F",
        "ui-text-white": "#ffffff",
        "ui-text-link": "#B87069",
        "ui-element-primary": "#F9F8F8",
        "ui-element-secondary": "#005FA2",
        "ui-element-tertiary": "#BE9F86",
        "ui-element-success": "#1C7EBA",
        "ui-element-error": "#DD6B5F",
        "ui-element-neutral": "#F0EBE5",
        "ui-element-overlay": "rgba(56, 98, 140, 0.8)",
        "ui-element-inactive": "rgba(231, 226, 220, 0.5)",
        "nav-bg": "#F5F3F2",
        "ui-order-bg": "rgba(28, 126, 186, 0.80)",
      },
      fontFamily: {
        notoSerif: ["var(--font-noto-serif-tc)"],
        notoSans: ["var(--font-noto-sans-tc)"],
        roboto: ["var(--font-roboto)"],
        robotoSerif: ["var(--font-roboto-serif)"],
        biauKai: ["BiauKai"],
      },
      screens: {
        xxs: "360px",
        xs: "460px",
        sm: "525px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      rotate: {
        ...defaultTheme.rotate,
        "-30": "-30deg",
      },
      container: {
        padding: "1rem",
      },
      boxShadow: {
        navShadow: "0 -1px 0px 0px #EAEAEA",
        "drop-shadow": "0px 2px 10px rgba(25, 1, 52, 0.12)",
      },
      extend: {
        height: {
          "0.5px": "0.5px",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
