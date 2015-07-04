'use strict';
// Run post-processors on css files.
module.exports = {
  options: {

    processors: [
      // add vendor prefixes
      require('autoprefixer-core')({
        browsers: 'last 3 versions'
      })
    ]
  },

  dev: {
    src: 'client/main.css'
  }
};