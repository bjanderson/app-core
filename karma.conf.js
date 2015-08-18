// Karma configuration
// Generated on Tue Mar 17 2015 07:39:51 GMT-0400 (EDT)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: 'client',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files/patterns to load in the browser
        files: [
            '../node_modules/phantomjs-polyfill/bind-polyfill.js',
            'vendor/jquery/dist/jquery.js',
            'vendor/angular/angular.js',
            'vendor/angular-bootstrap/ui-bootstrap.js',
            'vendor/angular-bootstrap/ui-bootstrap-tpls.js',
            'vendor/angular-mocks/angular-mocks.js',
            //'vendor/angular-smart-table/dist/smart-table.js',
            'vendor/angular-ui-router/release/angular-ui-router.js',
            'vendor/bootstrap/dist/js/bootstrap.js',
            //'vendor/es5-shim/es5-sham.js',
            //'vendor/es5-shim/es5-shim.js',
            //put any other javascript dependencies here

            'main.js',
            'common/**/*.js',
            'modules/**/*.js',
            '**/*.test.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        //reporters: ['progress'],
        //reporters: ['dots'],
        reporters: ['spec'],
        //specReporter: {maxLogLines: 5},
        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-spec-reporter'
        ],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [
            //'Chrome'
            'PhantomJS'
        ],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits - allows grunt to run other tasks.
        // if false, Karma captures browsers, runs the tests and keeps listening - does not release the process in grunt
        singleRun: true
        //singleRun: false
    });
};
