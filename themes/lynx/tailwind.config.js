const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./layouts/**/*.html",
      "./content/**/*.{html,md}",
      "./themes/lynx/layouts/**/*.html",
      "./themes/lynx/content/**/*.{html,md}",
    ],
  },
  darkMode: "media",
  theme: {
    colors: {
      white: "#fff",
      neutral: colors.gray,
      primary: colors.purple,
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              color: theme("colors.neutral.700"),
              a: {
                color: theme("colors.primary.700"),
                textDecoration: "underline",
                textDecorationColor: theme("colors.primary.300"),
                fontWeight: "500",
                "&:hover": {
                  backgroundColor: theme("colors.primary.600"),
                  borderRadius: "0.09rem",
                  color: theme("colors.white"),
                  textDecoration: "none",
                },
              },
              strong: {
                color: theme("colors.neutral.900"),
              },
              "ol > li::before": {
                color: theme("colors.neutral.800"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.neutral.500"),
              },
              hr: {
                borderColor: theme("colors.neutral.200"),
              },
              blockquote: {
                color: theme("colors.neutral.800"),
                borderLeftColor: theme("colors.primary.200"),
              },
              h1: {
                color: theme("colors.neutral.800"),
                position: "relative",
              },
              h2: {
                color: theme("colors.neutral.800"),
                position: "relative",
              },
              h3: {
                color: theme("colors.neutral.800"),
                position: "relative",
              },
              h4: {
                color: theme("colors.neutral.800"),
                position: "relative",
              },
              code: {
                color: theme("colors.primary.800"),
              },
              "pre code": {
                color: theme("colors.neutral.700"),
              },
              pre: {
                color: theme("colors.neutral.700"),
                backgroundColor: theme("colors.neutral.50"),
              },
              "pre code": {
                color: theme("colors.neutral.700"),
              },
              thead: {
                color: theme("colors.neutral.800"),
                borderBottomColor: theme("colors.neutral.500"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.neutral.300"),
              },
              kbd: {
                backgroundColor: theme("colors.neutral.200"),
                padding: "0.1rem 0.4rem",
                borderRadius: "0.25rem",
                fontSize: "0.9rem",
                fontWeight: "600",
              },
              mark: {
                backgroundColor: theme("colors.primary.200"),
                padding: "0.1rem 0.2rem",
                borderRadius: "0.12rem",
              },
            },
          ],
        },
        light: {
          css: [
            {
              color: theme("colors.neutral.400"),
              a: {
                color: theme("colors.primary.400"),
                textDecorationColor: theme("colors.neutral.500"),
              },
              strong: {
                color: theme("colors.white"),
              },
              "ol > li::before": {
                color: theme("colors.neutral.400"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.neutral.600"),
              },
              hr: {
                borderColor: theme("colors.neutral.500"),
              },
              blockquote: {
                color: theme("colors.neutral.200"),
                borderLeftColor: theme("colors.primary.900"),
              },
              h1: {
                color: theme("colors.white"),
              },
              h2: {
                color: theme("colors.white"),
              },
              h3: {
                color: theme("colors.white"),
              },
              h4: {
                color: theme("colors.white"),
              },
              "figure figcaption": {
                color: theme("colors.neutral.400"),
              },
              code: {
                color: theme("colors.primary.500"),
              },
              "a code": {
                color: theme("colors.white"),
              },
              pre: {
                color: theme("colors.neutral.200"),
                backgroundColor: theme("colors.neutral.700"),
              },
              "pre code": {
                color: theme("colors.neutral.200"),
              },
              thead: {
                color: theme("colors.white"),
                borderBottomColor: theme("colors.neutral.500"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.neutral.700"),
              },
              kbd: {
                backgroundColor: theme("colors.neutral.700"),
                color: theme("colors.neutral.300"),
              },
              mark: {
                backgroundColor: theme("colors.primary.400"),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
