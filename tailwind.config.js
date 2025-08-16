export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutralneutral-01": "var(--neutralneutral-01)",
        "neutralneutral-02": "var(--neutralneutral-02)",
        "neutralneutral-03": "var(--neutralneutral-03)",
        "neutralneutral-04": "var(--neutralneutral-04)",
        "neutralneutral-05": "var(--neutralneutral-05)",
        "neutralneutral-06": "var(--neutralneutral-06)",
        "neutralneutral-07": "var(--neutralneutral-07)",
        "neutralneutral-08": "var(--neutralneutral-08)",
        "theme-colortheme-color-01": "var(--theme-colortheme-color-01)",
        "theme-colortheme-color-02": "var(--theme-colortheme-color-02)",
        "theme-colortheme-color-03": "var(--theme-colortheme-color-03)",
        "theme-colortheme-color-04": "var(--theme-colortheme-color-04)",
        white: "var(--white)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "body-14px-medium": "var(--body-14px-medium-font-family)",
        "body-14px-regular": "var(--body-14px-regular-font-family)",
        "body-16px-regular": "var(--body-16px-regular-font-family)",
        "body-18px-medium": "var(--body-18px-medium-font-family)",
        "body-18px-ragular": "var(--body-18px-ragular-font-family)",
        "body-24px-regular": "var(--body-24px-regular-font-family)",
        "body-28px-bold": "var(--body-28px-bold-font-family)",
        "body-28px-regular": "var(--body-28px-regular-font-family)",
        "headings-display-1": "var(--headings-display-1-font-family)",
        "headings-heading-1": "var(--headings-heading-1-font-family)",
        "headings-heading-5": "var(--headings-heading-5-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
