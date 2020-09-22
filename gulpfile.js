var gulp = require('gulp')
var mjml = require('./index')

gulp.task('crm', async function () {
  gulp.src('./mjml/CRM/**/*.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./html'))
  gulp.src('./mjml/crm/*/*.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./html/CRM/'))
  console.log("Finish")
})

gulp.task('crmdq', async function () {
  gulp.src('./mjml/crm/DQU/*/*.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./html'))
  gulp.src('./mjml/crm/*/*.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./html'))
  console.log("Finish");
})
gulp.task('crmenf', async function () {
  gulp.src('./mjml/crm/ENF/*/*.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./html'))
  gulp.src('./mjml/crm/*/*.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./html'))
  console.log("Finish");
})

gulp.task('offers', function () {
  gulp.src('./mjml/offers/*/*.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./html'))
})

gulp.task('communications', function () {
  gulp.src('./mjml/offers/*/*.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./html'))
})

gulp.task('all', async function () {
  gulp.src('./mjml/**/*.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./html'))
})
