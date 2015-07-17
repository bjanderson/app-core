'use strict';

module.exports = function(grunt) {

  var configs,

    options = {
      config: {
        src: "grunt-tasks/*.js"
      },
      httpPort: 20080,
      httpsPort: 20443
    },

    timer = require("grunt-timer");

  timer.init(grunt, {color: "blue"});

  require('load-grunt-tasks')(grunt);
  
  configs = require('load-grunt-configs')(grunt, options);

  grunt.initConfig(configs);

  grunt.registerTask(
    'default',
    [
      'init',
      'run-css-tasks',
      'run-js-tasks',
      'karma',
      'jsdoc',
      'serve'
    ]
  );

  grunt.registerTask(
    'build',
    'Build the project and put it in the dist directory.',
    function (debug) {
      // how to run this task: 'grunt build:debug'
      // debug is optional - if specified it will copy all source code to the dist directory as-is
      var e = debug ? 'debug' : 'dist';
      if(e === 'dist') {
        grunt.task.run([
          'init',
          'clean:dist',
          'copy:dist',
          'run-css-tasks:dist',
          'run-js-tasks:dist',
          'ngAnnotate:dist',
          'concat:dist',
          'uglify:dist',
          'rename:dist'
        ]);
      } else if(e === 'debug') {
        grunt.task.run([
          'init',
          'clean:dist',
          'run-css-tasks',
          'run-js-tasks',
          'copy:debug'
        ]);
      }
    }
  );

  grunt.registerTask(
    'init',
    'Run all pre-requisite tasks that install and inject dependencies.',
    function () {
      grunt.task.run([
        'auto_install',
        'wiredep',
        'ngtemplates',
        'injector'
      ]);
    }
  );

  grunt.registerTask(
    'run-css-tasks',
    'Run all less and css related tasks. Usage run-css-tasks: env',
    function (env) {
      // how to run this task: 'grunt run-css-tasks:env'
      // env is optional - defaults to 'dev'
      var e = env || 'dev';
      if(e === 'dev' || e === 'dist') {
        grunt.task.run([
          'less_imports',
          'less',
          'postcss:' + e
        ]);
      } else {
        grunt.log.error('grunt run-css-tasks:env - Invalid option. env can be either "dev" or "dist".');
      }
    }
  );

  grunt.registerTask(
    'run-js-tasks',
    'Run all js related tasks. Usage run-js-tasks: env',
    function (env) {
      // how to run this task: 'grunt run-js-tasks:env'
      // env is optional - defaults to 'dev'
      var e = env || 'dev';
      if(e === 'dev' || e === 'dist') {
        grunt.task.run([
          'jshint',
          'jscs'
        ]);
      } else {
        grunt.log.error('grunt run-js-tasks:env - Invalid option. env can be either "dev" or "dist".');
      }
    }
  );

  grunt.registerTask(
    'serve', 
    'Run all tasks associated with the express server. Useage: grunt serve:env:server', 
    function (env, server) {
      // how to run this task: 'grunt serve:env:server'
      // env is optional - defaults to 'dev'
      // server is optional - defaults to 'http'
      var e = env || 'dev',
        s = server || 'http';

      if((e === 'dev' || e === 'dist') && (s === 'http' || s === 'https')) {
        grunt.task.run([
          'env:' + e,
          'express',
          'open:' + s,
          'watch'
        ]);
      } else {
        grunt.log.error('grunt serve:env:server - Invalid option. env can be either "dev" or "dist". server can be either "http" or "https".');
      }
    }
  );
};