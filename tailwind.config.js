const {
  colors,
  font,
  spacing,
  radii,
  shadows,
} = require("./utils/designTokens");

module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.{vue,js}",
    "./pages/**/*.{vue,js}",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./.storybook/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        primaryDark: colors.primaryDark,
        secondary: colors.secondary,
        accent: colors.accent,
        text: colors.text,
        muted: colors.muted,
        error: colors.error,
        success: colors.success,
      },
      fontFamily: {
        sans: [font.family],
      },
      fontSize: {
        xs: font.sizes.xs,
        sm: font.sizes.sm,
        base: font.sizes.base,
        md: font.sizes.md,
        lg: font.sizes.lg,
        xl: font.sizes.xl,
        xxl: font.sizes.xxl,
        "custom-lg": "25.73571875px",
      },
      spacing: {
        xs: spacing.xs,
        sm: spacing.sm,
        md: spacing.md,
        lg: spacing.lg,
        xl: spacing.xl,
      },
      borderRadius: {
        sm: radii.sm,
        md: radii.md,
        lg: radii.lg,
        full: radii.full,
      },
      boxShadow: {
        sm: shadows.sm,
        md: shadows.md,
        lg: shadows.lg,
      },
    },
  },
  plugins: [],
};
