'use strict';
// make sure that all angular files are properly annotated for minification
module.exports.tasks = {

  ngAnnotate: {

    options: {
      singleQuotes: true,
      remove: true,
      add: true
    },

    dist: {
      
      files: [
        {
          expand: true,
          cwd: 'client',
          src: [
            '*.js',
            'common/**/*.js',
            'modules/**/*.js',
            '!**/*.test.js'
          ],
          dest: 'tmp/',
          ext: '.annotated.js', // Dest filepaths will have this extension.
          extDot: 'last',       // Extensions in filenames begin after the last dot
        }
      ]
    }
  }
  
};
