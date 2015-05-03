var path = require('path');

module.exports = {
  tables: {
    sass: [path.join(__dirname, 'sass')],
    js: [path.join(__dirname, 'js/**/*.js')]
  },
  base: {
    sass: [path.join(__dirname, 'node_modules/brec-base/sass')],
    js: [path.join(__dirname, 'node_modules/brec-base/js/**/*.js')],
    fonts: [path.join(__dirname, 'node_modules/brec-base/fonts/**/*.{eot,svg,ttf,woff}')]
  }
}
