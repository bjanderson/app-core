'use strict';
// automatically open your browser to the given address
module.exports = function (grunt, options) {
  return {
    http: {
      path: 'http://localhost:' + '<%= httpPort %>'
    },

    https: {
      path: 'https://localhost:' + '<%= httpsPort %>'
    }
  }
};