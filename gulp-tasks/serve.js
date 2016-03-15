'use strict'

const browserSync = require('browser-sync').create()
const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const reload = browserSync.reload

gulp.task('serve',
  [
    'browser-sync'
  ],
  function () {
    gulp.watch('client/**/*.js').on('change', reload)
    gulp.watch('client/style.css').on('change', reload)
    gulp.watch('client/index.html').on('change', reload)

    gulp.watch('client/**/*.js', ['lint', 'test'])
  }
)

gulp.task('browser-sync',
  [
    'nodemon'
  ],
  function () {
    browserSync.init(null, {
      proxy: 'http://localhost:20080',
      browser: 'google-chrome',
      port: 10080
    })
  }
)

gulp.task('nodemon',
  [
    'lint',
    'test'
  ],
  function (done) {
    var running = false

    return nodemon({
      script: 'server/app.js',
      watch: ['server/**/*.*']
    })
      .on('start', function () {
        if (!running) {
          done()
        }
        running = true
      })
      .on('restart', function () {
        setTimeout(function () {
          reload()
        }, 500)
      })
  }
)
