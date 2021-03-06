var gulp = require('gulp');
//var gutil = require('gulp-util');
//var bower = require('bower');
var less = require('gulp-less');
var concat = require('gulp-concat');
var angularTemplateCache = require('gulp-angular-templatecache');
//var sass = require('gulp-sass');
//var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('js-concat', function () {
  return gulp.src([
      'www/js/app.js',
      'www/tools/**/*.js',
      'www/services/**/*.js',
      'www/interapters/**/*.js',
      'www/directives/**/*.js',
      'www/controllers/**/*.js'
    ])
    .pipe(concat('agilisales.js'))
    .pipe(gulp.dest('www/dist/js'))
});

gulp.task('less-concat', function () {
  return gulp.src('www/lesses/index.client.style.less')
    .pipe(less())
    .pipe(rename(function (path) {
      path.basename = 'agilisales';
    }))
    .pipe(gulp.dest('www/dist/css'));
});

gulp.task('template-concat', function () {
  return gulp.src([
      'www/templates/*.html'
    ])
    .pipe(angularTemplateCache())
    .pipe(concat('agilisales.templates.js'))
    .pipe(gulp.dest('www/dist/js'));
});

gulp.task('app', ['js-concat', 'less-concat', 'template-concat']);


