'use strict';
// find js errors and other bad stuff
module.exports.tasks = {

  jshint: {
    files: {
      src: [
        'client/**/*.js',
        'server/**/*.js'
      ]
    },
    options: {
      jshintrc: '.jshintrc',
      reporter: require('jshint-stylish'),
      force: true,
      ignores: [
        'node_modules/**/*.js',
        'client/vendor/**/*.js',
        'client/common/js/console-sham.js',
        'client/common/js/generatedhtmltemplates.js',
        'dist/**/*.js',
        'tmp/**/*.js',
        '**/*.min.js'
      ]
    }
  }
  
};
  


