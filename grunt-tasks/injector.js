'use strict';
// automatically include files in index.html
module.exports.tasks = {

  injector: {
    options: {
      template: 'client/index.html',
      ignorePath: 'client',
      addRootSlash: false
    },
    local_dependencies: {
      files: {
        'client/index.html': [
          'client/common/**/*.js', 
          'client/modules/**/*.js',
          'client/main.js',
          '!client/**/*.test.js'
        ]
      }
    }
  }/*,

  watch: {
    injector: {
      files: [
        'client/common/** /*.js',
        'client/modules/** /*.js',
        'client/main.js',
        '!client/common/js/generatedhtmltemlates.js'
      ],
      options: {
        livereload: true
      }
    }
  }*/
};
  