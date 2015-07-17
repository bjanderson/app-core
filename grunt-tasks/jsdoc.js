'use strict';
// generate documentation from JavaScript comments
module.exports.tasks = {

  jsdoc: {
    options: {
      configure : 'jsdoc.json',
      readme: 'README.md'
    },

    all: {
      src: [
        'client/**/*.js',
        'server/**/*.js',
        '!client/vendor/**',
        '!**/*.test.js'
      ]
    }
  }

};
