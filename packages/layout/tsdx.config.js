const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        // inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        // extract: path.resolve('dist/'),
      })
    );
    return config; // always return a config.
  },
};
