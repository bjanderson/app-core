'use strict';
// test the javascript
module.exports.tasks = {

  karma: {
    unit: {
      configFile: 'karma.conf.js'
    }
  }

  // uncomment this to run tests every time a js file is modified
  /*karma: {
    files: [
      'client/** /*.js'
    ],
    tasks: [
      'karma'
    ]
  }*/

};
