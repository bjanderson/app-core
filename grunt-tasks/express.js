'use strict';
// run the nodejs server
module.exports.tasks = {

  express: {
    options: {
      hostname: 'localhost',
      debug: false,
      livereload: true
    },

    dev: {
      options: {
        script: 'server/app.js'
      }
    }
  },

  watch: {
    express: {
      files: [
        'server/*.js',
        'server/**/*.js'
      ],
      tasks: [
        'express'
      ],
      options: {
        spawn: false
      }
    }
  }

};
  