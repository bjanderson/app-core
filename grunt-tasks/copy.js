'use strict';
//copy required files for distribution
module.exports.tasks = {

  copy: {

    dist: {
    
      files: [
        {
          expand: true,
          cwd: 'client/',
          src: [
            'index.html.dist',
            'main.css',
            'common/img/**',
            'vendor/bootstrap/dist/css/bootstrap.min.css',
            'vendor/bootstrap/dist/fonts/**',
            'vendor/fontawesome/css/font-awesome.min.css',
            'vendor/fontawesome/fonts/**',
          ],
          dest: 'dist/'
        }
      ]
    },

    //copy all files in order to support debugging in the deployment environment
    debug: {
    
      files: [
        {
          expand: true,
          cwd: 'client/',
          src: [ '**' ],
          dest: 'dist/'
        }
      ]
    }
  }

};
