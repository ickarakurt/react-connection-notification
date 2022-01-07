const svg = require('rollup-plugin-svg')

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      svg({
        base64: true,
      })
    );
    return config;
  },
};