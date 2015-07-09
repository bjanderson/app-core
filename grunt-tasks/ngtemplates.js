'use strict';
//create angular templates out of all html stubs
module.exports.tasks = {

  ngtemplates:  {
    app:        {
      cwd: 'client',
      src: '**/*.tpl.html',
      dest: 'client/common/js/generatedhtmltemplates.js',
      options: {
        standalone: true,
        module: 'HTMLTemplates',
        htmlmin: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: false,
          removeComments: true, // Only if you don't use comment directives!
          removeEmptyAttributes: false,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      }
    }
  },

  watch: {
    html: {
      files: [ //livereload when any html files change
        'client/*.html',
        'client/**/*.html'
      ],
      tasks: [
        'ngtemplates'
      ],
      options: {
        livereload: true
      }
    }
  }
};
  