'use strict';
//minify the javascript
module.exports.tasks = {

  uglify: {

      options: {
        mangle: false
      },

      dist: {
        files: {
          'dist/main.min.js': [
            'tmp/main.js'
          ]
        }
      }
    }

};
