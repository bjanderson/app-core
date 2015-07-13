'use strict';
// enforce javascript style guidelines
module.exports.tasks = {

  jscs: {
    src: [
      'client/**/*.js',
      'server/**/*.js',
      '!client/common/js/generatedhtmltemplates.js',
      '!client/common/js/console-sham.js'
    ],
    options: {
      config: ".jscsrc",
      force: true
    }
  }
  
};
