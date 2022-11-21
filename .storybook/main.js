const copy = require('rollup-plugin-copy');

module.exports = {
  stories: ['../dist/stories/**/*.stories.{js,md,mdx}'],
  rollupConfig(config) {
    // add a new plugin to the build
    config.plugins.push(copy({
      targets: [
        { src: 'data.json', dest: 'dist' },
      ]
    }));

    return config;
  },
};
