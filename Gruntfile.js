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
      'serve'
    ]
  );

  grunt.registerTask('serve', 'Run the express server.', function(server, env) {
    // enter commands as 'grunt serve:server:env'
    // server and env are both optional
    var s = server || 'http',
      e = env || 'dev';

      if((s === 'http' || s === 'https') && (e === 'dev' || e === 'dist')) {
        grunt.task.run([
          'env:' + e,
          'express:' + e,
          'open:' + s,
          'watch'
        ]);
      } else {
        grunt.log.error('grunt serve - Invalid option. server can be either "http" or "https". env can be either "dev" or "dist"');
      }
  });

};