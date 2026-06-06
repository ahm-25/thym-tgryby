// Stub for missing @salla.sa/twilight-tailwind-theme
// Provides the custom Tailwind utilities that the real package would define.
const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function({ addBase, addUtilities }) {
    // no-op: the real plugin may add base styles and utilities
  },
  {
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: 'var(--color-primary)',
            d: 'var(--color-primary-dark)',
            dark: 'var(--color-primary-dark)',
            reverse: 'var(--color-primary-reverse, #ffffff)',
          },
        },
      },
    },
  }
);
