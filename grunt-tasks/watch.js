'use strict';
// general watches for tasks defined in Gruntfile.js. 
// Individual tasks may also have watches that are specific to them. (e.g. wiredep.js)
module.exports.tasks = {

  watch: {

    css: {
      files: [ //regenerate the css when any .less files change
        'client/*.less',
        'client/**/*.less',
        '!client/imports.less'
      ],
      tasks: [
        'run-css-tasks'
      ],
      options: {
        livereload: true
      }
    },

    js: {
      files: [ //run jshint when any javascript files change
        '**/*.js',
        '.jshintrc',
        '!client/common/js/generatedhtmltemlates.js'
      ],
      tasks: [
        'run-js-tasks'
      ]
    }
  }
}
  