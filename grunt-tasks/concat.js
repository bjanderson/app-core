'use strict';
// combine files together
// note: concat keeps the order when concatenating files together
module.exports.tasks = {

  concat: {
    
    options: {
      separator: ';\n',
      sourceMap: true
    },

    dist: {
      files: {
        'dist/vendor.js': [
          'client/vendor/jquery/dist/jquery.js',

          'client/vendor/angular/angular.js',

          'client/vendor/bootstrap/dist/js/bootstrap.min.js',

          'client/vendor/angular-bootstrap/ui-bootstrap.min.js',
          'client/vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',

          'client/vendor/angular-ui-router/release/angular-ui-router.min.js'
        ],

        'tmp/main.js': [
          'tmp/common/**/*.annotated.js',
          'tmp/modules/**/*.annotated.js',
          'tmp/main.annotated.js'
        ]
      }
    }
  }
};

    