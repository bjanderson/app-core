const gulp = require('gulp')
const exec = require('child_process').exec

gulp.task('test', function (cb) {
  exec('npm test', function (err, stdout, stderr) {
    console.log(stdout)
    console.log(stderr)
    cb(err)
  })
})
