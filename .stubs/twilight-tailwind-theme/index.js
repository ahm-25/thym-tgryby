// Stub for missing @salla.sa/twilight-tailwind-theme
// Exports a no-op Tailwind CSS plugin.
const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addBase, addUtilities }) {
  // no-op: the real plugin adds Salla-specific utilities and base styles
});
