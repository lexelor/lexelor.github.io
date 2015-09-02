var gulp = require('gulp'),
    less = require('gulp-less'),
    notify = require("gulp-notify"),
    watch = require('gulp-watch');
 
gulp.task('build-less', function(){
  return gulp.src('less/*.less')
      .pipe(less())
      .pipe(gulp.dest('css/'))
      .pipe(notify('DONE!!!'));
});

gulp.task('watch', function(){
  gulp.watch('less/*.less', ['build-less']);
});