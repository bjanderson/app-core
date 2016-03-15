'use strict'

const gulp = require('gulp')
const wrench = require('wrench')

wrench
  .readdirSyncRecursive('./gulp-tasks')
  .filter(function (file) {
    return (/\.(js)$/i).test(file)
  })
  .map(function (file) {
    require('./gulp-tasks/' + file)
  })

gulp.task('default', ['serve'])
