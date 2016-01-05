'use strict';
// Run post-processors on css files.
module.exports.tasks = {

  postcss: {
    dev: {
      src: 'client/main.css'
    },

    dist: {
      src: 'dist/main.css',
      options: {
        processors: [
          // add fallbacks for rem units
          require('pixrem')(),

          // add vendor prefixes
          require('autoprefixer')({
            browsers: 'last 3 versions'
          }),

          // minify the result
          require('cssnano')()
        ]
      }
    }
  }
};
