// Karma configuration
// Generated on Wed Mar 16 2016 06:01:20 GMT-0400 (EDT)

module.exports = function (config) {
  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // karma-babel-preprocessor settings
    // tell it to use babel-preset-es2015
    babelPreprocessor: {
      options: {
        presets: [
          'es2015'
        ],
        sourceMap: 'inline'
      }
    },

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'PhantomJS'
    ],

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // Settings for the karma-coverage reporter
    coverageReporter: {
      instrumenters: {
        isparta: require('isparta')
      },
      instrumenter: {
        'client/app/*.js': 'isparta'
      },
      reporters: [
        {
          type: 'text-summary'
        },
        {
          type: 'html',
          dir: 'coverage/'
        }
      ]
    },

    // list of files to exclude
    exclude: [],

    // list of files / patterns to load in the browser
    files: [],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'chai',
      'jspm',
      'mocha'
    ],

    // tell karma about jspm
    jspm: {
      noPackagesCache: true,
      nocache: true,
      config: 'client/jspm-config.js',
      packages: 'client/jspm_packages/',
      loadFiles: [
        'test/**/*.js'
      ],
      serveFiles: [
        'client/app/**/*.js'
      ],
      paths: {
        "*": "client/*",
        "github:*": "client/jspm_packages/github/*",
        "npm:*": "client/jspm_packages/npm/*"
      }
    },

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    /*plugins: [
      'karma-babel-preprocessor',
      'karma-chai',
      'karma-coverage',
      'karma-jspm',
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-spec-reporter'
    ],*/

    // web server port
    port: 9876,

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'client/app/**/*.js': [
        'babel',
        'coverage'
      ],
      'test/**/*.js': [
        'babel'
      ]
    },

    // set up proxies so the test server will be able to find our files
    proxies: {
      '/app/': '/base/client/app/',
      '/client/': '/base/client/',
      '/jspm_packages/': '/base/client/jspm_packages/',
      '/test/': '/base/test/'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
      'coverage',
      'spec'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // set up the spec reporter - I just want to see the "expected x to equal y" output in errors
    specReporter: {
      maxLogLines: 1,
      suppressErrorSummary: true,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: false
    }
  })
}
