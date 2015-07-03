'use strict';
// Add vendor prefixed styles to css
module.exports = {
  options: {

    processors: [
      // add vendor prefixes
      require('autoprefixer-core')({
        browsers: 'last 3 versions'
      })
    ]
  },

  all: {
    src: 'client/main.css'
  }
};