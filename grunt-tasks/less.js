'use strict';
// compile less files into css
module.exports.tasks = {
  less: {
    all: {
      files: {  //compile the following less files into css. Note: any @import's into the .less files will also be compiled automatically
        'client/main.css': 'client/main.less'
      }
    }
  },

  watch: {
    less: {
      files: [ //regenerate the css when any .less files change
        'client/*.less',
        'client/**/*.less'
      ],
      tasks: [
        'update-css'
      ],
      options: {
        livereload: true
      }
    }
  }
};