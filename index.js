var path = require('path');

module.exports = {
  brecTables: {
    sass: [path.join(__dirname, 'scss')],
    js: [path.join(__dirname, 'js/**/*.js')]
  },
  brecBase: {
    sass: [path.join(__dirname, 'node_modules/brec-base/scss')],
    js: [path.join(__dirname, '/node_modules/brec-base/js/**/*.js')]
  }
}
