'use strict';
// automatically import all less files in the project so they will be compiled by the less processor
module.exports = {
  all: {
    options: {
    },
    files: {
      'client/imports.less': [
        'client/common/**/*.less',
        'client/modules/**/*.less'
      ]
    }
  }
};