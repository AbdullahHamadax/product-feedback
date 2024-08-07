import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
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

        background_body: "var(--background-body)",
        suggestions_bar: "var(--suggestions-bar)",
        feedback_title: "var(--feedback-title)",
        feedback_tag: "var(--feedback-tag)",
        feedback_paragraph: "var(--feedback-paragraph)",
        feedback_upvote: "var(--feedback-upvote)",
        feedback_tag_card: "var(--feedback-tag-card)",
        feedback_tag_card_hover: "var(--feedback-tag-card-hover)",
        add_feedback_button: "var(--add-feedback-button)",
        add_feedback_button_hover: "var(--add-feedback-button-hover)",
        delete_feedback_button: "var(--delete-feedback-button)",
        delete_feedback_button_hover: "var(--delete-feedback-button-hover)",
        edit_feedback_button_hover: "var(--edit-feedback-button-hover)",
        header_faded: "var(--header-faded)",
        list_orange: "var(--list-orange)",
        list_cyan: "var(--list-cyan)",
        roadmap_items_not_checked: "var(--roadmap-items-not-checked)",
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
      fontFamily: {
        jost: ["Jost"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
