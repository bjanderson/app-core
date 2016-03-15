const gulp = require('gulp')
const standard = require('gulp-standard')

gulp.task('lint', function () {
  return gulp.src(['client/app/**/*.js'])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: false,
      breakOnWarning: false
    }))
})
