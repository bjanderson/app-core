'use strict';
// set environment variables that can be read by the node server
module.exports = function (grunt, options) {
  return {
    options: {
      HTTP_PORT: '<%= httpPort %>',
      HTTPS_PORT: '<%= httpsPort %>'
    },

    dev: {
      NODE_ENV: 'dev'
    },

    dist: {
      NODE_ENV: 'dist'
    }
  }
};