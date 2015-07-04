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
      'auto_install',
      'update-css',
      'serve'
    ]
  );

  grunt.registerTask(
    'update-css',
    'Run all less and css related tasks. Usage update-css: env',
    function (env) {
      // how to run this task: 'grunt update-css:env'
      // env is optional - defaults to 'dev'
      var e = env || 'dev';
      if(e === 'dev' || e === 'dist') {
        grunt.task.run([
          'less',
          'postcss:' + e
        ]);
      } else {
        grunt.log.error('grunt update-css:env - Invalid option. env can be either "dev" or "dist".');
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
          'express:' + e,
          'open:' + s,
          'watch'
        ]);
      } else {
        grunt.log.error('grunt serve:env:server - Invalid option. env can be either "dev" or "dist". server can be either "http" or "https".');
      }
    }
  );
};