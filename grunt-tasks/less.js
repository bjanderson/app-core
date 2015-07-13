'use strict';
// compile less files into css
module.exports.tasks = {
  less: {
    all: {
      files: {  //compile the following less files into css. Note: any @import's into the .less files will also be compiled automatically
        'client/main.css': 'client/main.less'
      }
    }
  }
  
};