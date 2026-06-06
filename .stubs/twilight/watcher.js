// Stub for @salla.sa/twilight/watcher.js
// Provides a no-op webpack plugin so the build doesn't crash.
class ThemeWatcher {
  apply(compiler) {
    // no-op: the real watcher handles live-reload via Salla CLI,
    // which still works independently of this plugin.
  }
}

module.exports = ThemeWatcher;
